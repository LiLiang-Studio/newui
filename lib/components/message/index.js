import { createApp, h, ref, watch, TransitionGroup } from 'vue'
import { getMaxZIndex, genKey } from '../../utils'
import { isStr } from '../../types'
import XMessage from './Message.vue'

function convertOptions (options, type) {
  if (isStr(options)) {
    options = { message: options }
  }
  if (type) {
    options.type = type
  }
  options.key = genKey()
  return options
}

export default (() => {
  let vm
  const items = ref([])
  const messageCreator = function (options, type) {
    options = convertOptions(options, type)
    items.value.push(options)
    if (!vm) {
      vm = createApp({
        render () {
          return h(TransitionGroup, { tag: 'div', name: 'x-message' }, {
            default: () => items.value.map((_, i) => h(XMessage, {
              ..._,
              onClose: () => {
                items.value.splice(i, 1)
                _.onClose && _.onClose()
              }
            }, {
              default: () => isStr(_.message) && _.dangerouslyUseHTMLString
                ? h('div', { innerHTML: _.message })
                : _.message
            }))
          })
        }
      })
      const el = document.createElement('div')
      el.className = 'x-message-wrapper'
      el.style.zIndex = getMaxZIndex()
      document.body.appendChild(el)
      vm.mount(el)
      watch(
        () => items.value.length,
        (n, o) => {
          if (n > o) el.style.zIndex = getMaxZIndex()
        }
      )
    }
    return {
      close () {
        const index = items.value.indexOf(options)
        index > -1 && items.value.splice(index, 1)
      }
    }
  }
  ;['success', 'warning', 'info', 'error'].forEach(type => {
    messageCreator[type] = function (options) {
      return messageCreator(options, type)
    }
  })
  messageCreator.closeAll = function () {
    items.value = []
  }
  return messageCreator
})()
