<template>
  <div class="py-4 px-8 text-earth">
    <a-typography-title :level="2"><span class="font-normal text-earth"> Modules </span></a-typography-title>
    <a-typography-text>
      <span class="text-earth mb-6 block">
        Choose the modules that you want to include in the run. You can expand the module to know about it, and to
        configure any settings.
      </span>
    </a-typography-text>

    <a-collapse accordion v-model:activeKey="activeKey" :expand-icon-position="'right'" class="modulesAccordion">
      <a-collapse-panel v-for="(gcbmModule, gcbmKey) in modulesWithNames" :header="gcbmModule.name" :key="gcbmKey">
        <template #extra>
          <a-tooltip v-if="gcbmModule.enabled === undefined">
            <template #title>This module cannot be disabled</template>
            <a-button disabled>Enabled</a-button>
          </a-tooltip>
          <a-popconfirm
            v-else
            placement="topLeft"
            :title="`Are you sure you want to disable the '${gcbmModule.name}' module?`"
            :visible="gcbmModule.popConfirmVisible"
            ok-text="Yes"
            cancel-text="No"
            @visibleChange="(bool) => onVisibleChange(gcbmKey, bool)"
            @confirm="() => onPopConfirmConfirm(gcbmKey)"
            @cancel="() => popConfirmCancel(gcbmKey)"
            @click="(e) => e.stopPropagation()"
          >
            <a-button :type="gcbmModule.enabled === true ? undefined : 'primary'">
              {{ gcbmModule.enabled ? 'Disable' : 'Enable' }}
            </a-button>
          </a-popconfirm>
        </template>
        <a-typography-text>
          <pre>{{ gcbmModuleDescriptions[gcbmKey] || `Description of the '${gcbmModule.name}' module.` }}</pre>
        </a-typography-text>
        <div v-if="gcbmKey === 'CBMDecayModule'" class="mt-4">
          <div class="flex flex-row items-center">
            <a-typography-text class="mr-2"> Enable Decay Removals: </a-typography-text>
            <a-switch
              size="small"
              :checked="gcbmModule.settings.extra_decay_removals"
              @change="onDecayModuleRemovalsChange"
            />
          </div>
        </div>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import useFunctions from '@/utils/useFunctions'
import gcbmModuleDescriptions from '@/utils/gcbmModuleDescriptions.json'
import { cloneDeep } from 'lodash'

export default {
  name: 'LocalDomain',
  setup() {
    const num_of_threads = ref(10)
    const activeKey = ref([])

    const { convertGCBMModuleKeyToName } = useFunctions()

    const store = useStore()
    const modules = store.state.gcbm.config.modules_cbm.Modules

    const modulesWithNames = ref(
      Object.keys(modules).reduce((acc, moduleKey) => {
        acc[moduleKey] = { ...modules[moduleKey], name: convertGCBMModuleKeyToName(moduleKey) }
        acc[moduleKey]['popConfirmVisible'] = false
        return acc
      }, {})
    )

    store.subscribe((mutation) => {
      if (mutation.type === 'setGCBMModulesState') {
        const newModulesState = cloneDeep(mutation.payload.newState)
        modulesWithNames.value = Object.keys(newModulesState).reduce((acc, moduleKey) => {
          acc[moduleKey] = { ...newModulesState[moduleKey], name: convertGCBMModuleKeyToName(moduleKey) }
          acc[moduleKey]['popConfirmVisible'] = false
          return acc
        }, {})
      }
    })

    function onEnableDisableClick(moduleKey, enabled) {
      const moduleState = store.state.gcbm.config.modules_cbm.Modules
      moduleState[moduleKey] = { ...moduleState[moduleKey], enabled }
      modulesWithNames.value[moduleKey].enabled = enabled
      changeModulesState(moduleState)
    }

    function onVisibleChange(moduleKey, bool) {
      if (!bool) {
        modulesWithNames.value[moduleKey].popConfirmVisible = false
        return
      }
      if (modulesWithNames.value[moduleKey].enabled) {
        // clicked on disable
        modulesWithNames.value[moduleKey].popConfirmVisible = true
      } else {
        // clicked on enable
        onEnableDisableClick(moduleKey, true)
      }
    }

    function onPopConfirmConfirm(gcbmKey) {
      onEnableDisableClick(gcbmKey, false)
      modulesWithNames.value[gcbmKey].popConfirmVisible = false
    }

    function popConfirmCancel(gcbmKey) {
      modulesWithNames.value[gcbmKey].popConfirmVisible = false
    }

    function changeModulesState(newState) {
      // change value in store
      store.commit('setGCBMModulesState', { newState })
    }

    function onDecayModuleRemovalsChange(bool) {
      const moduleState = store.state.gcbm.config.modules_cbm.Modules
      moduleState['CBMDecayModule'].settings.extra_decay_removals = bool
      changeModulesState(moduleState)
    }

    return {
      activeKey,
      num_of_threads,
      modulesWithNames,
      gcbmModuleDescriptions,
      popConfirmCancel,
      onVisibleChange,
      onEnableDisableClick,
      onPopConfirmConfirm,
      onDecayModuleRemovalsChange
    }
  }
}
</script>

<style scoped>
:deep(.modulesAccordion .ant-collapse-header) {
  /* background-color: white !important; */
  font-size: 18px;
  padding-top: 8px !important;
  padding-bottom: 8px !important;
  color: theme('colors.earth') !important;
}
</style>
