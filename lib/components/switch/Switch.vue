<template>
  <div :class="[cls, { 'is-disabled': isDisabled }]" @click="onClick">
    <span
      v-if="inactiveText && !inactiveIconClass"
      :class="[`${cls}_label`, 'is-left', { 'is-active': modelValue === inactiveValue }]">
      {{ inactiveText }}
    </span>
    <span
      :class="[`${cls}_core`, { 'is-active': isActive }]"
      :style="{
        width: `${width}px`,
        backgroundColor: isActive ? activeColor : inactiveColor
      }">
      <span :class="`${cls}_ball`">
        <i :class="isActive ? activeIconClass : inactiveIconClass"></i>
      </span>
    </span>
    <span
      v-if="activeText && !activeIconClass"
      :class="[`${cls}_label`, 'is-right', { 'is-active': isActive }]">
      {{ activeText }}
    </span>
  </div>
</template>

<script setup>
import { computed, inject } from 'vue'
import { N, S, B, NSB } from '../../types'

const props = defineProps({
  modelValue: NSB,
  disabled: B,
  width: { type: N, default: 40 },
  activeIconClass: S,
  inactiveIconClass: S,
  activeText: S,
  inactiveText: S,
  activeValue: { type: NSB, default: true },
  inactiveValue: { type: NSB, default: false },
  activeColor: S,
  inactiveColor: S
})

const emit = defineEmits(['change', 'update:modelValue'])

const xForm = inject('xForm', {})

const cls = 'x-switch'

const isActive = computed(() => props.modelValue === props.activeValue)
const isDisabled = computed(() => props.disabled || xForm.disabled)

function onClick () {
  if (isDisabled.value) return
  const v = props.modelValue === props.activeValue ? props.inactiveValue : props.activeValue
  emit('update:modelValue', v)
  emit('change', v)
}
</script>
