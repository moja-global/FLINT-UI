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
        <a-collapse :bordered="false" v-model:activeKey="collapseActiveKeys">
          <a-collapse-panel
            key="acc1"
            header="Configure Parameters"
            class="text-lg bg-white"
            style="border-bottom-width: 0"
          >
            <a-menu v-model:selectedKeys="selectedKeys" mode="inline" :style="{ borderRight: 0 }" class="font-normal">
              <a-menu-item key="local-domain" @click="() => onMenuItemClick('gcbmLocalDomain')">
                <span> Local Domain </span>
              </a-menu-item>
              <a-menu-item key="modules" @click="() => onMenuItemClick('gcbmModules')">
                <span>Modules</span>
              </a-menu-item>
              <a-menu-item key="variables">
                <span>Variables</span>
              </a-menu-item>
              <a-menu-item key="pools">
                <span>Pools</span>
              </a-menu-item>
              <a-menu-item key="spinup-parameters">
                <span>Spinup Parameters</span>
              </a-menu-item>
              <a-menu-item key="libraries">
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

      <!-- This router view is for rendering the /gcbm/configurations, /gcbm/upload, and /gcbm/run routes -->
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
    const selectedKeys = ref(['sub1'])
    const collapseActiveKeys = ref([])
    let showBackToHome = ref(false)

    watchEffect(() => {
      const path = trimSlashes(route.path)
      showBackToHome.value = path !== 'gcbm/configurations' || route.params.showBackToHome === 'true'

      if (path === 'gcbm/configurations') {
        // Don't select any meny item for this path and close the collapse
        selectedKeys.value = []
        collapseActiveKeys.value = []
      } else if (path.startsWith('gcbm/configurations')) {
        // For sub-paths, select the appropriate menu item
        const subPath = path.split('/').pop()

        selectedKeys.value = [subPath]
        collapseActiveKeys.value = ['acc1']
      }
    })

    function onMenuItemClick(name) {
      showBackToHome.value = true
      router.push({ name })
    }

    function trimSlashes(str) {
      return str.replace(/^\/+|\/+$/g, '')
    }

    return { showBackToHome, selectedKeys, collapseActiveKeys, onMenuItemClick }
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
