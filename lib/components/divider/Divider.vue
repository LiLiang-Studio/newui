<template>
  <div :class="[cls, direction && `${cls}_${direction}`]">
    <div v-if="direction !== 'vertical'" :class="[`${cls}_text`, contentPosition]">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { oneOf } from '../../types'

defineProps({
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

</script>
