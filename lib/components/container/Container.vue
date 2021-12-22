<template>
  <div :class="['x-container', { 'is-vertical': isVertical }]">
    <slot />
  </div>
</template>

<script setup>
import { computed, useSlots } from 'vue'
import { oneOf } from '../../types'

const props = defineProps({
  direction: {
    validator: v => oneOf(['horizontal', 'vertical'], v)
  }
})

const slots = useSlots()

const isVertical = computed(() => {
  const dir = props.direction
  return dir === 'vertical' ||
    (dir !== 'horizontal' && slots.default().some(vnode => {
      const { name } = vnode.type
      return name && ['XFooter', 'XHeader'].includes(name)
    }))
})
</script>
