<template>
  <div :class="[cls, `${cls}_${shadow}`]">
    <div v-if="$slots.header || header" :class="`${cls}_header`">
      <slot name="header">{{ header }}</slot>
    </div>
    <div :class="`${cls}_body`" :style="bodyStyle">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { oneOf, S } from '../../types'

defineProps({
  header: S,
  bodyStyle: {},
  shadow: {
    default: 'always',
    validator: v => oneOf(['always', 'hover', 'never'], v)
  }
})

const cls = 'x-card'
</script>
