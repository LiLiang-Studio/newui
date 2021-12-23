<template>
  <button :disabled="isDisabled" :class="classes" :style="styles" @click="onClick">
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

const isChecked = computed(() => xRadioGroup.modelValue === props.label)

const classes = computed(() => {
  const cls = 'x-radio-button'
  return [
    cls,
    boxSize.value && `${cls}_${boxSize.value}`,
    {
      'is-checked': isChecked.value,
      'is-disabled': isDisabled.value
    }
  ]
})

const styles = computed(() => {
  const obj = {}
  if (isChecked.value && !isDisabled.value) {
    const { textColor, fill } = xRadioGroup
    if (textColor) {
      obj.color = textColor
    }
    if (fill) {
      obj.borderColor = fill
      obj.backgroundColor = fill
    }
  }
  return obj
})

function onClick () {
  !isDisabled.value && groupUtil && groupUtil.updateModel(props.label)
}
</script>
