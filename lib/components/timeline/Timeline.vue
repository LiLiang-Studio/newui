<script>
import { h } from 'vue'
import { B, isArr } from '../../types'
export default {
  props: {
    reverse: B
  },
  render () {
    const vnodes = this.$slots.default()
    this.reverse && vnodes.forEach(_ => {
      isArr(_.children) && _.children.reverse()
    })
    return h('ul', { class: 'x-timeline' }, vnodes)
  }
}
</script>
