<template>
  <a-layout>
    <a-layout-sider width="260" style="background: #fff" class="pb-16">
      <div class="px-5">
        <a-typography-title style="margin-bottom: 0px">
          <router-link :to="{ name: 'gcbmconfigurations', params: { showBackToHome: false } }">
            <span class="font-normal mb-2 text-earth">GCBM</span>
          </router-link>
        </a-typography-title>
        <a-typography-text class="text-lg block">
          <span class="flex items-center mb-2">
            <setting-outlined class="mr-2" />
            <span>Simulation Editor</span>
          </span>
        </a-typography-text>
        <a-typography-text>
          <span>
            <span>Already have a configuration ready? </span>
            <a href="#">Import</a>
          </span>
        </a-typography-text>
      </div>
      <a-divider />
      <a-menu mode="inline" :style="{ borderRight: 0 }">
        <a-sub-menu key="sub1" @titleClick="onLocalDomainClick">
          <template #title>
            <span> Local Domain </span>
          </template>
          <a-menu-item key="1">Start and End date</a-menu-item>
          <a-menu-item key="2">Number of Threads</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="sub2">
          <span>Modules</span>
        </a-menu-item>
        <a-menu-item key="sub3">
          <span>Variables</span>
        </a-menu-item>
        <a-menu-item key="sub4">
          <span>Pools</span>
        </a-menu-item>
        <a-menu-item key="sub5">
          <span>Spinup Parameters</span>
        </a-menu-item>
        <a-menu-item key="sub6">
          <span>Upload Files</span>
        </a-menu-item>
        <a-menu-item key="sub7">
          <span>Libraries</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout class="bg-gray-50" style="padding: 0 24px 24px">
      <div v-if="!showBackToHome" class="py-4 px-8">
        <a-typography-title>
          <span class="font-normal text-earth"> Generic Carbon Budgeting Model </span>
        </a-typography-title>
        <a-typography-text class="w-1">
          The GCBM Simulation Run consists of 3 main steps: Configuring the simulation parameters, running the
          simulation, and downloading the output.
        </a-typography-text>
        <StepperStatic />
      </div>

      <!-- This router view is for rendering the /gcbm/configurations, and /gcbm/run routes -->
      <router-view v-else></router-view>
    </a-layout>
  </a-layout>
</template>
<script>
import { useRoute, useRouter } from 'vue-router'
import { SettingOutlined } from '@ant-design/icons-vue'
import { ref, watchEffect } from 'vue'
import StepperGCBM from '../components/Stepper/StepperGCBM.vue'
import StepperStatic from '../components/Stepper/StepperStatic.vue'

export default {
  name: 'GCBMLayout',
  components: {
    SettingOutlined,
    StepperGCBM,
    StepperStatic
  },
  setup() {
    const router = useRouter()
    const route = useRoute()
    let showBackToHome = ref(false)

    watchEffect(() => {
      const path = trimSlashes(route.path)
      showBackToHome.value = path !== 'gcbm/configurations' || route.params.showBackToHome === 'true'
    })

    function onLocalDomainClick(e) {
      console.log(e)
      showBackToHome.value = true
      router.push({ name: 'gcbmLocalDomain' })
    }

    function trimSlashes(str) {
      return str.replace(/^\/+|\/+$/g, '')
    }

    return { onLocalDomainClick, showBackToHome }
  }
}
</script>
