import AlertComponent from './Alert.vue'

const Alert = {}

Alert.install = (Vue) => {
  const AlertConstructor = Vue.extend(AlertComponent)
  const instance = new AlertConstructor()
  instance.$mount(document.createElement('div'))
  document.body.appendChild(instance.$el)

  Vue.prototype.$alert = (msg) => {
    instance.type = 'alert'
    instance.msg = msg
    instance.isShow = true
    instance.isShowAlert = true
  }

  Vue.prototype.$confirm = ({ cancelEvent, okEvent }) => {
    instance.type = 'confirm'
    instance.isShowAlert = true
    instance.cancelEvent = cancelEvent
    instance.okEvent = okEvent
  }
}

export default Alert
