import Vue from "vue";
import "es6-promise/auto";
import Vuex from "vuex";

import VueRouter from "vue-router";
import App from "./App";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";

import VueCompositionAPI from "@vue/composition-api";
import store from "./store";

// router setup
import routes from "./routes/routes";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import VueApexCharts from "vue-apexcharts";

// configure router
const router = new VueRouter({
  mode: "history",
  routes
});

Vue.use(VueRouter);
Vue.use(VueApexCharts);
Vue.component("Apexchart", VueApexCharts);
Vue.use(VueCompositionAPI);
Vue.use(Toast);
Vue.use(Vuex);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  store,
  router,
  data: {},
  render: (h) => h(App)
});
