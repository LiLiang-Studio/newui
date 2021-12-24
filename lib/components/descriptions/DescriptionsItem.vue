<template>
  <th :class="labelClasses" :style="labelStyle">
    <slot name="label">{{ label }}</slot>
    <template v-if="xDescriptions.colon">:</template>
  </th>
  <td :class="contentClasses" :style="contentStyles" :colspan="span">
    <slot></slot>
  </td>
</template>

<script setup>
import { computed, inject } from 'vue'
import { N, S } from '../../types'

const props = defineProps({
  label: S,
  span: { type: N, default: 1 },
  labelClassName: S,
  contentClassName: S,
  labelStyle: {},
  contentStyle: {}
})

const xDescriptions = inject('xDescriptions', {})

const cls = 'x-descriptions'
const labelClasses = computed(() => [`${cls}_label`, xDescriptions.labelClassName, props.labelClassName])
const labelStyles = computed(() => ({ ...(xDescriptions.labelStyle || {}), ...(props.labelStyle || {}) }))
const contentClasses = computed(() => [`${cls}_content`, xDescriptions.contentClassName, props.contentClassName])
const contentStyles = computed(() => ({ ...(xDescriptions.contentStyle || {}), ...(props.contentStyle || {}) }))
</script>
