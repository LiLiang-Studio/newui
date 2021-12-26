<template>
  <transition v-bind="listeners">
    <div v-show="visible" class="x-collapse-transition">
      <slot />
    </div>
  </transition>
</template>

<script setup>
import { B } from '../../types'

defineProps({ visible: B })

const listeners = {
  onEnter (/** @type {HTMLElement} */ el) {
    el.style.height = 'auto'
    const endWidth = window.getComputedStyle(el).height
    el.style.height = '0px'
    el.offsetHeight // 强制重绘
    el.style.height = endWidth
  },
  onAfterEnter (/** @type {HTMLElement} */ el) {
    el.style.height = null
  },
  onLeave (/** @type {HTMLElement} */ el) {
    el.style.height = window.getComputedStyle(el).height
    el.offsetHeight // 强制重绘
    el.style.height = '0px'
  },
  onAfterLeave (/** @type {HTMLElement} */ el) {
    el.style.height = null
  }
}
</script>
