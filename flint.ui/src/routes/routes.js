import FLINT from '@/layouts/FLINT.vue'
import GCBM from '@/layouts/GCBM.vue'

import Dashboard from '@/views/flint/Dashboard.vue'
import Configurations from '@/views/flint/Configurations.vue'
import ConfigurationsPoint from '@/views/flint/ConfigurationsPoint.vue'
import ConfigurationsRothC from '@/views/flint/ConfigurationsRothC.vue'

import GCBMConfigurations from '@/components/GCBM/GCBMConfigurations.vue'

import LocalDomain from '@/components/GCBM/Configurations/LocalDomain.vue'
import Modules from '@/components/GCBM/Configurations/Modules.vue'
import Variables from '@/components/GCBM/Configurations/Variables.vue'

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
      }
    ]
  },
  {
    path: '/gcbm',
    redirect: '/gcbm/configurations',
    component: GCBM,
    children: [
      {
        name: 'gcbmconfigurations',
        path: '/gcbm/configurations',
        component: GCBMConfigurations,
        children: [
          {
            name: 'gcbmLocalDomain',
            path: '/gcbm/configurations/local-domain',
            component: LocalDomain
          },
          {
            name: 'gcbmModules',
            path: '/gcbm/configurations/modules',
            component: Modules
          },
          {
            name: 'gcbmVariables',
            path: '/gcbm/configurations/variables',
            component: Variables
          }
        ]
      },
      {
        name: 'gcbmconfigurations',
        path: '/gcbm/configurations',
        component: GCBMDashboard
      },
      {
        name: 'gcbmupload',
        path: '/gcbm/upload',
        component: GCBMUpload
      },
      {
        name: 'gcbmrun',
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
  { path: '/:pathMatch(.*)*', name: 'not-found', component: Errorpage }
]

export default routes
