<template>
  <div :class="[cls, customClass]">
    <div :class="innerClasses">
      <i :class="[iconClass || `x-icon-${type}`, `${cls}_icon`]"></i>
      <template v-if="isStr(message)">
        <div v-if="dangerouslyUseHTMLString" v-html="message"></div>
        <div v-else>{{ message }}</div>
      </template>
      <i v-if="showClose" :class="['x-icon-close', `${cls}_close`]" @click="onClose"></i>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { B, F, N, oneOf, S, isStr } from '../../types'

const props = defineProps({
  message: {},
  type: {
    default: 'info',
    validator: v => oneOf(['success', 'warning', 'info', 'error'], v)
  },
  iconClass: S,
  dangerouslyUseHTMLString: B,
  customClass: S,
  duration: {
    type: N,
    default: 3000
  },
  showClose: B,
  center: B,
  onClose: {
    type: F,
    default() {}
  },
  offset: {
    type: N,
    default: 20
  }
})

const cls = 'x-message'

const innerClasses = computed(() => {
  return [
    `${cls}_inner`,
    props.type && `${cls}_${props.type}`,
    {
      'has-close': props.showClose,
      'is-center': props.center
    }
  ]
})
</script>
