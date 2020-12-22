<template>
  <div class="alert-wrap" v-show="isShowAlert">
    <div class="alert">
      <div class="flex content">{{ msg }}</div>
      <div v-if="type === 'alert'" class="layui-btn layui-btn-normal" @click="close()">确定</div>
      <div  v-if="type === 'confirm'" class="confirm">
        <div class="layui-btn layui-btn-primary" @click="cancelEvent">取消</div>
        <div class="layui-btn layui-btn-normal" @click="okEvent">确定</div>
      </div>
    </div>
    <div class="mask" @click="closeMask"></div>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: '这是alert的消息'
    },
    isShow: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'alert'
    },
    cancel: {
      type: Function,
      default: () => console.log('cancel')
    },
    ok: {
      type: Function,
      default: () => console.log('ok')
    }
  },
  data () {
    return {
      isShowAlert: this.isShow
    }
  },
  methods: {
    close () {
      this.isShowAlert = false
    },
    cancelEvent () {
      this.cancel()
      this.close()
    },
    okEvent () {
      this.ok()
      this.close()
    },
    closeMask () {
      if (this.type === 'alert') {
        this.close()
      }
    }
  },
  watch: {
    isShow (newVal, oldVal) {
      console.log(`isShow变化啦：\r\n${newVal}`)
      this.isShowAlert = newVal
    }
  }
}
</script>

<style lang="scss" scoped>
  .alert-wrap {
     & > .mask {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.4);
      z-index: 2000;
      overflow: hidden;
    }

    & > .alert {
      width: 300px;
      height: 150px;
      position: fixed;
      background: #fff;
      border-radius: 6px;
      left: 50%;
      top: 50%;
      margin-left: -150px;
      margin-top: -75px;
      padding: 20px 10px;
      z-index: 3000;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      box-shadow: 0 5px 8px rgba(0, 0, 0, 0.05);
      & > .content {
        display: flex;
        align-items: center;
      }
    }
    .confirm {
      width: 100%;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-around;
    }
  }
  .flex {
    flex: 1;
  }
</style>
