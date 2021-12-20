<template>
  <div :class="classes">
    <div v-if="direction !== 'vertical'" :class="[`${cls}_text`, contentPosition]">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { computed } from '@vue/reactivity'
import { oneOf } from '../../types'

const props = defineProps({
  direction: {
    default: 'horizontal',
    validator: v => oneOf(['horizontal', 'vertical'], v)
  },
  contentPosition: {
    default: 'center',
    validator: v => oneOf(['left', 'right', 'center'], v)
  }
})

const cls = 'x-divider'

const classes = computed(() => {
  return [cls, props.direction && `${cls}_${props.direction}`]
})
</script>
