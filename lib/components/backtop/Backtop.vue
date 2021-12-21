<template>
  <transition :name="cls">
    <div v-if="visible" :class="cls" :style="{ bottom: `${bottom}px`, right: `${right}px` }" @click="onClick">
      <slot>
        <i class="x-icon-caret-top"></i>
      </slot>
    </div>
  </transition>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { N, S } from '../../types'
import { throttle } from '../../utils'

const props = defineProps({
  target: S,
  visibilityHeight: { type: N, default: 200 },
  right: { type: N, default: 40 },
  bottom: { type: N, default: 40 }
})

const emit = defineEmits(['click'])

const cls = 'x-backtop'
const visible = ref(false)

function getScroller () {
  let container = document
  let el = document.documentElement
  const { target } = props
  if (target) {
    el = document.querySelector(target)
    if (!el) {
      throw new Error(`target is not existed: ${target}`)
    }
    container = el
  }
  return { container, el }
}

onMounted(() => {
  const { container, el } = getScroller()
  const onScroll = throttle(() => {
    visible.value = el.scrollTop >= props.visibilityHeight
  }, 200)
  onScroll()
  container.addEventListener('scroll', onScroll)
  onBeforeUnmount(() => {
    container.removeEventListener('scroll', onScroll)
  })
})

const onClick = (/** @type {MouseEvent} */ e) => {
  e.stopPropagation()
  const { el } = getScroller()
  const step = el.scrollTop / 20
  const rAF = window.requestAnimationFrame
  const fn = () => {
    if (el.scrollTop > 0) {
      el.scrollTop -= step
      rAF(fn)
    } else {
      el.scrollTop = 0
    }
  }
  rAF(fn)
  emit('click', e)
}
</script>
