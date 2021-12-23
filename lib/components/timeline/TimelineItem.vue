<template>
  <li :class="cls">
    <div :class="`${cls}_tail`"></div>
    <div :class="nodeCls" :style="{ backgroundColor: color }">
      <i v-if="icon" :class="[icon, `${cls}_icon`]"></i>
    </div>
    <div :class="`${cls}_wrapper`">
      <div v-if="!hideTimestamp && placement === 'top'" :class="`${cls}_timestamp`">{{ timestamp }}</div>
      <div :class="`${cls}_content`">
        <slot />
      </div>
      <div v-if="!hideTimestamp && placement !== 'top'" :class="`${cls}_timestamp`">{{ timestamp }}</div>
    </div>
  </li>
</template>

<script setup>
import { computed } from 'vue'
import { B, oneOf, S, statusTypes } from '../../types'

const props = defineProps({
  timestamp: S,
  hideTimestamp: B,
  placement: {
    validator: v => oneOf(['top', 'bottom'], v)
  },
  type: {
    validator: v => oneOf(['primary', ...statusTypes], v)
  },
  color: S,
  size: {
    default: 'default',
    validator: v => oneOf(['default', 'large'], v)
  },
  icon: S
})

const cls = 'x-timeline-item'

const nodeCls = computed(() => {
  const c = `${cls}_node`
  return [c, `${c}-${props.size}`, props.type && `${c}-${props.type}`]
})
</script>
