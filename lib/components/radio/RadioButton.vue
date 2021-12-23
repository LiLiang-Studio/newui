<template>
  <button :disabled="isDisabled" :class="classes" @click="onClick">
    <slot>{{ label }}</slot>
  </button>
</template>

<script setup>
import { computed } from 'vue'
import { B, NSB } from '../../types'
import helper from './helper'

const props = defineProps({
  label: NSB,
  disabled: B
})

const { xRadioGroup, groupUtil, isDisabled, boxSize } = helper(props)

const classes = computed(() => {
  const cls = 'x-radio-button'
  return [
    cls,
    boxSize.value && `${cls}_${boxSize.value}`,
    {
      'is-checked': xRadioGroup.modelValue === props.label,
      'is-disabled': isDisabled.value
    }
  ]
})

function onClick () {
  !isDisabled.value && groupUtil && groupUtil.updateModel(props.label)
}
</script>
