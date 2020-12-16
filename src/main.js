import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import request from 'utils/request.js'
import 'utils/veevalidate'

Vue.config.productionTip = false
Vue.use(request)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
