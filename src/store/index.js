import Vue from 'vue'
import Vuex from 'vuex'
import session from "./modules/session"
import writers from "./modules/writers"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    session,
    writers
  },
  state: {

  },
  mutations: {

  },
  actions: {
    
  }
})
