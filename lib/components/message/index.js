import XMessage from './Message.vue'

function addMessage (options, type) {

}

const createMessage = function (options) {
  return addMessage(options)
}

;['success', 'warning', 'info', 'error'].forEach(type => {
  createMessage[type] = function (options) {
    return addMessage(options, type)
  }
})

createMessage.closeAll = function () {

}

export default createMessage
