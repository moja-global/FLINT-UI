import FLINT from '@/layouts/FLINT.vue'
import GCBM from '@/layouts/GCBM.vue'

import Dashboard from '@/views/flint/Dashboard.vue'
import Configurations from '@/views/flint/Configurations.vue'
import ConfigurationsPoint from '@/views/flint/ConfigurationsPoint.vue'
import ConfigurationsRothC from '@/views/flint/ConfigurationsRothC.vue'

import GCBMCreate from '@/views/gcbm/GCBMCreate.vue'
import GCBMUpload from '@/views/gcbm/GCBMUpload.vue'
import GCBMConfigurations from '@/views/gcbm/GCBMConfigurations.vue'
import GCBMRun from '@/views/gcbm/GCBMRun.vue'

// GCBM Upload Components
import Classifiers from '@/components/gcbm/Uploads/Classifiers.vue'
import Disturbances from '@/components/gcbm/Uploads/Disturbances.vue'
import InputDB from '@/components/gcbm/Uploads/InputDB.vue'
import Miscellaneous from '@/components/gcbm/Uploads/Miscellaneous.vue'

// GCBM Configuration Components
import LocalDomain from '@/components/gcbm/Configurations/LocalDomain.vue'
import Modules from '@/components/gcbm/Configurations/Modules.vue'
import Variables from '@/components/gcbm/Configurations/Variables.vue'
import Pools from '@/components/gcbm/Configurations/Pools.vue'
import Spinup from '@/components/gcbm/Configurations/Spinup.vue'

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
    redirect: '/gcbm/create',
    component: GCBM,
    children: [
      {
        name: 'gcbmCreate',
        path: '/gcbm/create',
        component: GCBMCreate
      },
      {
        name: 'gcbmUpload',
        path: '/gcbm/upload',
        redirect: '/gcbm/upload/classifiers',
        component: GCBMUpload,
        children: [
          {
            name: 'gcbmUploadClassifiers',
            path: '/gcbm/upload/classifiers',
            component: Classifiers
          },
          {
            name: 'gcbmUploadDisturbances',
            path: '/gcbm/upload/disturbances',
            component: Disturbances
          },
          {
            name: 'gcbmUploadInputDB',
            path: '/gcbm/upload/input-db',
            component: InputDB
          },
          {
            name: 'gcbmUploadMiscellaneous',
            path: '/gcbm/upload/miscellaneous',
            component: Miscellaneous
          }
        ]
      },
      {
        name: 'gcbmconfigurations',
        path: '/gcbm/configurations',
        redirect: '/gcbm/configurations/local-domain',
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
          },
          {
            name: 'gcbmPools',
            path: '/gcbm/configurations/pools',
            component: Pools
          },
          {
            name: 'gcbmSpinupParameters',
            path: '/gcbm/configurations/spinup-parameters',
            component: Spinup
          }
        ]
      },
      {
        name: 'gcbmRun',
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
