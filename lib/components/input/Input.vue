<template>
  <div :class="[cls, boxSize && `${cls}_${boxSize}`, { 'is-textarea': isTextarea }]">
    <div v-if="$slots.prepend" :class="`${cls}_prepend`">
      <slot name="prepend" />
    </div>
    <div :class="boxClasses">
      <div v-if="hasPrefix" :class="`${cls}_prefix`">
        <slot name="prefix">
          <i v-if="prefixIcon" :class="prefixIcon"></i>
        </slot>
      </div>
      <div :class="`${cls}_inner`">
        <textarea
          v-if="isTextarea"
          ref="input"
          :class="inputClasses"
          :value="modelValue"
          :disabled="isDisabled"
          v-bind="$attrs"
          @input="onInput"
          @focus="onFocus"
          @blur="onBlur"></textarea>
        <input
          v-else
          :class="inputClasses"
          :value="modelValue"
          :disabled="isDisabled"
          :type="inputType"
          v-bind="$attrs"
          @input="onInput"
          @focus="onFocus"
          @blur="onBlur">
      </div>
      <div v-if="hasSuffix" :class="`${cls}_suffix`">
        <i v-if="modelValue && clearable" :class="['x-icon-circle-close', `${cls}_clear`]" @click="onClear"></i>
        <i v-if="showPassword && (isFocus || modelValue)" class="x-icon-view" @click="onShowPwd"></i>
        <slot name="suffix">
          <i v-if="suffixIcon" :class="suffixIcon"></i>
        </slot>
        <span v-if="showWordLimit" :class="`${cls}_count`">{{ wordLimit }}</span>
      </div>
    </div>
    <div v-if="$slots.append" :class="`${cls}_append`">
      <slot name="append" />
    </div>
  </div>
</template>

<script setup>
import { computed, inject, onMounted, ref, useAttrs, useSlots } from 'vue'
import { B, N, O, oneOf, S, sizes } from '../../types'
import { setTextareaAutoHeight } from '../../utils'

const props = defineProps({
  modelValue: [S, N],
  showWordLimit: B,
  clearable: B,
  showPassword: B,
  disabled: B,
  size: {
    validator: v => !v || oneOf(sizes, v)
  },
  prefixIcon: S,
  suffixIcon: S,
  autosize: [B, O]
})

const emit = defineEmits(['clear', 'update:modelValue', 'focus', 'blur'])

const xForm = inject('xForm', {})

const cls = 'x-input'
const isFocus = ref(false)
const isPwdShow = ref(false)

const attrs = useAttrs()
const slots = useSlots()

const isTextarea = computed(() => attrs.type === 'textarea')

const inputType = computed(() => props.showPassword ? isPwdShow.value ? 'text' : 'password' : attrs.type)

const isDisabled = computed(() => props.disabled || xForm.disabled)

const boxSize = computed(() => props.size || xForm.size)

const wordLimit = computed(() => {
  const { maxlength } = attrs
  console.log(maxlength)
  const len = (props.modelValue || '').length
  return maxlength ? `${len}/${maxlength}` : len
})

const hasPrefix = computed(() => props.prefixIcon || slots.prefix)

const hasSuffix = computed(() => (props.modelValue && props.clearable) || props.showPassword || props.showWordLimit || props.suffixIcon || slots.suffix)

const boxClasses = computed(() => {
  return [`${cls}_box`, { 'is-focus': isFocus.value, 'is-disabled': isDisabled.value, 'has-append': slots.append }]
})

const inputClasses = computed(() => {
  return [`${cls}_input`, { 'has-prefix': hasPrefix.value, 'has-suffix': hasSuffix.value, 'is-textarea': isTextarea.value }]
})

const input = ref(null)
onMounted(() => {
  isTextarea.value && setTextareaAutoHeight(input.value, props.autosize)
})

function onInput (/** @type {InputEvent} */ e) {
  emit('update:modelValue', e.target.value)
  isTextarea.value && setTextareaAutoHeight(e.target, props.autosize)
}

function onFocus (e) {
  isFocus.value = true
  emit('focus', e)
}

function onBlur (e) {
  isFocus.value = false
  emit('blur', e)
}

function onClear () {
  emit('update:modelValue', '')
  emit('clear')
}

function onShowPwd () {
  isPwdShow.value = !isPwdShow.value
}
</script>
