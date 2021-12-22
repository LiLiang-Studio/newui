<template>
  <div :class="cls">
    <div :class="`${cls}_image`" :style="{ width: imageSize + 'px' }">
      <slot name="image">
        <img v-if="image" :src="image">
        <img v-else src="../../assets/empty.svg">
      </slot>
    </div>
    <div :class="`${cls}_description`">
      <slot name="description">{{ description }}</slot>
    </div>
    <div v-if="$slots.default" :class="`${cls}_bottom`">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { N, S } from '../../types'

defineProps({
  image: S,
  imageSize: N,
  description: {
    type: S,
    default: '暂无数据'
  }
})

const cls = 'x-empty'
</script>
