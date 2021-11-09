import Vue from 'vue'
import 'es6-promise/auto'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css'

import VueCompositionAPI from '@vue/composition-api'
import store from './store'
import routes from './routes/routes'
import Toast from 'vue-toastification'
import VueLayers from 'vuelayers'
import VueSlider from 'vue-slider-component'

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import './index.css'
import 'vue-toastification/dist/index.css'
import VueApexCharts from 'vue-apexcharts'
import 'vuelayers/lib/style.css'
import 'vue-slider-component/theme/default.css'

// configure router
const router = new VueRouter({
  mode: 'history',
  routes
})
// import { MdSteppers, MdButton, MdField, MdDatepicker, MdMenu, MdList, MdDialog, MdContent } from 'vue-material/dist/components'
import VueMaterial from 'vue-material'
// Vue.component(Button.name, Button)
// Vue.use(MdSteppers)
// Vue.use(MdButton)
// Vue.use(MdField)
// Vue.use(MdDatepicker)
// Vue.use(MdMenu)
// Vue.use(MdList)
// Vue.use(MdDialog)
// Vue.use(MdContent)

// import VueUploadComponent from 'vue-upload-component'
// Vue.component('Fileupload', VueUploadComponent)

Vue.use(VueMaterial)

Vue.use(VueRouter)
Vue.use(VueApexCharts)
Vue.component('Apexchart', VueApexCharts)
Vue.use(VueCompositionAPI)
Vue.use(Toast)
Vue.use(Vuex)

Vue.use(VueLayers)

Vue.component('VueSlider', VueSlider)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  data: {},
  render: (h) => h(App)
})

import VueTour from 'vue-tour'

require('vue-tour/dist/vue-tour.css')

Vue.use(VueTour)

new Vue({
  render: h => h(App)
}).$mount('#app')
