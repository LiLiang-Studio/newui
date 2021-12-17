import * as comps from './comps'
export * from './comps'

/** @param {import('vue').App<Element>} app */
export default (app, options = {}) => {
  const prefix = options.prefix || 'X'
  Object.keys(comps).forEach(name => {
    app.component(prefix + name, comps[name])
  })
}
