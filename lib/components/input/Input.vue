<template>
  <div :class="[cls, { 'is-disabled': isDisabled }]">
    <div :class="`${cls}_prepend`">
      <slot name="prepend" />
    </div>
    <div :class="`${cls}_box`">
      <div v-if="hasPrefix" :class="`${cls}_prefix`">
        <slot name="prefix">
          <i v-if="prefixIcon" :class="prefixIcon"></i>
        </slot>
      </div>
      <textarea
        v-if="isTextarea"
        :class="inputClasses"
        :value="modelValue"
        :disabled="isDisabled"
        v-bind="$attrs"
        @input="onInput"></textarea>
      <input
        v-else
        :class="inputClasses"
        :value="modelValue"
        :disabled="isDisabled"
        v-bind="$attrs"
        @input="onInput">
      <div v-if="hasSuffix" :class="`${cls}_suffix`">
        <i v-if="modelValue && clearable" :class="['x-icon-circle-close', `${cls}_clear`]" @click="onClear"></i>
        <template v-else>
          <slot name="suffix">
            <i v-if="suffixIcon" :class="suffixIcon"></i>
          </slot>
        </template>
      </div>
    </div>
    <div :class="`${cls}_append`">
      <slot name="append" />
    </div>
  </div>
</template>

<script setup>
import { computed, inject, useAttrs, useSlots } from 'vue'
import { B, N, O, oneOf, S, sizes } from '../../types'

const props = defineProps({
  modelValue: [S, N],
  showWordLimit: B,
  clearable: B,
  showPassword: B,
  disabled: B,
  size: {
    validator: v => !v || oneOf(sizes, v)
  },
  prefixIcon: S,
  suffixIcon: S,
  autosize: [B, O],
  resize: {
    validator: v => oneOf(['none', 'both', 'horizontal', 'vertical'], v)
  }
})

const emit = defineEmits(['clear', 'update:modelValue'])

const xForm = inject('xForm', {})

const cls = 'x-input'

const attrs = useAttrs()
const slots = useSlots()

const isTextarea = computed(() => attrs.type === 'textarea')

const isDisabled = computed(() => props.disabled || xForm.disabled)

const hasPrefix = computed(() => props.prefixIcon || slots.prefix)

const hasSuffix = computed(() => (props.modelValue && props.clearable) || props.suffixIcon || slots.suffix)

const inputClasses = computed(() => {
  return [`${cls}_inner`, { 'has-prefix': hasPrefix.value, 'has-suffix': hasSuffix.value }]
})

function onInput (/** @type {InputEvent} */ e) {
  emit('update:modelValue', e.target.value)
}

function onClear () {
  emit('update:modelValue', '')
  emit('clear')
}
</script>
