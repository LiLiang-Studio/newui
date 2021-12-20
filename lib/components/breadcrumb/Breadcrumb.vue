<template>
  <div class="x-breadcrumb">
    <slot />
  </div>
</template>

<script setup>
import { provide, reactive } from 'vue'
import { S } from '../../types'

const props = defineProps({
  separator: { type: S, default: '/' },
  separatorClass: S
})

provide('sep', reactive(props))
</script>
