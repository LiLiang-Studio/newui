<template>
  <div v-if="visible" :class="[cls, customClass]">
    <div :class="innerClasses">
      <i :class="[iconClass || `x-icon-${type}`, `${cls}_icon`]"></i>
      <slot />
      <i v-if="showClose" :class="['x-icon-close', `${cls}_close`]" @click="onClose"></i>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { B, N, oneOf, S } from '../../types'

const props = defineProps({
  type: {
    default: 'info',
    validator: v => oneOf(['success', 'warning', 'info', 'error'], v)
  },
  iconClass: S,
  dangerouslyUseHTMLString: B,
  customClass: S,
  duration: { type: N, default: 3000 },
  showClose: B,
  center: B
})

const emit = defineEmits(['close'])

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

function onClose () {
  emit('close')
}

const visible = ref(false)

onMounted(() => {
  visible.value = true
  props.duration && setTimeout(onClose, props.duration)
})
</script>
