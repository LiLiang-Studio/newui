import * as comps from './comps'
import Message from './components/message'
import Notification from './components/notification'

export * from './comps'
export { Message, Notification }

/** @param {import('vue').App<Element>} app */
export default (app, options = {}) => {
  const prefix = options.prefix || 'X'

  app.config.globalProperties.$message = Message
  app.config.globalProperties.$notify = Notification

  Object.keys(comps).forEach(name => {
    app.component(prefix + name, comps[name])
  })
}
