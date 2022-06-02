import { createApp, configureCompat } from 'vue'
// import 'es6-promise/auto'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css'

// import VueCompositionAPI from '@vue/composition-api'
import { store } from './store'
import routes from './routes/routes'
// import Toast from 'vue-toastification'
// import VueLayers from 'vuelayers'
// import VueSlider from 'vue-slider-component'

// import 'vue-toastification/dist/index.css'
// import VueApexCharts from 'vue-apexcharts'
// import 'vuelayers/lib/style.css'
// import 'vue-slider-component/theme/default.css'
// import VueTour from 'vue-tour'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

// require('vue-tour/dist/vue-tour.css')

// Vue.use(Antd)
// // configure router
const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

// Vue.use(VueRouter)
// Vue.use(VueApexCharts)
// Vue.component('Apexchart', VueApexCharts)
// Vue.use(VueCompositionAPI)

// Vue.use(VueLayers)

// Vue.component('VueSlider', VueSlider)

// Vue.use(VueTour)

const app = createApp(App)
// app.use(Toast)
app.use(Antd)
app.use(store)
app.use(router)

configureCompat({
  // default everything to Vue 2 behavior
  COMPONENT_ASYNC: false
})
// router.isReady().then(() => app.mount('#app'))

app.mount('#app')
// new Vue({
//   render: (h) => h(App)
// }).$mount('#app')
