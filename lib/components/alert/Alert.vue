<template>
  <transition :name="prefix">
    <div v-if="visible" :class="classes">
      <i v-if="showIcon" :class="iconClasses"></i>
      <div :class="`${prefix}_inner`">
        <p v-if="tit" :class="[`${prefix}_title`, { 'is-bold': desc }]">
          <slot name="title">{{ title }}</slot>
        </p>
        <p v-if="desc" :class="`${prefix}_desc`">
          <slot>{{ description }}</slot>
        </p>
        <i v-if="closable" :class="closeBtnClasses" @click="onClose">{{ closeText }}</i>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { computed, ref, useSlots } from 'vue'
import { BTrue, oneOf, S, B } from '../../types'

const props = defineProps({
  title: S,
  type: {
    default: 'info',
    validator: v => oneOf(['success', 'warning', 'info', 'error'], v)
  },
  description: S,
  closable: BTrue,
  center: B,
  closeText: S,
  showIcon: B,
  effect: {
    default: 'light',
    validator: v => oneOf(['light', 'dark'], v)
  }
})

const emit = defineEmits(['close'])

const visible = ref(true)

const prefix = 'x-alert'

const slots = useSlots()

const tit = computed(() => slots.title || props.title)
const desc = computed(() => slots.default || props.description)

const classes = computed(() => {
  return [
    prefix,
    `${prefix}_${props.type}`,
    { 'is-center': props.center, 'is-dark': props.effect === 'dark' }
  ]
})

const iconClasses = computed(() => {
  return [`${prefix}_icon`, `x-icon-${props.type}`, { 'is-big': tit.value && desc.value }]
})

const closeBtnClasses = computed(() => {
  return [`${prefix}_close`, { 'x-icon-close': !props.closeText, 'is-custom': props.closeText }]
})

const onClose = () => {
  visible.value = false
  emit('close')
}
</script>
