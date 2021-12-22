<template>
  <label :class="classes" @click="onClick">
    <span tabindex="0" :class="[`${cls}_box`, { 'is-checked': isChecked || indeterminate }]">
      <i v-if="indeterminate" class="x-icon-minus"></i>
      <i v-else-if="isChecked" class="x-icon-check"></i>
    </span>
    <span :class="`${cls}_label`">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script setup>
import { computed } from 'vue'
import { B, NSB, oneOf } from '../../types'
import utils from './utils'

const props = defineProps({
  modelValue: NSB,
  label: NSB,
  trueLabel: { type: NSB, default: true },
  falseLabel: { type: NSB, default: false },
  disabled: B,
  border: B,
  size: {
    validator: v => oneOf(['medium', 'small', 'mini'], v)
  },
  indeterminate: B
})

const emit = defineEmits(['change', 'update:modelValue'])

const { xCheckboxGroup, isDisabled, boxSize } = utils(props)

const cls = 'x-checkbox'

const isChecked = computed(() => {
  return xCheckboxGroup ? xCheckboxGroup.getItemCheckedState(props.label) : props.modelValue === props.trueLabel
})

const classes = computed(() => {
  return [
    cls,
    boxSize.value && `${cls}_${boxSize.value}`,
    {
      'is-border': props.border,
      'is-disabled':isDisabled.value
    }
  ]
})

function onClick () {
  if (isDisabled.value) return
  if (xCheckboxGroup) {
    xCheckboxGroup.updateModel(props.label)
  } else {
    const v = props.modelValue === props.trueLabel ? props.falseLabel : props.trueLabel
    emit('update:modelValue', v)
    emit('change', v)
  }
}
</script>
