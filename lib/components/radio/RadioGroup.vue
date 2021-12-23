<template>
  <div class="x-radio-group">
    <slot />
  </div>
</template>

<script setup>
import { provide, reactive } from 'vue'
import { B, NSB, oneOf, S, sizes } from '../../types'

const props = defineProps({
  modelValue: NSB,
  size: {
    validator: v => oneOf(sizes, v)
  },
  disabled: B,
  textColor: S,
  fill: S
})

const emit = defineEmits(['change', 'update:modelValue'])

function updateModel (v) {
  emit('update:modelValue', v)
  emit('change', v)
}

provide('xRadioGroup', reactive(props))
provide('xRadioGroupUtil', { updateModel })
</script>
