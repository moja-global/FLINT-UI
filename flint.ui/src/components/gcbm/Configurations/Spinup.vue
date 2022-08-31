<template>
  <div class="py-4 px-8 text-earth">
    <a-typography-title :level="2">
      <span class="font-normal text-earth"> Spinup </span>
    </a-typography-title>
    <a-typography-text>
      <span class="text-earth mb-6 block"> Configure the Spinup variables for the simulation </span>
    </a-typography-text>
    <div class="flex gap-2 mb-6 items-center">
      <span class="text-earth text-lg block"> Enable Spinup: </span>
      <a-switch size="small" v-model:checked="spinupEnabled" />
    </div>
    <a-divider />

    <a-form disabled :model="variables" :wrapper-col="wrapperCol">
      <a-typography-title :level="3">
        <span class="font-normal text-earth"> Variables </span>
      </a-typography-title>
      <div class="flex flex-row">
        <a-form-item label="Delay">
          <a-input-number :disabled="!spinupEnabled" v-model:value="variables.delay" />
        </a-form-item>
        <a-form-item label="Minimum Rotation">
          <a-input-number :disabled="!spinupEnabled" v-model:value="variables.minimum_rotation" />
        </a-form-item>
      </div>
      <a-form-item label="Run Delay">
        <a-switch :disabled="!spinupEnabled" v-model:checked="variables.run_delay" />
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { ref, reactive, watchEffect } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'Spinup',
  setup() {
    const activeKey = ref(['variables-1'])
    const store = useStore()

    const spinupEnabled = ref(store.state.gcbm.config.spinup.Spinup.enabled)

    const variables = reactive({
      ...store.state.gcbm.config.spinup.SpinupVariables
    })

    watchEffect(() => {
      store.commit('setGCBMSpinupEnabledState', { newState: spinupEnabled })
      store.commit('setGCBMSpinupVariablesState', { newState: { ...variables } })
    })

    store.subscribe((mutation) => {
      if (mutation.type === 'setWholeGCBMSpinupState') {
        spinupEnabled.value = mutation.payload.newState.Spinup.enabled
        variables.delay = mutation.payload.newState.SpinupVariables.delay
        variables.minimum_rotation = mutation.payload.newState.SpinupVariables.minimum_rotation
        variables.run_delay = mutation.payload.newState.SpinupVariables.run_delay
      }
    })

    return { activeKey, variables, spinupEnabled, wrapperCol: { style: { marginRight: '16px' } } }
  }
}
</script>

<style scoped>
:deep(.variablesCollapse .ant-collapse-header) {
  /* background-color: white !important; */
  font-size: 18px;
  padding-top: 8px !important;
  padding-bottom: 8px !important;
  color: theme('colors.earth') !important;
}
</style>
