export const N = Number
export const S = String
export const B = Boolean
export const A = Array
export const F = Function
export const O = Object

export const NSB = [N, S, B]
export const N0 = { type: N, default: 0 }
export const BTrue = { type: B, default: true }
export const statusTypes = ['success', 'warning', 'danger', 'info']

export const sizes = ['medium', 'small', 'mini']

export const isStr = v => typeof v === 'string'

export const isNum = v => typeof v === 'number'

export const isArr = v => v instanceof Array

export const oneOf = (/** @type {any[]} */ arr, v) => arr.includes(v)

export const isEmpty = v => [undefined, null, ''].includes(v)
