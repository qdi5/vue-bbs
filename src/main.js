import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import request from 'utils/request.js'
import VeeValidate, { Validator } from 'vee-validate'
import './local/index'
// import zh from 'vee-validate/dist/locale/zh_CN'

Vue.config.productionTip = false
Vue.use(request)
Vue.use(VeeValidate)
// Validator.localize('zh-CN', zh)
const validator = new Validator()
validator.localize('zh-CN')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
