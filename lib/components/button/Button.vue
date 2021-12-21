<template>
  <button :class="classes" :type="nativeType" :disabled="isDisabled">
    <i v-if="loading" class="x-icon-loading"></i>
    <i v-else-if="icon" :class="icon"></i>
    <span v-if="$slots.default">
      <slot />
    </span>
  </button>
</template>

<script setup>
import { computed, inject } from 'vue'
import { B, oneOf, S, statusTypes } from '../../types'

const props = defineProps({
  size: {
    validator: v => oneOf(['medium', 'small', 'mini'], v)
  },
  type: {
    default: 'default',
    validator: v => oneOf(['default', 'primary', 'text', ...statusTypes], v)
  },
  plain: B,
  round: B,
  circle: B,
  loading: B,
  disabled: B,
  icon: S,
  nativeType: {
    default: 'button',
    validator: v => oneOf(['button', 'submit', 'reset'], v)
  }
})

const xForm = inject('xForm', {})
const xButtonGroup = inject('xButtonGroup', {})

const isDisabled = computed(() => props.disabled || xForm.disabled || props.loading)

const classes = computed(() => {
  const cls = 'x-button'
  const size = props.size || xButtonGroup.size || xForm.size
  return [
    cls,
    `${cls}_${props.type}`,
    {
      [`${cls}_${size}`]: size,
      'is-plain': props.plain,
      'is-loading': props.loading,
      'is-round': props.round,
      'is-circle': props.circle,
      'is-disabled': isDisabled.value
    }
  ]
})
</script>
