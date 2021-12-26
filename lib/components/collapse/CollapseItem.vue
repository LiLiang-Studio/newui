<template>
  <div :class="[cls, { 'is-active': isActive }]">
    <div :class="`${cls}_header`" @click="onToggle">
      <div :class="`${cls}_title`">
        <slot name="title">{{ title }}</slot>
      </div>
      <i :class="['x-icon-arrow-right', `${cls}_arrow`, { 'is-active': isActive }]"></i>
    </div>
    <x-collapse-transition :visible="isActive">
      <div :class="`${cls}_content`">
        <slot />
      </div>
    </x-collapse-transition>
  </div>
</template>

<script setup>
import { computed, inject } from 'vue'
import { COLLAPSE_INJECT_KEY } from '../../constants'
import { B, N, S } from '../../types'
import { genKey } from '../../utils'
import XCollapseTransition from './CollapseTransition.vue'

const props = defineProps({
  name: [S, N],
  title: S,
  disabled: B
})

const collapse = inject(COLLAPSE_INJECT_KEY, '')

const cls = 'x-collapse-item'

const idKey = computed(() => props.name || genKey())

const isActive = computed(() => collapse.includes(idKey.value))

function onToggle () {
  collapse.updateModel(idKey.value)
}
</script>
