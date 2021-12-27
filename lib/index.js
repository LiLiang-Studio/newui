import * as comps from './comps'
import Message from './components/message'
import Notification from './components/notification'
import Loading, { loadingDirective } from './components/loading'

export * from './comps'
export { Message, Notification }

/** @param {import('vue').App<Element>} app */
export default (app, options = {}) => {
  const prefix = options.prefix || 'X'

  app.config.globalProperties.$message = Message
  app.config.globalProperties.$notify = Notification
  app.config.globalProperties.$loading = function (options) {
    return new Loading(options)
  }

  app.directive('loading', loadingDirective)

  Object.keys(comps).forEach(name => {
    app.component(prefix + name, comps[name])
  })
}
