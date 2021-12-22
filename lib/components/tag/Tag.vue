<template>
  <transition :name="cls">
    <span :class="classes" :style="{ backgroundColor: color }" v-bind="$attrs">
      <slot />
      <i v-if="closable" :class="['x-icon-close', `${cls}_close`]" @click="emit('close')"></i>
    </span>
  </transition>
</template>

<script setup>
import { computed } from 'vue'
import { B, oneOf, S, statusTypes } from '../../types'

const props = defineProps({
  type: {
    validator: v => !v || oneOf(statusTypes, v)
  },
  closable: B,
  disableTransitions: B,
  hit: B,
  color: S,
  size: {
    validator: v => oneOf(['medium', 'small', 'mini'], v)
  },
  effect: {
    default: 'light',
    validator: v => oneOf(['dark', 'light', 'plain'], v)
  }
})

const emit = defineEmits(['close'])

const cls = 'x-tag'

const classes = computed(() => {
  return [
    cls,
    `${cls}_${props.type || 'primary'}`,
    props.size && `${cls}_${props.size}`,
    `is-${props.effect}`,
    {
      'is-hit': props.hit,
      'is-fade': !props.disableTransitions
    }
  ]
})
</script>
