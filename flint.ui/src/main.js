import Vue from "vue";
import "es6-promise/auto";
import Vuex from "vuex";

import VueRouter from "vue-router";
import App from "./App";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

import VueCompositionAPI from "@vue/composition-api";
import store from "./store";
const dataForge = require("data-forge");

import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
Vue.use(Vuetify);

// router setup
import routes from "./routes/routes";
// import VueCircleSlider from "vue-circle-slider";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import LineChart from "@/components/Chart.vue";

import VueApexCharts from "vue-apexcharts";
Vue.use(VueApexCharts);

Vue.component("apexchart", VueApexCharts);

import vuetify from "./plugins/vuetify";

// configure router
const router = new VueRouter({
  mode: "history",
  routes,
});

Vue.use(VueRouter);
Vue.use(VueCompositionAPI);
// Vue.use(VueCircleSlider);
Vue.use(Toast);
Vue.use(Vuex);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  store,
  router,
  render: (h) => h(App),
  vuetify,
  data: {},
});
