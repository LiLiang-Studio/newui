/**
 * @typedef Control
 * @property {string} size
 * @property {boolean} disabled
 * 
 * @typedef BaseProps
 * @property {any} label
 * 
 * @typedef {Control & BaseProps} Props
 * 
 * @typedef {Control} XForm
 * 
 * @typedef BaseXRadioGroup
 * @property {string} fill
 * @property {string} textColor
 * @property {any} modelValue
 * 
 * @typedef {Control & BaseXRadioGroup} XRadioGroup
 * 
 * @typedef GroupUtil
 * @property {(v) => any} updateModel
 * @property {(v) => boolean} getItemCheckedState
 */

import { inject, computed } from 'vue'

 /** @param {Props} props */
export default props => {
  /** @type {XForm} */
  const xForm = inject('xForm', {})
  /** @type {XRadioGroup} */
  const xRadioGroup = inject('xRadioGroup', '')
  /** @type {GroupUtil} */
  const groupUtils = inject('xRadioGroupUtil', '')

  const isDisabled = computed(() => props.disabled || xRadioGroup.disabled || xForm.disabled)

  const boxSize = computed(() => props.size || xRadioGroup.size || xForm.size)

  return { xForm, xRadioGroup, groupUtils, isDisabled, boxSize }
}
