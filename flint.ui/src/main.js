import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

import App from "@/App.vue";

import Flint from "@/layouts/Flint.vue";
import Gcbm from "@/layouts/Gcbm.vue";

import Dashboard from "@/views/flint/Dashboard.vue";
import Configurations from "@/views/flint/Configurations.vue";
import ConfigurationsPoint from "@/views/flint/ConfigurationsPoint.vue"
import ConfigurationsRothc from "@/views/flint/ConfigurationsRothc.vue";
import RothcRainfallDataorigin from "@/views/flint/configurations/origin/RothcRainfallDataorigin.vue";
import RothcOpenpanevapDataorigin from "@/views/flint/configurations/origin/RothcOpenpanevapDataorigin.vue";
import RothcAvgairtempDataorigin from "@/views/flint/configurations/origin/RothcAvgairtempDataorigin.vue";
import RothcPrescmDataorigin from "@/views/flint/configurations/origin/RothcPrescmDataorigin.vue";
import RothcSoilcoverDataorigin from "@/views/flint/configurations/origin/RothcSoilcoverDataorigin.vue";

import RothcRainfallMonthavg from "@/views/flint/configurations/monthavg/RothcRainfallMonthavg.vue";
import RothcOpenpanevapMonthavg from "@/views/flint/configurations/monthavg/RothcOpenpanevapMonthavg.vue";
import RothcAvgairtempMonthavg from "@/views/flint/configurations/monthavg/RothcAvgairtempMonthavg.vue";
import RothcPrescmMonthavg from "@/views/flint/configurations/monthavg/RothcPrescmMonthavg.vue";
import RothcSoilcoverMonthavg from "@/views/flint/configurations/monthavg/RothcSoilcoverMonthavg.vue";

import RothcRainfallLastyearcopy from "@/views/flint/configurations/lastyearcopy/RothcRainfallLastyearcopy.vue";
import RothcOpenpanevapLastyearcopy from "@/views/flint/configurations/lastyearcopy/RothcOpenpanevapLastyearcopy.vue";
import RothcAvgairtempLastyearcopy from "@/views/flint/configurations/lastyearcopy/RothcAvgairtempLastyearcopy.vue";
import RothcPrescmLastyearcopy from "@/views/flint/configurations/lastyearcopy/RothcPrescmLastyearcopy.vue";
import RothcSoilcoverLastyearcopy from "@/views/flint/configurations/lastyearcopy/RothcSoilcoverLastyearcopy.vue";

import Outputs from "@/views/flint/Outputs.vue";

import GcbmDashboard from "@/views/gcbm/GcbmDashboard.vue";
import GcbmConfigurations from "@/views/gcbm/GcbmConfigurations.vue";
import GcbmOutputs from "@/views/gcbm/GcbmOutputs.vue";

import Landing from "@/views/Landing.vue";

const routes = [
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
        path: "/flint/configurations/rothc/rainfall-data-orig",
        component: RothcRainfallDataorigin,
      },
      {
        path: "/flint/configurations/rothc/openPanEvap-data-orig",
        component: RothcOpenpanevapDataorigin,
      },
      {
        path: "/flint/configurations/rothc/avgAirTemp-data-orig",
        component: RothcAvgairtempDataorigin,
      },
      {
        path: "/flint/configurations/rothc/presCM-data-orig",
        component: RothcPrescmDataorigin,
      },
      {
        path: "/flint/configurations/rothc/soilCover-data-orig",
        component: RothcSoilcoverDataorigin,
      },



      {
        path: "/flint/configurations/rothc/rainfall-data_monthavg",
        component: RothcRainfallMonthavg,
      },
      {
        path: "/flint/configurations/rothc/openPanEvap-data_monthavg",
        component: RothcOpenpanevapMonthavg,
      },
      {
        path: "/flint/configurations/rothc/avgAirTemp-data_monthavg",
        component: RothcAvgairtempMonthavg,
      },
      {
        path: "/flint/configurations/rothc/presCM-data_monthavg",
        component: RothcPrescmMonthavg,
      },
      {
        path: "/flint/configurations/rothc/soilCover-data_monthavg",
        component: RothcSoilcoverMonthavg,
      },



      {
        path: "/flint/configurations/rothc/rainfall-data_lastyearcopy",
        component: RothcRainfallLastyearcopy,
      },
      {
        path: "/flint/configurations/rothc/openPanEvap-data_lastyearcopy",
        component: RothcOpenpanevapLastyearcopy,
      },
      {
        path: "/flint/configurations/rothc/avgAirTemp-data_lastyearcopy",
        component: RothcAvgairtempLastyearcopy,
      },
      {
        path: "/flint/configurations/rothc/presCM-data_lastyearcopy",
        component: RothcPrescmLastyearcopy,
      },
      {
        path: "/flint/configurations/rothc/soilCover-data_lastyearcopy",
        component: RothcSoilcoverLastyearcopy,
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

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
