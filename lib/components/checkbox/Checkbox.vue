<template>
  <label :class="classes" :style="styles" @click="onClick">
    <span tabindex="0" :class="[`${cls}_box`, { 'is-checked': isChecked || indeterminate }]" :style="boxStyles">
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
import { B, NSB, oneOf, sizes } from '../../types'
import helper from './helper'

const props = defineProps({
  modelValue: NSB,
  label: NSB,
  trueLabel: { type: NSB, default: true },
  falseLabel: { type: NSB, default: false },
  disabled: B,
  border: B,
  size: {
    validator: v => oneOf(sizes, v)
  },
  indeterminate: B
})

const emit = defineEmits(['change', 'update:modelValue'])

const { xCheckboxGroup, isDisabled, boxSize } = helper(props)

const cls = 'x-checkbox'

const isChecked = computed(() => {
  return xCheckboxGroup ? xCheckboxGroup.getItemCheckedState(props.label) : props.modelValue === props.trueLabel
})

const classes = computed(() => {
  return [
    cls,
    boxSize.value && props.border && `${cls}_${boxSize.value}`,
    {
      'is-border': props.border,
      'is-checked': isChecked.value,
      'is-disabled':isDisabled.value
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
    }
  }
  return obj
})

const boxStyles = computed(() => {
  const obj = {}
  if (isChecked.value && !isDisabled.value) {
    const { fill } = xCheckboxGroup
    if (fill) {
      obj.borderColor = fill
      obj.backgroundColor = fill
    }
  }
  return obj
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
