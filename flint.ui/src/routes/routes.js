import Flint from "@/layouts/Flint.vue";
import Gcbm from "@/layouts/Gcbm.vue";

import Dashboard from "@/views/flint/Dashboard.vue";
import Configurations from "@/views/flint/Configurations.vue";
import ConfigurationsPoint from "@/views/flint/ConfigurationsPoint.vue"
import ConfigurationsRothc from "@/views/flint/ConfigurationsRothc.vue";
import RothcRainfall from "@/views/flint/configurations/rothc/RothcRainfall.vue";
import RothcOpenpanevap from "@/views/flint/configurations/rothc/RothcOpenpanevap.vue";
import RothcAvgairtemp from "@/views/flint/configurations/rothc/RothcAvgairtemp.vue";
import RothcPrescm from "@/views/flint/configurations/rothc/RothcPrescm.vue";
import RothcSoilcover from "@/views/flint/configurations/rothc/RothcSoilcover.vue";
import RothcInitsoil from "@/views/flint/configurations/rothc/RothcInitsoil.vue";
import RothcSoil from "@/views/flint/configurations/rothc/RothcSoil.vue";

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
        path: "/flint/configurations/rothc/rainfall",
        component: RothcRainfall,
      },
      {
        path: "/flint/configurations/rothc/openPanEvap",
        component: RothcOpenpanevap,
      },
      {
        path: "/flint/configurations/rothc/avgAirTemp",
        component: RothcAvgairtemp,
      },
      {
        path: "/flint/configurations/rothc/presCM",
        component: RothcPrescm,
      },
      {
        path: "/flint/configurations/rothc/soilCover",
        component: RothcSoilcover,
      },
      {
        path: "/flint/configurations/rothc/initSoil",
        component: RothcInitsoil,
      },
      {
        path: "/flint/configurations/rothc/soil",
        component: RothcSoil,
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

export default routes;
