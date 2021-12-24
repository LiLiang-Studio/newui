<script>
import { h, provide, reactive } from 'vue'
import { B, BTrue, N, oneOf, S, sizes } from '../../types'
const cls = 'x-descriptions'
export default {
  props: {
    border: B,
    column: { type: N, default: 3 },
    direction: {
      default: 'horizontal',
      validator: v => oneOf(['horizontal', 'vertical'], v)
    },
    size: {
      validator: v => !v || oneOf(sizes, v)
    },
    title: S,
    extra: S,
    colon: BTrue,
    labelClassName: S,
    contentClassName: S,
    labelStyle: {},
    contentStyle: {}
  },
  setup (props) {
    provide('xDescriptions', reactive(props))
  },
  methods: {
    renderTable (/** @type {import('vue').VNode[]} */ items) {
      const len = items.length
      const rows = Math.ceil(len / this.column)
      return new Array(rows).fill(0).map((_, i) => {
        const start = this.column * i
        const end = start + this.column
        if (end > len) {
          const lastItem = items[len - 1]
          items.pop()
          items.push({ ...lastItem, props: { ...(lastItem.props || {}), span: (end - len) * 2 + 1 } })
        }
        return h('tr', {}, items.slice(start, end))
      })
    }
  },
  render () {
    const title = this.$slots.title ? this.$slots.title() : this.title
    const extra = this.$slots.extra ? this.$slots.extra() : this.extra
    return h('div', { class: cls }, [
      h('div', { class: `${cls}_header` }, [
        h('div', { class: `${cls}_title` }, title),
        h('div', { class: `${cls}_extra` }, extra)
      ]),
      h('div', { class: `${cls}_body` }, [
        h('table', {
          class: [`${cls}_table`, this.size && `is-${this.size}`, { 'has-border': this.border }]
        }, this.renderTable(this.$slots.default ? this.$slots.default() : []))
      ])
    ])
  }
}
</script>
