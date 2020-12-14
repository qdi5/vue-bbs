<template>
  <!-- <div class="login-wrap">
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
  </div> -->
  <div class="layui-container fly-marginTop">
  <div class="fly-panel fly-panel-user" pad20>
    <div class="layui-tab layui-tab-brief" lay-filter="user">
      <ul class="layui-tab-title">
        <li class="layui-this">登入</li>
        <li><router-link :to="{name: 'Reg'}" >注册</router-link></li>
      </ul>
      <div class="layui-form layui-tab-content" id="LAY_ucm" style="padding: 20px 0;">
        <div class="layui-tab-item layui-show">
          <div class="layui-form layui-form-pane">
            <form method="post">
              <div class="layui-form-item">
                <label for="L_email" class="layui-form-label">邮箱</label>
                <div class="layui-input-inline">
                  <input type="text" id="L_email" name="email" required lay-verify="required" autocomplete="off" class="layui-input" v-model.trim="email" v-validate="'required|email'">
                </div>
                <div class="layui-form-mid">
                  <div class="error">{{ errors.first('email') }}</div>
                </div>
              </div>
              <div class="layui-form-item">
                <label for="L_pass" class="layui-form-label">密码</label>
                <div class="layui-input-inline">
                  <input type="password" id="L_pass" name="pass" v-model.trim="pass" required lay-verify="required" autocomplete="off" class="layui-input" v-validate="'required|min:6'">
                </div>
                <div class="layui-form-mid">
                  <div class="error">{{ errors.first('pass') }}</div>
                </div>
              </div>
              <div class="layui-form-item">
                <label for="L_vercode" class="layui-form-label">人类验证</label>
                <div class="layui-input-inline">
                  <input type="text" id="L_vercode" name="vercode" required lay-verify="required" placeholder="请回答后面的问题" autocomplete="off" class="layui-input"  v-validate="'required|min:4'" v-model.trim="vercode">
                </div>
                <div class="layui-form-mid layui-word-aux no-padding">
                  <div class="code" v-html="svgCaptcha" @click="_getCode"></div>
                </div>
              </div>
              <div class="layui-form-item">
                <button class="layui-btn" lay-filter="*" lay-submit>立即登录</button>
                <span style="padding-left:20px;">
                  <router-link :to="{name: 'Forget'}">忘记密码？</router-link>
                </span>
              </div>
              <div class="layui-form-item fly-form-app">
                <span>或者使用社交账号登入</span>
                <a href="" onclick="layer.msg('正在通过QQ登入', {icon:16, shade: 0.1, time:0})" class="iconfont icon-qq" title="QQ登入"></a>
                <a href="" onclick="layer.msg('正在通过微博登入', {icon:16, shade: 0.1, time:0})" class="iconfont icon-weibo" title="微博登入"></a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { getCode } from 'api/login'
export default {
  name: 'Login',
  data () {
    return {
      svgCaptcha: '',
      email: '',
      pass: '',
      vercode: ''
    }
  },
  created () {
    this._getCode()
  },
  methods: {
    _getCode () {
      debugger
      getCode('/getCaptcha').then(svg => {
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
