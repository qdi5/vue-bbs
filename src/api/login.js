import request from 'utils/request.js'

// 获取验证码
export function getCode (sid) {
  return request.get('/getCaptcha', {
    params: {
      sid
    }
  })
}

// 忘记密码
export function forget (options) {
  return request.post('/forget', {
    ...options
  })
}
