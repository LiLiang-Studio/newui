import * as comps from './comps'
import Message from './components/message'

export * from './comps'
export { Message }

/** @param {import('vue').App<Element>} app */
export default (app, options = {}) => {
  const prefix = options.prefix || 'X'

  app.config.globalProperties.$message = Message

  Object.keys(comps).forEach(name => {
    app.component(prefix + name, comps[name])
  })
}
