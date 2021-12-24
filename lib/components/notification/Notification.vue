<template>
  <div></div>
</template>

<script setup>
import { BTrue, N, oneOf, S } from '../../types'

const props = defineProps({
  title: S,
  type: {
    validator: v => oneOf(['success', 'warning', 'info', 'error'], v)
  },
  iconClass: S,
  customClass: S,
  duration: {
    type: N,
    default: 4500
  },
  showClose: BTrue
})
</script>
