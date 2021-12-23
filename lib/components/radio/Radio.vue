<template>
  <label :class="classes" @click="onClick">
    <span :class="`${cls}_radio`">
      <transition :name="cls">
        <span v-if="isChecked" :class="`${cls}_dot`"></span>
      </transition>
    </span>
    <span :class="`${cls}_label`">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script setup>
import { computed, inject } from 'vue'
import { B, NSB, oneOf, sizes } from '../../types'
import helper from './helper'

const props = defineProps({
  modelValue: NSB,
  label: NSB,
  disabled: B,
  border: B,
  size: {
    validator: v => oneOf(sizes, v)
  }
})

const emit = defineEmits(['change', 'update:modelValue'])

const { xRadioGroup, groupUtils, boxSize, isDisabled } = helper(props)

const cls = 'x-radio'

const isChecked = computed(() => (xRadioGroup || props).modelValue === props.label)

const classes = computed(() => {
  return [
    cls,
    boxSize.value && props.border && `${cls}_${boxSize.value}`,
    {
      'is-border': props.border,
      'is-checked': isChecked.value,
      'is-disabled': isDisabled.value
    }
  ]
})

function onClick () {
  const { label } = props
  if (groupUtils) {
    groupUtils.updateModel(label)
  } else {
    emit('update:modelValue', label)
    emit('change', label)
  }
}
</script>
