import Vue from 'vue'
import Vuex from 'vuex'
import pkg from 'package'
import * as actions from './actions'
import * as getters from './getters'

import app from './modules/app'
import menu from './modules/menu'
import login from './modules/login'
import services from './modules/services'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true, // process.env.NODE_ENV !== 'production',
  actions,
  getters,
  modules: {
    app,
    menu,
    login,
    services
  },
  state: {
    pkg
  },
  mutations: {}
})

export default store
