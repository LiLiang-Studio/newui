export const createStylesheet = (id, styleSheetStr) => {
  let el = document.getElementById(id)
  if (!el) {
    el = document.createElement('style')
    el.id = id
    el.innerHTML = styleSheetStr
    document.head.appendChild(el)
  }
}
