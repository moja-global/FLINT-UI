import FLINT from '@/layouts/FLINT.vue'
import GCBM from '@/layouts/GCBM.vue'

import Dashboard from '@/views/flint/Dashboard.vue'
import Configurations from '@/views/flint/Configurations.vue'
import ConfigurationsPoint from '@/views/flint/ConfigurationsPoint.vue'
import ConfigurationsRothC from '@/views/flint/ConfigurationsRothC.vue'

import PointOutput from '@/views/flint/PointOutput.vue'
import PointOuterTable from '@/views/flint/PointOuterTable.vue'
import RothCOuterTable from '@/views/flint/RothCOuterTable.vue'
import RothCOutput from '@/views/flint/RothCOutput.vue'

import GCBMDashboard from '@/views/gcbm/GCBMDashboard.vue'
import GCBMUpload from '@/views/gcbm/GCBMUpload.vue'
import GCBMRun from '@/views/gcbm/GCBMRun.vue'

import Landing from '@/views/Landing.vue'

import Errorpage from '@/views/Errorpage.vue'

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
        path: '/flint/point_output_table',
        component: PointOuterTable
      },
      {
        path: '/flint/point_output',
        component: PointOutput
      },
      {
        path: '/flint/rothc_output_table',
        component: RothCOuterTable
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
  { path: '/:pathMatch(.*)*', component: Errorpage }
]

export default routes
