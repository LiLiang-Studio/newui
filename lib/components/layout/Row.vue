<template>
  <div :class="classes" :style="styles">
    <slot />
  </div>
</template>

<script setup>
import { computed, provide, toRefs } from 'vue'
import { N0, oneOf } from '../../types'

const props = defineProps({
  gutter: N0,
  justify: {
    default: 'start',
    validator: v => oneOf(['start', 'end', 'center', 'space-around', 'space-between'], v)
  },
  align: {
    validator: v => oneOf(['top', 'middle', 'bottom'], v)
  }
})

const { gutter } = toRefs(props)

provide('gutter', gutter)

const classes = computed(() => {
  const cls = 'x-row'
  return [
    cls,
    props.align && `${cls}_${props.align}`,
    props.justify && `${cls}_${props.justify}`,
    { gutter: props.gutter }
  ]
})

const styles = computed(() => props.gutter && { margin: `0 -${props.gutter / 2}px` })
</script>
