<template>
  <div :class="cls">
    <slot />
    <sup :class="[`${cls}_content`, type, { 'is-dot': isDot, 'is-fixed': $slots.default }]">
      {{ isDot ? '' : isNum(value) && max && value > max ? `${max}+` : value }}
    </sup>
  </div>
</template>

<script setup>
import { N, S, B, oneOf, statusTypes, isNum } from '../../types'

defineProps({
  value: [S, N],
  max: N,
  isDot: B,
  hidden: B,
  type: {
    validator: v => oneOf(['primary', ...statusTypes], v)
  }
})

const cls = 'x-badge'
</script>
