import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'

import point from './modules/point'
import rothc from './modules/rothc'
import gcbm from './modules/gcbm'
import vuelayers from './modules/vuelayers'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

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
  getters: {},
  plugins: [vuexLocal.plugin]
})
