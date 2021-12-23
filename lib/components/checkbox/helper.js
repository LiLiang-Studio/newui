/**
 * @typedef Control
 * @property {string} size
 * @property {boolean} disabled
 * 
 * @typedef BaseProps
 * @property {any} label
 * @property {any} trueLabel
 * @property {any} falseLabel
 * 
 * @typedef {Control & BaseProps} Props
 * 
 * @typedef {Control} XForm
 * 
 * @typedef BaseXCheckboxGroup
 * @property {string} fill
 * @property {string} textColor
 * @property {(v) => any} updateModel
 * @property {(v) => boolean} getItemCheckedState
 * @property {(v) => boolean} getItemDisabledState
 * 
 * @typedef {Control & BaseXCheckboxGroup} XCheckboxGroup
 */

 import { inject, computed } from 'vue'

 /** @param {Props} props */
 export default props => {
   /** @type {XForm} */
   const xForm = inject('xForm', {})
   /** @type {XCheckboxGroup} */
   const xCheckboxGroup = inject('xCheckboxGroup', '')
 
   const isDisabled = computed(() => {
     return props.disabled ||
       xCheckboxGroup.disabled ||
       xForm.disabled ||
       (xCheckboxGroup && xCheckboxGroup.getItemDisabledState(props.label))
   })
 
   const boxSize = computed(() => props.size || xCheckboxGroup.size || xForm.size)
 
   return { xForm, xCheckboxGroup, isDisabled, boxSize }
 }
 