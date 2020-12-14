import { Validator } from 'vee-validate'

const dictionary = {
  'zh-CN': {
    messages: {
      required: field => '请输入' + field,
      email: () => '请输入正确的邮箱格式',
      min: () => '不符合最小长度要求',
      length: (field, args) => field + '长度要求' + args,
      max: () => '不符合最大长度要求'
    },
    attributes: {
      email: '用户名',
      pass: '密码',
      vercode: '验证码',
      username: '昵称'
    }
  }
}

Validator.localize(dictionary)
