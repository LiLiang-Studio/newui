<template>
  <button :class="classes" :style="styles" :disabled="isDisabled" @click="onClick">
    <slot />
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

const { boxSize, isDisabled, xCheckboxGroup } = helper(props)

const cls = 'x-checkbox-button'

const isChecked = computed(() => xCheckboxGroup && xCheckboxGroup.getItemCheckedState(props.label))

const classes = computed(() => {
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
    const { textColor, fill } = xCheckboxGroup
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
  !isDisabled.value && xCheckboxGroup && xCheckboxGroup.updateModel(props.label)
}
</script>
