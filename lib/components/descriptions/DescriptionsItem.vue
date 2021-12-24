<template>
  <td>
    <slot name="label">{{ label }}</slot>
  </td>
  <td>
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
</script>
