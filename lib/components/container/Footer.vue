<template>
  <div class="x-footer" :style="{ height }">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'XFooter'
}
</script>

<script setup>
import { S } from '../../types'

defineProps({
  height: { type: S, default: '60px' }
})
</script>
