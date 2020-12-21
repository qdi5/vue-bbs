import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: {
      token: ''
    }
  },
  mutations: {
    setToken (state, token) {
      state.login.token = token
    }
  },
  actions: {
  },
  getters: {
    getToken (state) {
      return state.login.token
    }
  },
  modules: {
  }
})
