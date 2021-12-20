<template>
  <div :class="classes" :style="styles">
    <slot />
  </div>
</template>

<script setup>
import { computed, inject, onMounted } from 'vue'
import { N, N0 } from '../../types'
import { addStylesheet, cls } from './utils'

const props = defineProps({
  span: {
    type: N,
    default: 24
  },
  offset: N0,
  push: N0,
  pull: N0,
  xs: {},
  sm: {},
  md: {},
  lg: {},
  xl: {}
})

const classes = computed(() => {
  const clsList = [cls]
  ;['span', 'offset', 'push', 'pull'].forEach(k => {
    const v = +props[k]
    v && clsList.push(`${cls}_${k}-${v}`)
  })
  ;['xs', 'sm', 'md', 'lg', 'xl'].forEach(k => {
    const v = props[k]
    if (v) {
      const opts = +v ? { span: +v } : v
      Object.keys(opts).forEach(k2 => {
        clsList.push(`${cls}_${k}-${k2}-${opts[k2]}`)
      })
    }
  })
  return clsList
})

const gutter = inject('gutter')

const styles = computed(() => {
  const padding = `${gutter.value / 2}px`
  return gutter.value && { paddingLeft: padding, paddingRight: padding }
})

onMounted(() => {
  addStylesheet()
})
</script>
