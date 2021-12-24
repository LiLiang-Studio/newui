<template>
  <div :class="cls">
    <div :class="`${cls}_header`">
      <div :class="`${cls}_title`">
        <slot name="title">{{ title }}</slot>
      </div>
      <div :class="`${cls}_extra`">
        <slot name="extra">{{ extra }}</slot>
      </div>
    </div>
    <div :class="`${cls}_body`">
      <table :class="[`${cls}_table`, { 'has-border': border }]">
        <slot />
      </table>
    </div>
  </div>
</template>

<script setup>
import { provide, reactive } from 'vue'
import { B, BTrue, N, oneOf, S, sizes } from '../../types'

const props = defineProps({
  border: B,
  column: { type: N, default: 3 },
  direction: {
    default: 'horizontal',
    validator: v => oneOf(['horizontal', 'vertical'], v)
  },
  size: {
    validator: v => !v || oneOf(sizes, v)
  },
  title: S,
  extra: S,
  colon: BTrue,
  labelClassName: S,
  contentClassName: S,
  labelStyle: {},
  contentStyle: {}
})

provide('xDescriptions', reactive(props))

const cls = 'x-descriptions'
</script>
