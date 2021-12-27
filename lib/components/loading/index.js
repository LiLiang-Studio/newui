import { createApp, h } from 'vue'
import LoadingComponent from './Loading.vue'

class Loading {
  constructor (options) {
    // this.app = createApp({
    //   render () {
    //     return h(LoadingComponent, options)
    //   }
    // })
    // const div = document.createElement('div')
    // document.body.appendChild(div)
    // this.app.mount(div)
  }

  static service (options) {
    return new Loading(options)
  }

  close () {

  }
}

export default Loading

/** @type {import('vue').Directive} */
export const loadingDirective = {
  mounted (el) {
    new Loading({})
  }
}
