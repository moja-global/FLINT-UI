import FLINT from '@/layouts/FLINT.vue'
import GCBM from '@/layouts/GCBM.vue'

import Dashboard from '@/views/flint/Dashboard.vue'
import Configurations from '@/views/flint/Configurations.vue'
import ConfigurationsPoint from '@/views/flint/ConfigurationsPoint.vue'
import ConfigurationsRothC from '@/views/flint/ConfigurationsRothC.vue'
import RothCRainfall from '@/views/flint/configurations/rothc/RothCRainfall.vue'
import RothCOpenPanEvap from '@/views/flint/configurations/rothc/RothCOpenPanEvap.vue'
import RothCAvgAirTemp from '@/views/flint/configurations/rothc/RothCAvgAirTemp.vue'
import RothCPresCM from '@/views/flint/configurations/rothc/RothCPresCM.vue'
import RothCSoilCover from '@/views/flint/configurations/rothc/RothCSoilCover.vue'
import RothCInitSoil from '@/views/flint/configurations/rothc/RothCInitSoil.vue'
import RothCSoil from '@/views/flint/configurations/rothc/RothCSoil.vue'

import PointOutput from '@/views/flint/PointOutput.vue'
import TablePoint from '@/views/flint/TablePoint.vue'
import TableRothC from '@/views/flint/TableRothC.vue'
import RothCOutput from '@/views/flint/RothCOutput.vue'

import GCBMDashboard from '@/views/gcbm/GCBMDashboard.vue'
import GCBMUpload from '@/views/gcbm/GCBMUpload.vue'
import GCBMRun from '@/views/gcbm/GCBMRun.vue'
import GCBMOutputs from '@/views/gcbm/GCBMOutputs.vue'

import Landing from '@/views/Landing.vue'

const routes = [
  {
    path: '/flint',
    redirect: '/flint/dashboard',
    component: FLINT,
    children: [
      {
        path: '/flint/dashboard',
        component: Dashboard
      },
      {
        path: '/flint/configurations',
        component: Configurations
      },
      {
        path: '/flint/configurations/point',
        component: ConfigurationsPoint
      },
      {
        path: '/flint/configurations/rothc',
        component: ConfigurationsRothC
      },
      {
        path: '/flint/configurations/rothc/rainfall',
        component: RothCRainfall
      },
      {
        path: '/flint/configurations/rothc/openPanEvap',
        component: RothCOpenPanEvap
      },
      {
        path: '/flint/configurations/rothc/avgAirTemp',
        component: RothCAvgAirTemp
      },
      {
        path: '/flint/configurations/rothc/presCM',
        component: RothCPresCM
      },
      {
        path: '/flint/configurations/rothc/soilCover',
        component: RothCSoilCover
      },
      {
        path: '/flint/configurations/rothc/initSoil',
        component: RothCInitSoil
      },
      {
        path: '/flint/configurations/rothc/soil',
        component: RothCSoil
      },
      {
        path: '/flint/point_output_table',
        component: TablePoint
      },
      {
        path: '/flint/point_output',
        component: PointOutput
      },
      {
        path: '/flint/rothc_output_table',
        component: TableRothC
      },
      {
        path: '/flint/rothc_output',
        component: RothCOutput
      }
    ]
  },
  {
    path: '/gcbm',
    redirect: '/gcbm/dashboard',
    component: GCBM,
    children: [
      {
        path: '/gcbm/dashboard',
        component: GCBMDashboard
      },
      {
        path: '/gcbm/upload',
        component: GCBMUpload
      },
      {
        path: '/gcbm/run',
        component: GCBMRun
      },
      {
        path: '/gcbm/outputs',
        component: GCBMOutputs
      }
    ]
  },
  {
    path: '/landing',
    component: Landing
  },
  {
    path: '/',
    component: Landing
  },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

export default routes
