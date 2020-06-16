import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: ''
  },
  mutations: {
    setUser(state,admin){
      state.user = admin
    }
  },
  actions: {
  },
  modules: {
  },
  getters:{
    isLogin(state){
      if(!state.user){
        return false
      }else {
        return state.user 
      }
    }
  }
})
