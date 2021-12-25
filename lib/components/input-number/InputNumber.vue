<template>
  <div :class="[cls, { [`${cls}_${boxSize}`]: boxSize }]">
    <template v-if="controls">
      <span :class="[`${cls}_control`, `${cls}_minus`, { 'is-disabled': isDisabled || isDisabledMinus, 'is-right': isPosRight }]" @click="onMinus">
        <i v-if="isPosRight" class="x-icon-arrow-down"></i>
        <i v-else class="x-icon-minus"></i>
      </span>
      <span :class="[`${cls}_control`, `${cls}_plus`, { 'is-disabled': isDisabled || isDisabledPlus, 'is-right': isPosRight }]" @click="onPlus">
        <i v-if="isPosRight" class="x-icon-arrow-up"></i>
        <i v-else class="x-icon-plus"></i>
      </span>
    </template>
    <x-input
      :model-value="modelValue"
      :placeholder="placeholder"
      :disabled="isDisabled"
      :size="boxSize"
      @blur="onBlur"
      @update:model-value="onInput" />
  </div>
</template>

<script setup>
import { computed, inject, watch } from 'vue'
import { B, BTrue, isEmpty, N, oneOf, S, sizes } from '../../types'
import { Input as XInput } from '../input'

const props = defineProps({
  modelValue: { type: [N, S], default: 0 },
  min: { type: N, default: -Infinity },
  max: { type: N, default: Infinity },
  step: { type: N, default: 1 },
  stepStrictly: B,
  precision: N,
  size: {
    validator: v => !v || oneOf(sizes, v)
  },
  disabled: B,
  controls: BTrue,
  controlsPosition: S,
  placeholder: S
})

const emit = defineEmits(['update:modelValue', 'blur'])

const xForm = inject('xForm', {})

const cls = 'x-input-number'

const isDisabled = computed(() => props.disabled || xForm.disabled)
const boxSize = computed(() => props.size || xForm.size)
const isPosRight = computed(() => props.controlsPosition === 'right')
const isDisabledMinus = computed(() => props.modelValue <= props.min)
const isDisabledPlus = computed(() => props.modelValue >= props.max)

let initValue

watch(
  () => props.modelValue,
  v => {
    if (isEmpty(initValue) && !isEmpty(v)) {
      initValue = v
    }
  },
  { immediate: true }
)

function emitValue (v) {
  let value = Math.max(Math.min(v, props.max), props.min)
  if (props.stepStrictly) {
    const mod = Math.abs((value - initValue) % props.step)
    if (mod) {
      const small = value - mod
      const big = value > 0 ? value + props.step - mod : value + mod
      value = big > props.max ? small : big
    }
  }
  if (props.precision) {
    value = +value.toFixed(props.precision)
  }
  emit('update:modelValue', value)
}

function onMinus () {
  if (isDisabled.value || isDisabledMinus.value) return
  emitValue(props.modelValue - props.step)
}

function onPlus () {
  if (isDisabled.value || isDisabledPlus.value) return
  emitValue(props.modelValue + props.step)
}

function onInput (v) {
  !isNaN(v) && emit('update:modelValue', isEmpty(v) ? '' : +v)
}

function onBlur (e) {
  !isNaN(props.modelValue) && !isEmpty(props.modelValue) && emitValue(props.modelValue)
  emit('blur', e)
}
</script>
