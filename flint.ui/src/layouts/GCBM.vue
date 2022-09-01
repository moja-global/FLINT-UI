<template>
  <a-layout style="max-width: 100vw !important; position: relative; overflow-x: hidden">
    <a-layout-sider width="260" style="background: #fff; min-height: 500px" class="pb-16">
      <div class="px-5">
        <a-typography-title style="margin-bottom: 0px">
          <router-link to="/gcbm">
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
            <a-typography-link @click="() => (uploadAllModalVisible = true)">Import Simulation</a-typography-link>
            <UploadAll
              :visible="uploadAllModalVisible"
              @cancel="() => (uploadAllModalVisible = false)"
              @ok="() => (uploadAllModalVisible = false)"
            />
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
        <a-sub-menu key="gcbmUpload" class="font-normal" :disabled="!title">
          <template #title>
            <span class="flex items-center text-lg">Upload Files <UploadOutlined class="mx-2" /></span>
          </template>
          <a-menu-item key="classifiers" @click="() => onMenuItemClick('gcbmUploadClassifiers')">
            <span> Classifiers <span class="text-red-700">*</span> </span>
          </a-menu-item>
          <a-menu-item key="disturbances" @click="() => onMenuItemClick('gcbmUploadDisturbances')">
            <span> Disturbances </span>
          </a-menu-item>
          <a-menu-item key="input-db" @click="() => onMenuItemClick('gcbmUploadInputDB')">
            <span> Input Database </span>
          </a-menu-item>
          <a-menu-item key="miscellaneous" @click="() => onMenuItemClick('gcbmUploadMiscellaneous')">
            <span> Miscellaneous </span>
          </a-menu-item>
        </a-sub-menu>

        <!-- CONFIGURE PARAMETERS SUB MENU -->
        <a-sub-menu key="gcbmConfigParams" class="font-normal" :disabled="!classifiersUploaded">
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
          <a-menu-item key="spinup-parameters" @click="() => onMenuItemClick('gcbmSpinupParameters')">
            <span>Spinup Parameters</span>
          </a-menu-item>
          <!-- <a-menu-item key="libraries">
            <span>Libraries</span>
          </a-menu-item> -->
        </a-sub-menu>

        <!-- RUN -->
        <a-menu-item key="gcbmRun" @click="() => onMenuItemClick('gcbmRun')" :disabled="!classifiersUploaded">
          <span class="flex items-center text-lg">
            Run Simulation
            <RightCircleOutlined class="mx-2" />
          </span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>

    <a-affix v-show="!!title" :class="[affixHidden ? 'active-simulation-affix-minimized' : 'active-simulation-affix']">
      <a-alert message="Active Simulation:" type="info" :show-icon="true">
        <template #description>
          <div>
            <a-typography-text>
              <span class="font-normal">{{ title }}</span>
            </a-typography-text>
          </div>
          <div class="flex justify-end items-end flex-col">
            <a-button @click="onSimulationCancelClick" size="small">Cancel</a-button>
          </div>
          <RightOutlined class="active-simulation-affix-icon" @click="affixHidden = !affixHidden" />
        </template>
      </a-alert>
    </a-affix>

    <!-- This router view is for rendering the /gcbm/create, /gcbm/configurations/*, /gcbm/upload, and /gcbm/run routes -->
    <router-view></router-view>
  </a-layout>
</template>
<script>
import { ref, watchEffect } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import {
  SettingOutlined,
  RightCircleOutlined,
  RightOutlined,
  UploadOutlined,
  PlusOutlined
} from '@ant-design/icons-vue'
import useFunctions from '@/utils/useFunctions'
import { Modal } from 'ant-design-vue'
import UploadAll from '@/components/gcbm/UploadAll.vue'

export default {
  name: 'GCBMLayout',
  components: {
    UploadOutlined,
    SettingOutlined,
    PlusOutlined,
    RightCircleOutlined,
    RightOutlined,
    UploadAll
  },
  setup() {
    // TODO: Fetch all simulation data (configs, classifiers, disturbances, etc.) from the server.
    const router = useRouter()
    const route = useRoute()
    const selectedKeys = ref([])
    const openKeys = ref([])
    const uploadAllModalVisible = ref(false)

    const { trimSlashes } = useFunctions()

    const store = useStore()
    const title = ref('')
    const classifiersUploaded = ref(false)

    const affixHidden = ref(false)
    const affixIconRotate = ref('rotate(0deg)')

    watchEffect(() => {
      affixIconRotate.value = affixHidden.value ? 'rotate(180deg)' : 'rotate(0deg)'
    })

    setInterval(() => {
      affixHidden.value = true
    }, 10000)

    watchEffect(() => {
      title.value = store.state.gcbm.config.title
      classifiersUploaded.value = store.state.gcbm.filesUploaded.classifiers.length > 0

      const path = trimSlashes(route.path)

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
      router.push({ name })
    }

    function onSimulationCancelClick() {
      Modal.confirm({
        title: 'Are you sure you want to cancel the simulation?',
        content: 'This will cancel the simulation and all configurations and data will be lost.',
        okText: 'Yes',
        cancelText: 'No',
        onOk: () => {
          // TODO: Call a backend endpoint to delete simulation and all associated data.
          router.push({ name: 'gcbmCreate' })
          store.dispatch('reset_state')
        }
      })
    }

    return {
      title,
      openKeys,
      affixHidden,
      selectedKeys,
      affixIconRotate,
      classifiersUploaded,
      uploadAllModalVisible,
      onMenuItemClick,
      onSimulationCancelClick
    }
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

.active-simulation-affix {
  position: absolute;
  right: 10px;
  top: 15px;
  transition: all 0.3s ease;
}
.active-simulation-affix-minimized {
  transition: all 0.3s ease;
  position: absolute;
  right: -190px;
  top: 15px;
  overflow: hidden;
}

.active-simulation-affix-icon {
  position: absolute;
  left: 4px;
  bottom: 4px;
  cursor: pointer;
  transform: v-bind('affixIconRotate');
  transition: transform 0.2s ease-in-out;
}
</style>
