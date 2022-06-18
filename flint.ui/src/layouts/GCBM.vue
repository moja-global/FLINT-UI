<template>
  <a-layout>
    <a-layout-sider width="260" style="background: #fff; min-height: 500px" class="pb-16">
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
      <div class="flex flex-col gap-2">
        <a-collapse :bordered="false">
          <a-collapse-panel
            key="acc1"
            header="Configure Parameters"
            class="text-lg bg-white"
            style="border-bottom-width: 0"
          >
            <a-menu mode="inline" :style="{ borderRight: 0 }" class="font-normal">
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
                <span>Libraries</span>
              </a-menu-item>
            </a-menu>
          </a-collapse-panel>
        </a-collapse>
        <div class="flex items-center pl-10 text-lg">
          Upload Files
          <UploadOutlined class="mx-2" />
        </div>
        <div>
          <span class="flex items-center ant-menu-title-content pl-10 text-lg">
            Run Simulation
            <RightCircleOutlined class="mx-2" />
          </span>
        </div>
      </div>
    </a-layout-sider>
    <a-layout class="bg-gray-50" style="padding: 0 24px 24px">
      <div v-if="!showBackToHome">
        <GCBMLanding />
      </div>

      <!-- This router view is for rendering the /gcbm/configurations, and /gcbm/run routes -->
      <router-view v-else></router-view>
    </a-layout>
  </a-layout>
</template>
<script>
import { useRoute, useRouter } from 'vue-router'
import { SettingOutlined, RightCircleOutlined, UploadOutlined } from '@ant-design/icons-vue'
import { ref, watchEffect } from 'vue'
import GCBMLanding from '@/components/GCBM/GCBMLanding.vue'

export default {
  name: 'GCBMLayout',
  components: {
    GCBMLanding,
    UploadOutlined,
    SettingOutlined,
    RightCircleOutlined
  },
  setup() {
    const router = useRouter()
    const route = useRoute()
    let showBackToHome = ref(false)

    watchEffect(() => {
      const path = trimSlashes(route.path)
      showBackToHome.value = path !== 'gcbm/configurations' || route.params.showBackToHome === 'true'
    })

    function onLocalDomainClick() {
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

<style scoped>
:deep(.ant-collapse-header) {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}
:deep(.ant-collapse-header > div) {
  display: flex;
  align-self: center;
}
</style>
