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
