import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

import App from "@/App.vue";

import Flint from "@/layouts/Flint.vue";
import Gcbm from "@/layouts/Gcbm.vue";

import Dashboard from "@/views/flint/Dashboard.vue";
import Configurations from "@/views/flint/Configurations.vue";
import ConfigurationsPoint from "@/views/flint/ConfigurationsPoint.vue";
import ConfigurationsRothc from "@/views/flint/ConfigurationsRothc.vue";
import Outputs from "@/views/flint/Outputs.vue";

import GcbmDashboard from "@/views/gcbm/GcbmDashboard.vue";
import GcbmConfigurations from "@/views/gcbm/GcbmConfigurations.vue";
import GcbmOutputs from "@/views/gcbm/GcbmOutputs.vue";

import Landing from "@/views/Landing.vue";

const routes: any = [
  {
    path: "/flint",
    redirect: "/flint/dashboard",
    component: Flint,
    children: [
      {
        path: "/flint/dashboard",
        component: Dashboard,
      },
      {
        path: "/flint/configurations",
        component: Configurations,
      },
      {
        path: "/flint/configurations/point",
        component: ConfigurationsPoint,
      },
      {
        path: "/flint/configurations/rothc",
        component: ConfigurationsRothc,
      },
      {
        path: "/flint/outputs",
        component: Outputs,
      },
    ],
  },
  {
    path: "/gcbm",
    redirect: "/gcbm/dashboard",
    component: Gcbm,
    children: [
      {
        path: "/gcbm/dashboard",
        component: GcbmDashboard,
      },
      {
        path: "/gcbm/configurations",
        component: GcbmConfigurations,
      },
      {
        path: "/gcbm/outputs",
        component: GcbmOutputs,
      },
    ],
  },
  {
    path: "/landing",
    component: Landing,
  },
  {
    path: "/",
    component: Landing,
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router: any = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
