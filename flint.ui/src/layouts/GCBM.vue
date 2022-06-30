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
      <a-menu v-model:selectedKeys="selectedKeys" v-model:openKeys="openKeys" class="font-normal" mode="inline">
        <!-- CREATE -->
        <a-menu-item key="gcbmCreate" @click="() => onMenuItemClick('gcbmCreate')">
          <span class="flex items-center text-lg">
            Create Simulation
            <PlusOutlined class="mx-2" />
          </span>
        </a-menu-item>

        <!-- UPLOAD SUB MENU -->
        <a-sub-menu key="gcbmUpload" class="font-normal">
          <template #title>
            <span class="flex items-center text-lg">Upload Files <UploadOutlined class="mx-2" /></span>
          </template>
          <a-menu-item key="classifiers" @click="() => onMenuItemClick('gcbmUploadClassifiers')">
            <span> Classifiers <span class="text-red-700">*</span> </span>
          </a-menu-item>
          <a-menu-item key="disturbances" @click="() => onMenuItemClick('gcbmUploadDisturbances')">
            <span> Disturbances </span>
          </a-menu-item>
          <a-menu-item key="inputDb" @click="() => onMenuItemClick('gcbmUploadInputDB')">
            <span> Input Database </span>
          </a-menu-item>
          <a-menu-item key="miscellaneous" @click="() => onMenuItemClick('gcbmUploadMiscellaneous')">
            <span> Miscellaneous </span>
          </a-menu-item>
        </a-sub-menu>

        <!-- CONFIGURE PARAMETERS SUB MENU -->
        <a-sub-menu key="gcbmConfigParams" class="font-normal">
          <template #title>
            <span class="flex items-center text-lg">Configure Parameters</span>
          </template>
          <a-menu-item key="local-domain" @click="() => onMenuItemClick('gcbmLocalDomain')">
            <span> Local Domain </span>
          </a-menu-item>
          <a-menu-item key="modules" @click="() => onMenuItemClick('gcbmModules')">
            <span>Modules</span>
          </a-menu-item>
          <a-menu-item key="variables" @click="() => onMenuItemClick('gcbmVariables')">
            <span>Variables</span>
          </a-menu-item>
          <a-menu-item key="pools" @click="() => onMenuItemClick('gcbmPools')">
            <span>Pools</span>
          </a-menu-item>
          <a-menu-item key="spinup-parameters">
            <span>Spinup Parameters</span>
          </a-menu-item>
          <a-menu-item key="libraries">
            <span>Libraries</span>
          </a-menu-item>
        </a-sub-menu>

        <!-- RUN -->
        <a-menu-item key="gcbmRun" @click="() => onMenuItemClick('gcbmRun')">
          <span class="flex items-center text-lg">
            Run Simulation
            <RightCircleOutlined class="mx-2" />
          </span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>

    <!-- This router view is for rendering the /gcbm/create, /gcbm/configurations/*, /gcbm/upload, and /gcbm/run routes -->
    <router-view></router-view>
  </a-layout>
</template>
<script>
import { useRoute, useRouter } from 'vue-router'
import { SettingOutlined, RightCircleOutlined, UploadOutlined, PlusOutlined } from '@ant-design/icons-vue'
import { ref, watchEffect } from 'vue'
import useFunctions from '@/utils/useFunctions'

export default {
  name: 'GCBMLayout',
  components: {
    UploadOutlined,
    SettingOutlined,
    PlusOutlined,
    RightCircleOutlined
  },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const selectedKeys = ref([])
    const openKeys = ref([])
    let showBackToHome = ref(false)

    const { trimSlashes } = useFunctions()

    watchEffect(() => {
      const path = trimSlashes(route.path)
      showBackToHome.value = path !== 'gcbm/configurations' || route.params.showBackToHome === 'true'

      if (path === 'gcbm/create') {
        selectedKeys.value = ['gcbmCreate']
        openKeys.value = []
      } else if (path === 'gcbm/run') {
        selectedKeys.value = ['gcbmRun']
        openKeys.value = []
      } else if (path.startsWith('gcbm/configurations')) {
        // For sub-paths, select the appropriate menu item
        const subPath = path.split('/').pop()

        selectedKeys.value = [subPath]
        openKeys.value = ['gcbmConfigParams']
      } else if (path.startsWith('gcbm/upload')) {
        // For sub-paths, select the appropriate menu item
        const subPath = path.split('/').pop()

        selectedKeys.value = [subPath]
        openKeys.value = ['gcbmUpload']
      }
    })

    function onMenuItemClick(name) {
      showBackToHome.value = true
      router.push({ name })
    }

    return { showBackToHome, selectedKeys, openKeys, onMenuItemClick }
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
