<template>
  <span :class="classes" :style="styles">
    <img v-if="isImgExist && src" :src="src" :style="{ objectFit: fit }" v-bind="$attrs" @error="onImgError">
    <i v-else-if="icon" :class="icon"></i>
    <slot v-else />
  </span>
</template>

<script setup>
import { computed, ref } from 'vue'
import { isNum, isStr, N, oneOf, S } from '../../types'

const props = defineProps({
  icon: S,
  size: [N, S],
  shape: {
    default: 'circle',
    validator: v => oneOf(['circle', 'square'], v)
  },
  src: S,
  fit: {
    default: 'cover',
    validator: v => oneOf(['fill', 'contain', 'cover', 'none', 'scale-down'], v)
  }
})

const emit = defineEmits(['error'])

const classes = computed(() => {
  const cls = 'x-avatar'
  return [
    cls,
    `${cls}_${props.shape}`,
    props.size && isStr(props.size) && `${cls}_${props.size}`
  ]
})

const styles = computed(() => {
  const w = `${props.size}px`
  return isNum(props.size) && { width: w, height: w }
})

const isImgExist = ref(true)

const onImgError = e => {
  isImgExist.value = false
  emit('error', e)
}
</script>
