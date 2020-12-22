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

  Vue.prototype.$confirm = ({ msg, cancelEvent = function () { }, okEvent = function () {} }) => {
    instance.type = 'confirm'
    instance.msg = msg
    instance.isShowAlert = true
    instance.cancel = cancelEvent
    instance.ok = okEvent
  }
}

export default Alert
