<template>
  <div :class="cls">
    <div :class="`${cls}_icon`">
      <slot name="icon">
        <i :class="[`icon-${icon}`, `x-icon-${icon}`]"></i>
      </slot>
    </div>
    <div :class="`${cls}_title`">
      <slot name="title">{{ title }}</slot>
    </div>
    <div v-if="$slots.subTitle || subTitle" :class="`${cls}_subtitle`">
      <slot name="subTitle">{{ subTitle }}</slot>
    </div>
    <div v-if="$slots.extra" :class="`${cls}_extra`">
      <slot name="extra"></slot>
    </div>
  </div>
</template>

<script setup>
import { oneOf, S } from '../../types'

defineProps({
  title: S,
  subTitle: S,
  icon: {
    default: 'info',
    validator: v => oneOf(['success', 'warning', 'info', 'error'], v)
  }
})

const cls = 'x-result'
</script>
