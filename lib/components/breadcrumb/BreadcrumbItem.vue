<template>
  <span :class="cls">
    <component :is="tag" :class="`${cls}_inner`" v-bind="attrs">
      <slot />
    </component>
    <i :class="[`${cls}_separator`, sep.separatorClass]">
      {{ sep.separatorClass ? '' : sep.separator }}
    </i>
  </span>
</template>

<script setup>
import { computed, inject, useAttrs } from 'vue'
import { S } from '../../types'

const props = defineProps({
  to: {},
  href: S
})

const cls = 'x-breadcrumb-item'

const tag = computed(() => props.to ? 'router-link' : props.href ? 'a' : 'span')

const sep = inject('sep', {})

const _attrs = useAttrs()
const attrs = computed(() => ({ ..._attrs, to: props.to, href: props.href }))
</script>
