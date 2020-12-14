import { request } from 'utils/request.js'

// 获取验证码
export function getCode () {
  return request.get('/getCaptcha')
}
