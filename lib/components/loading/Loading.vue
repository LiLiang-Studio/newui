<template>
  <div :class="[cls, customClass, { 'is-fullscreen': fullscreen }]" :style="{ background, zIndex }">
    <div :class="`${cls}_spinner`">
      <i v-if="spinner" :class="spinner"></i>
      <svg v-else viewBox="25 25 50 50" :class="`${cls}_circular`">
        <circle :class="`${cls}_path`" cx="50" cy="50" r="20" fill="none"></circle>
      </svg>
      <p :class="`${cls}_text`">{{ text }}</p>
    </div>
  </div>
</template>

<script setup>
import { S } from '../../types'

defineProps({
  text: S,
  spinner: S,
  background: S,
  customClass: S
})

const cls = 'x-loading'
</script>
