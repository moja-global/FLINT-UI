import Vue from 'vue'
import Vuex from 'vuex'
// import axios from "axios";
import point from './modules/point'
import rothc from './modules/rothc'
import vuelayers from './modules/vuelayers'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    point,
    rothc,
    vuelayers
  },
  state: {},
  mutations: {},
  actions: {},
  getters: {}
})
