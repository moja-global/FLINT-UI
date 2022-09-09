<template>
  <div class="py-4 px-8 text-earth">
    <a-typography-title :level="2">
      <span class="font-normal text-earth"> Variables </span>
    </a-typography-title>
    <a-typography-text>
      <span class="text-earth mb-6 block"> Configure the variables for the simulation </span>
    </a-typography-text>

    <a-form :model="variables" :wrapper-col="wrapperCol">
      <a-collapse
        v-model:activeKey="activeKey"
        class="variablesCollapse"
        :bordered="false"
        :expandIconPosition="'right'"
      >
        <a-collapse-panel key="variables-1" header="Variables">
          <div class="flex flex-row">
            <a-form-item label="Enable Peatland">
              <a-switch v-model:checked="variables.enable_peatland" />
            </a-form-item>
            <a-form-item label="Enable Moss">
              <a-switch v-model:checked="variables.enable_moss" />
            </a-form-item>
          </div>
        </a-collapse-panel>
        <a-collapse-panel key="variables-2" header="Ranges & Rates">
          <div class="flex flex-row">
            <a-form-item label="Age Class Range">
              <a-input-number
                v-model:value="variables.age_class_range"
                min="0"
                max="100"
                step="1"
                style="width: 100px"
              />
            </a-form-item>
            <a-form-item label="Age Maximum">
              <a-input-number v-model:value="variables.age_maximum" min="0" max="1000" step="1" style="width: 100px" />
            </a-form-item>
            <a-form-item label="Slow AG to BG Mixing Rate">
              <a-input-number
                v-model:value="variables.slow_ag_to_bg_mixing_rate"
                min="0"
                max="1"
                step="0.001"
                style="width: 100px"
              />
            </a-form-item>
          </div>
        </a-collapse-panel>
        <a-collapse-panel key="variables-3" header="Boundaries & Land Class">
          <div class="flex flex-row flex-wrap">
            <a-form-item label="Admin Boundary">
              <a-select v-model:value="variables.admin_boundary">
                <a-select-option value="British Columbia">British Columbia</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item label="Eco Boundary">
              <a-select v-model:value="variables.eco_boundary">
                <a-select-option value="Taiga Plains">Taiga Plains</a-select-option>
              </a-select>
            </a-form-item>
          </div>
          <div class="flex flex-row flex-wrap">
            <a-form-item label="Initial Historic Land Class">
              <a-select v-model:value="variables.initial_historic_land_class">
                <a-select-option value="FL">FL</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item label="Initial Current Land Class">
              <a-select v-model:value="variables.initial_current_land_class">
                <a-select-option value="FL">FL</a-select-option>
              </a-select>
            </a-form-item>
          </div>
        </a-collapse-panel>
      </a-collapse>
    </a-form>
  </div>
</template>

<script>
import { cloneDeep } from 'lodash'
import { reactive, ref, watchEffect } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'Variables',
  setup() {
    const activeKey = ref(['variables-1'])
    const store = useStore()

    const variables = reactive({
      ...store.state.gcbm.config.variables.Variables
    })

    watchEffect(() => {
      store.commit('setGCBMVariablesState', { newState: { ...variables } })
    })

    store.subscribe((mutation) => {
      if (mutation.type === 'setGCBMVariablesState') {
        Object.assign(variables, cloneDeep(mutation.payload.newState))
      }
    })

    return { activeKey, variables, wrapperCol: { style: { marginRight: '16px' } } }
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
