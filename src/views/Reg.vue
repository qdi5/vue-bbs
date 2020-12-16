<template>
  <div class="layui-container fly-marginTop">
  <div class="fly-panel fly-panel-user" pad20>
    <div class="layui-tab layui-tab-brief" lay-filter="user">
      <ul class="layui-tab-title">
        <li><router-link :to="{name: 'Login'}">登入</router-link></li>
        <li class="layui-this">注册</li>
      </ul>
      <validation-observer>
      <div class="layui-form layui-tab-content" id="LAY_ucm" style="padding: 20px 0;">
        <div class="layui-tab-item layui-show">
          <div class="layui-form layui-form-pane">
            <form method="post">
              <div class="layui-form-item">
                <label for="L_email" class="layui-form-label">邮箱</label>
                <validation-provider  name="email" rules="required|email" v-slot="{errors}">
                  <div class="layui-input-inline">
                    <input type="text" id="L_email" name="email" required lay-verify="email" autocomplete="off" class="layui-input" v-model.trim="email">
                  </div>
                  <div class="layui-form-mid layui-word-aux">将会成为您唯一的登入名</div>
                  <div class="layui-form-mid error">{{ errors[0] }}</div>
                </validation-provider>
              </div>
              <div class="layui-form-item">
                <label for="L_username" class="layui-form-label">昵称</label>
                <validation-provider  name="username" rules="required|min: 2|max: 10" v-slot="{errors}">
                  <div class="layui-input-inline">
                    <input type="text" id="L_username" name="username" required lay-verify="required" autocomplete="off" class="layui-input" v-model.trim="username">
                  </div>
                  <div class="layui-form-mid error">{{ errors[0] }}</div>
                </validation-provider>
              </div>
              <div class="layui-form-item">
                <label for="L_pass" class="layui-form-label">密码</label>
                <validation-provider  name="pass" rules="required|min:6|max:12|confirmed:confirmation" v-slot="{errors}">
                  <div class="layui-input-inline">
                    <input type="password" id="L_pass" name="pass" required lay-verify="required" autocomplete="off" class="layui-input" v-model.trim="pass">
                  </div>
                  <div class="layui-form-mid layui-word-aux">6到12个字符</div>
                  <div class="layui-form-mid error">{{ errors[0] }}</div>
                </validation-provider>
              </div>
              <div class="layui-form-item">
                <label for="L_repass" class="layui-form-label">确认密码</label>
                <validation-provider vid="confirmation" v-slot="{errors}">
                  <div class="layui-input-inline">
                    <input type="password" id="L_repass" name="repassword" required lay-verify="required" autocomplete="off" class="layui-input" v-model.trim="repassword">
                  </div>
                  <div class="layui-form-mid error">{{ errors[0] }}</div>
                </validation-provider>
              </div>
              <div class="layui-form-item">
                <label for="L_vercode" class="layui-form-label">人类验证</label>
                <validation-provider  name="vercode" rules="required|length:4" v-slot="{errors}">
                  <div class="layui-input-inline">
                    <input type="text" id="L_vercode" name="vercode" required lay-verify="required" placeholder="请回答后面的问题" autocomplete="off" class="layui-input" v-model.trim="vercode">
                  </div>
                  <div class="layui-form-mid no-padding">
                    <span style="color: #c00;" v-html="svgCaptcha" @click="_getCode"></span>
                  </div>
                  <div class="layui-form-mid error">{{ errors[0] }}</div>
                </validation-provider>
              </div>
              <div class="layui-form-item">
                <button class="layui-btn" lay-filter="*" lay-submit>立即注册</button>
              </div>
              <div class="layui-form-item fly-form-app">
                <span>或者直接使用社交账号快捷注册</span>
                <a href="" onclick="layer.msg('正在通过QQ登入', {icon:16, shade: 0.1, time:0})" class="iconfont icon-qq" title="QQ登入"></a>
                <a href="" onclick="layer.msg('正在通过微博登入', {icon:16, shade: 0.1, time:0})" class="iconfont icon-weibo" title="微博登入"></a>
              </div>
            </form>
          </div>
        </div>
      </div>
      </validation-observer>
    </div>
  </div>
</div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { getCode } from 'api/login'
export default {
  name: 'Reg',
  data () {
    return {
      email: '',
      username: '',
      pass: '',
      repassword: '',
      vercode: '',
      svgCaptcha: ''
    }
  },
  created () {
    this._getCode()
  },
  methods: {
    _getCode () {
      getCode('/getCaptcha').then(svg => {
        this.svgCaptcha = svg.data
        this._code = svg.text
      })
    }
  },
  components: {
    ValidationProvider,
    ValidationObserver
  }
}
</script>

<style>

</style>
