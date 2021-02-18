import axios from 'axios'
import errorHandle from './errorHandle'
// 使用cancel-token取消请求；可以使用相同的cancel token来取消多个请求
const CancelToken = axios.CancelToken
class HttpRequest {
  constructor (baseUrl) {
    this.baseUrl = baseUrl
    // 存储每一个ajax请求url对应的cancel方法
    this.pending = {}
  }

  // 获取axios配置
  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      timeout: 10000
    }
    return config
  }

  removePending (key, isRequest = false) {
    // 如果请求
    if (this.pending[key] && isRequest) {
      this.pending[key]('取消重复请求')
    }
    delete this.pending[key]
  }

  // 设定拦截器
  interceptors (instance) {
    // 请求拦截器
    instance.interceptors.request.use(config => {
      /* 创建新的cancel token之前，先删除掉全局变量pending中同名的cancel token，
      确保取消的请求，是当前正在请求的重复请求 */
      const key = config.url + '&' + config.method
      this.removePending(key, true)
      // 通过传递一个可执行函数给CancelToken构造函数，来创建一个cancel token
      config.cancelToken = new CancelToken(c => {
        // 将取消函数存储在全局变量pending对象里面，key为当前请求的路径，value为对应请求的取消函数
        this.pending[key] = c
      })
      return config
    }, err => {
      errorHandle(err)
      return Promise.reject(err)
    })

    // 响应请求的拦截器
    instance.interceptors.response.use(res => {
      const key = res.config.url + '&' + res.config.method
      // 移除正常请求完成后全局变量pending的key值
      this.removePending(key)
      if (res.status === 200) {
        return Promise.resolve(res.data)
      } else {
        return Promise.reject(res)
      }
    }, err => {
      errorHandle(err)
      return Promise.reject(err)
    })
  }

  // 创建实例
  request (options) {
    const instance = axios.create()
    const newOptions = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance)
    return instance(newOptions)
  }

  // 封装快捷的get请求
  get (url, config) {
    console.log('get请求')
    const options = Object.assign({
      method: 'get',
      url
    }, config)
    return this.request(options)
  }

  // 封装快捷的post请求
  post (url, data) {
    return this.request({
      method: 'post',
      url,
      data
    })
  }
}

export default HttpRequest
