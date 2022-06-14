import { createStore } from 'vuex'
// import axios from "axios";
import point from './modules/point'
import rothc from './modules/rothc'
import gcbm from './modules/gcbm'
import vuelayers from './modules/vuelayers'

export const store = createStore({
  modules: {
    point,
    rothc,
    gcbm,
    vuelayers
  },
  state: {},
  mutations: {},
  actions: {},
  getters: {}
})
