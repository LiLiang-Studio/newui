import { createStylesheet } from '../../utils'

export const cls = 'x-col'

/** @type {number[]} */
const nulls = Array.apply(null, { length: 25 })

const getSpan = (i, val) => i ? `width:${val}` : 'display:none'

const genCol = () => nulls.map((_, i) => {
  const val = `${i / 24 * 100}%`
  return [
    `.${cls}_span-${i}{${getSpan(i, val)};}`,
    `.${cls}_pull-${i}{right:${val};}`,
    `.${cls}_push-${i}{left:${val};}`,
    `.${cls}_offset-${i}{margin-left:${val};}`
  ].join('')
}).join('')

const genGrid = size => nulls.map((_, i) => {
  const val = `${i / 24 * 100}%`
  return [
    `.${cls}_${size}-span-${i}{${getSpan(i, val)};}`,
    `.${cls}_${size}-pull-${i}{right:${val};}`,
    `.${cls}_${size}-push-${i}{left:${val};}`,
    `.${cls}_${size}-offset-${i}{margin-left:${val};}`
  ].join('')
}).join('')

const genGridAll = () => [
  ['xs'],
  ['sm', 768],
  ['md', 992],
  ['lg', 1200],
  ['xl', 1920]
].map(_ => _[1] ? `@media (min-width:${_[1]}px){${genGrid(_[0])}}` : genGrid(_[0])).join('')

const ruleStr = genCol() + genGridAll()

export const addStylesheet = () => {
  createStylesheet('XGridLayout', ruleStr)
}
