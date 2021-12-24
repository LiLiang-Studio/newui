<template>
  <div v-if="visible" :class="[cls, customClass]">
    <div :class="[`${cls}_inner`, type && `${cls}_${type}`]">
      <i v-if="icon" :class="[icon, `${cls}_icon`, type && `is-${type}`]"></i>
      <div :class="`${cls}_body`">
        <h4 v-if="title" :class="`${cls}_title`">{{ title }}</h4>
        <div :class="`${cls}_content`">
          <slot />
        </div>
      </div>
      <i v-if="showClose" :class="['x-icon-close', `${cls}_close`]" @click="onClose"></i>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { BTrue, N, oneOf, S } from '../../types'

const props = defineProps({
  title: S,
  type: {
    validator: v => oneOf(['success', 'warning', 'info', 'error'], v)
  },
  iconClass: S,
  customClass: S,
  duration: {
    type: N,
    default: 4500
  },
  showClose: BTrue
})

const emit = defineEmits(['close'])

const cls = 'x-notification'

const icon = computed(() => props.iconClass || (props.type && `x-icon-${type}`))

function onClose () {
  emit('close')
}

const visible = ref(false)

onMounted(() => {
  visible.value = true
  props.duration && setTimeout(onClose, props.duration)
})
</script>
