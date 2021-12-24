import { createApp, h, reactive, TransitionGroup, watch } from 'vue'
import { isStr } from '../../types'
import { getMaxZIndex } from '../../utils'
import { convertOptions } from '../message'
import XNotification from './Notification.vue'

export default (() => {
  let vm
  const items = reactive({
    'top-left': [],
    'top-right': [],
    'bottom-left': [],
    'bottom-right': []
  })

  const messageCreator = function (options, type) {
    options = convertOptions(options, type)
    const position = options.position || 'top-right'
    const tarItems = items[position]
    if (tarItems) {
      position.includes('top') ? tarItems.push(options) : tarItems.unshift(options)
      if (!vm) {
        const wrapprCls = 'x-notification-wrapper'
        vm = createApp({
          render () {
            return h('div', {}, Object.keys(items).map(k => {
              const cls = `${wrapprCls}_${k}`
              const curItems = items[k]
              return h('div', { class: ['position-box', cls] }, h(TransitionGroup, { tag: 'div', name: cls }, {
                  default: () => curItems.map((_, i) => {
                    return h(XNotification, {
                      ..._,
                      onClose: () => {
                        curItems.splice(i, 1)
                        _.onClose && _.onClose()
                      }
                    }, {
                      default: () => isStr(_.message) && _.dangerouslyUseHTMLString
                        ? h('div', { innerHTML: _.message })
                        : _.message
                    })
                  })
                })
              )
            }))
          }
        })
        const el = document.createElement('div')
        el.className = wrapprCls
        el.style.zIndex = getMaxZIndex()
        document.body.appendChild(el)
        vm.mount(el)
        watch(
          () => Object.keys(items).reduce((t, k) => t + items[k].length, 0),
          (n, o) => {
            if (n > o) el.style.zIndex = getMaxZIndex()
          }
        )
      }
      return {
        close () {
          const index = tarItems.indexOf(options)
          index > -1 && tarItems.splice(index, 1)
        }
      }
    }
  }
  ;['success', 'warning', 'info', 'error'].forEach(type => {
    messageCreator[type] = function (options) {
      return messageCreator(options, type)
    }
  })
  messageCreator.closeAll = function () {

  }
  return messageCreator
})()
