import { createApp, h, ref, watch } from 'vue'
import { getMaxZIndex, genKey } from '../../utils'
import { isStr } from '../../types'
import XMessage from './Message.vue'
import XWrapper from './Wrapper.vue'

function convertOptions (options, type) {
  if (isStr(options)) {
    options = { message: options }
  }
  if (type) {
    options.type = type
  }
  return options
}

let vm
const items = ref([])
const wrapperClass = 'x-message-wrapper'

function addMessage (options, type) {
  options = convertOptions(options, type)
  items.value.push(options)
  if (vm) return
  vm = createApp({
    render () {
      return h(XWrapper, null, {
        default: () => items.value.map((_, i) => h(XMessage, {
          ..._,
          onClose: () => {
            items.value.splice(i, 1)
            _.onClose && _.onClose()
          }
        }))
      })
    }
  })
  const el = document.createElement('div')
  el.className = wrapperClass
  el.style.zIndex = getMaxZIndex()
  document.body.appendChild(el)
  vm.mount(el)
  watch(
    () => items.value.length,
    (newVal, oldVal) => {
      if (!newVal) {
        vm.unmount()
        el.remove()
        vm = null
      } else if (newVal > oldVal) {
        el.style.zIndex = getMaxZIndex()
      }
    }
  )
}

const createMessage = function (options) {
  return addMessage(options)
}

;['success', 'warning', 'info', 'error'].forEach(type => {
  createMessage[type] = function (options) {
    return addMessage(options, type)
  }
})

createMessage.closeAll = function () {
  if (vm) {
    items.value = []
  }
}

export default createMessage
