<template>
  <div :class="cls">
    <div :class="`${cls}_left`" @click="emit('back')">
      <i class="x-icon-back"></i>
      <div>
        <slot name="title">{{ title }}</slot>
      </div>
    </div>
    <div :class="`${cls}_divider`"></div>
    <div :class="`${cls}_content`">
      <slot name="content">{{ content }}</slot>
    </div>
  </div>
</template>

<script setup>
import { S } from '../../types'

defineProps({
  title: { type: S, default: '返回' },
  content: S
})

const emit = defineEmits(['back'])

const cls = 'x-page-header'
</script>
