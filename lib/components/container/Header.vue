<template>
  <div class="x-header" :style="{ height }">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'XHeader'
}
</script>

<script setup>
import { S } from '../../types'

defineProps({
  height: { type: S, default: '60px' }
})
</script>
