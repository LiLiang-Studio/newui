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
    <x-input :model-value="modelValue" :placeholder="placeholder" :disabled="isDisabled" :size="boxSize" @update:model-value="onInput" />
  </div>
</template>

<script setup>
import { computed, inject } from 'vue'
import { B, BTrue, N, N0, oneOf, S, sizes } from '../../types'
import { Input as XInput } from '../input'

const props = defineProps({
  modelValue: N0,
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

const emit = defineEmits(['update:modelValue'])

const xForm = inject('xForm', {})

const cls = 'x-input-number'

const isDisabled = computed(() => props.disabled || xForm.disabled)
const boxSize = computed(() => props.size || xForm.size)
const isPosRight = computed(() => props.controlsPosition === 'right')
const isDisabledMinus = computed(() => props.modelValue <= props.min)
const isDisabledPlus = computed(() => props.modelValue >= props.max)

function onMinus () {
  if (isDisabled.value || isDisabledMinus.value) return
  emit('update:modelValue', props.modelValue ? Math.max(props.modelValue - props.step, props.min) : props.min)
}

function onPlus () {
  if (isDisabled.value || isDisabledPlus.value) return
  emit('update:modelValue', props.modelValue ? Math.min(+props.modelValue + props.step, props.max) : props.min)
}

function onInput (v) {
  emit('update:modelValue', +v)
}
</script>
