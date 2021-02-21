import { extend, localize } from 'vee-validate'
import { required, email, min, max, length, confirmed } from 'vee-validate/dist/rules'
import zh from 'vee-validate/dist/locale/zh_CN.json'

// 引入验证规则
extend('email', email)
extend('min', min)
extend('max', max)
extend('required', required)
extend('length', length)
extend('confirmed', confirmed)
localize('zh_CN', {
  messages: {
    ...zh.messages,
    // 定义required规则的错误提示
    required: '请输入{_field_}'
  },
  names: {
    email: '邮箱',
    pass: '密码',
    name: '昵称',
    username: '昵称',
    vercode: '验证码',
    repassword: '确认密码'

  },
  fields: {
    // 定义字段名的各个验证规则的错误提示
    email: {
      email: '请输入正确的{_field_}',
      required: '请输入{_field_}!!!'
    }
  }
})
