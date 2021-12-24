<template>
  <th :class="`${cls}_label`">
    <slot name="label">{{ label }}</slot>
    <template v-if="xDescriptions.colon">:</template>
  </th>
  <td :class="`${cls}_content`">
    <slot></slot>
  </td>
</template>

<script setup>
import { inject } from 'vue'
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
</script>
