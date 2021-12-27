export function createStylesheet (id, styleSheetStr) {
  let el = document.getElementById(id)
  if (!el) {
    el = document.createElement('style')
    el.id = id
    el.innerHTML = styleSheetStr
    document.head.appendChild(el)
  }
}

/** @param {Function} fn */
export function throttle (fn, gapTime = 16) {
  let tid
  let lastTime
  return function () {
    clearTimeout(tid)
    const nowTime = Date.now()
    const interval = nowTime - lastTime
    const cb = () => {
      fn.apply(this, arguments)
    }
    if (!lastTime || interval > gapTime) {
      lastTime = nowTime
      cb()
    } else {
      tid = setTimeout(cb, interval)
    }
  }
}

export function getMaxZIndex () {
  let maxZIndex = 1000
  const els = document.querySelectorAll('body>*')
  for (let i = 0, len = els.length; i < len; i++) {
    const { zIndex } = window.getComputedStyle(els[i], null)
    if (!isNaN(zIndex) && zIndex && zIndex > maxZIndex) {
      maxZIndex = +zIndex
    }
  }
  return maxZIndex + 2
}

export const genKey = ((k = 1) => () => k++)()

/**
 * @param {HTMLTextAreaElement} el
 * @param {{minRows: number, maxRows: number}|boolean} autosize
 */
export function setTextareaAutoHeight (el, autosize) {
  if (!autosize) return
  const { minRows, maxRows } = autosize
  const style = window.getComputedStyle(el, null)
  const borderWidth = parseInt(style.borderTopWidth) + parseInt(style.borderBottomWidth)
  const padding = parseInt(style.paddingTop) + parseInt(style.paddingBottom)
  const lineHeight = parseInt(style.lineHeight)
  const matches = el.value.match(/\n/gm)
  const lbCount = matches ? matches.length : 0
  el.style.height = 'auto'
  if (minRows && lbCount <= minRows - 1) {
    el.style.height = `${borderWidth + padding + lineHeight * minRows}px`
  } else if (maxRows && lbCount >= maxRows) {
    el.style.height = `${borderWidth + padding + lineHeight * maxRows}px`
  } else {
    el.style.height = `${borderWidth + padding + lineHeight * (lbCount + 1)}px`
  }
}

export const winScrollbarLock = {
  locked: false,
  getScrollbarWidth() {
    const p = document.createElement('p')
    const styles = { width: '100px', height: '100px', overflowY: 'scroll' }
    for (let key in styles) p.style[key] = styles[key]
    document.body.appendChild(p)
    const scrollbarWidth = p.offsetWidth - p.clientWidth
    p.remove()
    return scrollbarWidth
  },
  lock() {
    this.locked = true
    let winHeight = window.innerHeight
    let { scrollHeight } = document.body
    if (winHeight >= scrollHeight) return
    document.body.style.paddingRight = `${this.getScrollbarWidth()}px`
    document.body.style.overflow = 'hidden'
  },
  unlock() {
    this.locked = false
    document.body.style.paddingRight = document.body.style.overflow = ''
  }
}
