<template>
  <div class="x-button-group">
    <slot />
  </div>
</template>

<script setup>
import { provide, reactive } from 'vue'
import { S } from '../../types'

const props = defineProps({ size: S })

provide('xButtonGroup', reactive(props))
</script>
