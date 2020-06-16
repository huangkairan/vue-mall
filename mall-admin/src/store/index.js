import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    admin: ''
  },
  mutations: {
    setAdmin(state,admin){
      state.admin = admin
    }
  },
  actions: {
  },
  modules: {
  },
  getters:{
    isLogin(state){
      if(!state.admin){
        return false
      }else {
        return state.admin 
      }
    }
  }
})
