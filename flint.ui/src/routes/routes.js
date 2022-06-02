import FLINT from '@/layouts/FLINT.vue'
import GCBM from '@/layouts/GCBM.vue'

import Dashboard from '@/views/flint/Dashboard.vue'
import Configurations from '@/views/flint/Configurations.vue'
import ConfigurationsPoint from '@/views/flint/ConfigurationsPoint.vue'
import ConfigurationsRothC from '@/views/flint/ConfigurationsRothC.vue'

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
        path: '/dashboard',
        component: Dashboard
      },
      {
        path: '/configurations',
        component: Configurations
      },
      {
        path: '/configurations/point',
        component: ConfigurationsPoint
      },
      {
        path: '/configurations/rothc',
        component: ConfigurationsRothC
      }
    ]
  },
  {
    path: '/gcbm',
    redirect: '/gcbm/dashboard',
    component: GCBM,
    children: [
      {
        path: '/dashboard',
        component: GCBMDashboard
      },
      {
        path: '/upload',
        component: GCBMUpload
      },
      {
        path: '/run',
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
  { path: '/:pathMatch(.*)*', name: 'not-found', component: Errorpage }
]

export default routes
