<template>
  <div class="x-collapse">
    <slot />
  </div>
</template>

<script setup>
import { provide, reactive, ref, watch } from 'vue'
import { COLLAPSE_INJECT_KEY } from '../../constants'
import { A, B, S } from '../../types'

const props = defineProps({
  modelValue: [S, A],
  accordion: B
})

const emit = defineEmits(['update:modelValue', 'change'])

function emitValue (v) {
  emit('update:modelValue', v)
  emit('change', v)
}

const model = ref(props.modelValue)

watch(() => props.modelValue, v => model.value = v)

provide(COLLAPSE_INJECT_KEY, {
  includes (v) {
    return props.accordion ? model.value === v : (model.value || []).includes(v)
  },
  updateModel (v) {
    const { value } = model
    if (props.accordion) {
      model.value = value === v ? null : v
      emitValue(model.value)
    } else {
      if (!value) model.value = []
      const index = model.value.indexOf(v)
      index > -1 ? model.value.splice(index, 1) : model.value.push(v)
      emitValue(model.value)
    }
  }
})
</script>
