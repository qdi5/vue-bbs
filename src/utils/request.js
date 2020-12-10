import Axios from 'axios'

const request = Axios.create({
  baseURL: process.env.VUE_APP_BACKEND_URL,
  timeout: 1000
})

request.interceptors.response.use(function (res) {
  return res && res.data
})

export { request }

export default {
  install (Vue, options) {
    Vue.prototype.$ajax = request
  }
}
