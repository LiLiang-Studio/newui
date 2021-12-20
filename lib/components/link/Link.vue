<template>
  <component :is="tag" :class="classes" :href="disabled ? null : href" @click="onClick">
    <i v-if="icon" :class="icon" />
    <span>
      <slot />
    </span>
  </component>
</template>

<script setup>
import { computed, useAttrs } from 'vue'
import { BTrue, S, B, oneOf, statusTypes } from '../../types'

const props = defineProps({
  type: {
    type: S,
    default: 'default',
    validator: v => oneOf(['default', 'primary', ...statusTypes], v)
  },
  underline: BTrue,
  disabled: B,
  icon: S,
  href: S
})

const emit = defineEmits(['click'])

const classes = computed(() => {
  const cls = 'x-link'
  return [cls, `${cls}_${props.type}`, { 'is-underline': props.underline, 'is-disabled': props.disabled }]
})

const attrs = useAttrs()

const tag = computed(() => !props.disabled && attrs.to ? 'router-link' : 'a')

function onClick (e) {
  !props.disabled && emit('click', e)
}
</script>
