import Vue from "vue";
import "es6-promise/auto";
import Vuex from "vuex";
import VueRouter from "vue-router";
import App from "./App";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";

import VueCompositionAPI from "@vue/composition-api";
import store from "./store";
import routes from "./routes/routes";
import Toast from "vue-toastification";
import VueLayers from 'vuelayers';
import VueSlider from 'vue-slider-component'

import './index.css'
import "vue-toastification/dist/index.css";
import VueApexCharts from "vue-apexcharts";
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import 'vuelayers/lib/style.css';
import 'vue-slider-component/theme/default.css'

// configure router
const router = new VueRouter({
  mode: "history",
  routes
});


import { MdSteppers, MdButton, MdField } from 'vue-material/dist/components';

Vue.use(MdSteppers);
Vue.use(MdButton);
Vue.use(MdField);

Vue.use(VueRouter);
Vue.use(VueApexCharts);
Vue.component("apexchart", VueApexCharts);
Vue.use(VueCompositionAPI);
Vue.use(Toast);
Vue.use(Vuex);

Vue.use(VueLayers);

Vue.component('VueSlider', VueSlider)

/* eslint-disable no-new */
new Vue({
  el: "#app",
  store,
  router,
  data: {},
  render: h => h(App)
});
