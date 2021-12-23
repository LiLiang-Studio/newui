<template>
  <ul class="x-timeline">
    <slot />
  </ul>
</template>

<script setup>
import { B } from '../../types'

const props = defineProps({ reverse: B })
</script>
