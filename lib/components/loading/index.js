import { createApp, h, ref, Transition, watch } from 'vue'
import { isStr } from '../../types'
import { getMaxZIndex, winScrollbarLock } from '../../utils'
import LoadingComponent from './Loading.vue'

class Loading {
  constructor (options = {}) {
    let lockedFlag = false
    const visible = ref(false)
    this.visible = visible
    const { target, fullscreen } = this.getTarget(options)
    watch(
      () => visible.value,
      v => {
        if (fullscreen && options.lock) {
          if (v) {
            if (!winScrollbarLock.locked) {
              lockedFlag = true
              winScrollbarLock.lock()
            }
          } else {
            lockedFlag && winScrollbarLock.unlock()
          }
        }
      }
    )
    const app = createApp({
      mounted () {
        visible.value = true
      },
      render () {
        return h(Transition, {
          onAfterLeave () {
            app.unmount()
            app._container.remove()
          }
        }, {
          default: () => visible.value && h(LoadingComponent, { ...options })
        })
      }
    })
    const div = document.createElement('div')
    div.className = 'x-loading_mask'
    if (fullscreen) {
      div.classList.add('is-fullscreen')
      div.style.zIndex = getMaxZIndex()
    }
    target.appendChild(div)
    app.mount(div)
  }

  static service (options) {
    return new Loading(options)
  }

  getTarget ({ target, fullscreen }) {
    if (!target || fullscreen) {
      target = document.body
    } else if (isStr(target)) {
      target = document.querySelector(target)
    }
    fullscreen = target === document.body
    if (target !== document.body) {
      const { position } = window.getComputedStyle(target, null)
      if (!position || position === 'static') {
        target.style.position = 'relative'
      }
    }
    return { target, fullscreen }
  }

  close () {
    this.visible.value = false
  }
}

function getOptionsByElement (/** @type {HTMLElement} */ el) {
  return ['text', 'spinner', 'background', 'custom-class'].reduce((t, k) => {
    return { ...t, [k]: el.getAttribute(`element-loading-${k}`) }
  }, {})
}

function onUnmounted (el) {
  el.loadingInstance && el.loadingInstance.close()
  el.loadingInstance = null
}

function onUpdate (el, { modifiers, value }) {
  if (value === false) {
    onUnmounted(el)
  } else {
    if (!el.loadingInstance) {
      el.loadingInstance = new Loading({
        ...getOptionsByElement(el),
        lock: modifiers.lock,
        target: modifiers.fullscreen ? document.body : el
      })
    }
  }
}

export default Loading

/** @type {import('vue').Directive} */
export const loadingDirective = { mounted: onUpdate, updated: onUpdate, unmounted: onUnmounted }
