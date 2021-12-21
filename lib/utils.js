export function createStylesheet (id, styleSheetStr) {
  let el = document.getElementById(id)
  if (!el) {
    el = document.createElement('style')
    el.id = id
    el.innerHTML = styleSheetStr
    document.head.appendChild(el)
  }
}

/**
 * @param {Function} fn
 */
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
