<template>
  <div class="x-aside" :style="{ width }">
    <slot />
  </div>
</template>

<script setup>
import { S } from '../../types'

defineProps({
  width: { type: S, default: '300px' }
})
</script>
