<template>
  <button :class="classes" :disabled="isDisabled" @click="onClick">
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

function onClick () {
  !isDisabled.value && xCheckboxGroup && xCheckboxGroup.updateModel(props.label)
}
</script>
