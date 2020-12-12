<template>
  <div class="login-wrap">
    <form class="layui-form layui-form-pane" action="" @submit.prevent="handleSubmit($event)">
      <div class="layui-form-item">
        <label class="layui-form-label">用户名</label>
        <div class="layui-input-inline">
          <input v-validate="'required|email'" v-model.trim="username" type="text" name="email"  lay-verify="required" placeholder="请输入用户名" autocomplete="off" class="layui-input">
        </div>
         <div class="layui-form-mid">
          <div class="error">{{ errors.first('email') }}</div>
        </div>
      </div>
      <div class="layui-form-item">
        <label class="layui-form-label">密码</label>
        <div class="layui-input-inline">
          <input type="password" v-validate="'required|min:6'" v-model.trim="password" name="password" lay-verify="required" placeholder="请输入密码" autocomplete="off" class="layui-input">
        </div>
        <div class="layui-form-mid">
          <div class="error">{{ errors.first('password') }}</div>
        </div>
      </div>
      <div class="layui-form-item">
        <label class="layui-form-label">验证码</label>
        <div class="layui-input-inline">
          <input type="text" name="code" v-validate="'required|min:4'" v-model.trim="code" lay-verify="required" placeholder="请输入验证码" autocomplete="off" class="layui-input">
        </div>
        <div class="layui-form-mid layui-word-aux no-padding">
          <div class="code" v-html="svgCaptcha" @click="getCode"></div>
        </div>
        <div class="layui-form-mid">
          <div class="error">{{ errors.first('code') }}</div>
        </div>
      </div>
      <div class="layui-form-item">
        <div class="layui-input-block">
          <button class="layui-btn login-btn" lay-submit>立即登录</button>
          <a href="javascript:void(0)">忘记密码？</a>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      svgCaptcha: '',
      username: '',
      password: '',
      code: ''
    }
  },
  created () {
    this.getCode()
  },
  methods: {
    getCode () {
      this.$ajax.get('/getCaptcha').then(svg => {
        this.svgCaptcha = svg.data
        this._code = svg.text
      })
    },
    handleSubmit ($event) {
      console.log('提交事件\r\n:')
      console.log($event)
      return false
    }
  }
}
</script>

<style lang="scss" scoped>
.code {
  width: 160px;
  height: 38px;
}
.login-btn {
  margin-right: 20px;
}
</style>
