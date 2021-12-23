<template>
  <div class="x-checkbox-group">
    <slot />
  </div>
</template>

<script setup>
import { provide, reactive } from 'vue'
import { A, B, N, oneOf, S, sizes } from '../../types'

const props = defineProps({
  modelValue: A,
  size: {
    validator: v => oneOf(sizes, v)
  },
  disabled: B,
  min: N,
  max: N,
  textColor: S,
  fill: S
})

const emit = defineEmits(['change', 'update:modelValue'])

function updateModel (v) {
  const { modelValue } = props
  const index = modelValue.indexOf(v)
  index < 0 ? modelValue.push(v) : modelValue.splice(index, 1)
  emit('update:modelValue', modelValue)
  emit('change', modelValue)
}

const getItemCheckedState = v => props.modelValue.includes(v)

function getItemDisabledState (v) {
  const { modelValue } = props
  const len = modelValue.length
  if (len >= (props.max || Infinity)) {
    return modelValue.indexOf(v) < 0
  } else if (len <= (props.min || 0)) {
    return modelValue.indexOf(v) > -1
  }
  return false
}

provide('xCheckboxGroup', reactive({
  ...props,
  updateModel,
  getItemCheckedState,
  getItemDisabledState
}))
</script>
