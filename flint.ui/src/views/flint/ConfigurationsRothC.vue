<template>
  <div>
    <div class="mb-10 mx-5 md:justify-center">
      <div class="px-8 pb-6 sm:px-16 md:px-24">
        <div>
          <h2 class="mb mt-7 py-4 text-2xl text-earth">RothC example simulation configuration</h2>
          <p class="text-earth sm:text-base">
            Was the simulation conducted at a specific place ? Click
            <span>here</span> to save latitude and longitude co-ordinates
          </p>
          <p class="text-earth text-base">
            Input the custom values in the fields below. Default values as placeholder text will be used if none
            provided.
          </p>
        </div>

        <div class="mt-10">
          <div>
            <div class="py-6 mb-3">
              <h2 class="text-xl font-normal text-earth">Start and End date of simulation</h2>
              <div>
                <div class="text-2xl font-normal text-gray"><Datepicker size="large" /></div>
              </div>
            </div>
          </div>
        </div>

        <h2 class="mt-7 py-4 text-2xl font-normal text-earth">Configure Parameters</h2>

        <a-collapse accordion :bordered="false" class="rothcAccordion" expand-icon-position="right">
          <a-collapse-panel
            v-for="(item, index) in configurations"
            :key="index"
            :header="`${item.text} (${item.type})`"
          >
            <component :is="item.component" />
          </a-collapse-panel>
        </a-collapse>

        <div class="my-16 flex gap-8 items-center">
          <div data-v-step="5"><Button @click="apiRoute_rothc">Run</Button></div>
          <div v-show="clickedRun" data-v-step="6">
            <Button :btn-size="'auto'" @click="showTable ? hideRothCOutputContainer() : showRothCOutputContainer()">
              {{ showTable ? 'Hide' : 'Show' }} Output
            </Button>
          </div>
        </div>
        <RothCOutputContainer v-if="showTable" />
      </div>
    </div>
  </div>
</template>

<script>
import RothCTemplate from '@/views/flint/RothCTemplate.vue'
import Datepicker from '@/components/Datepicker/DatepickerRothC.vue'
import Button from '@/components/Button/Button.vue'
import RothCOutputContainer from './RothCOutputContainer.vue'
import RothCAvgAirTempVue from '@/components/ConfigurationsRothC/RothCAvgAirTemp.vue'
import RothCSoilCoverVue from '@/components/ConfigurationsRothC/RothCSoilCover.vue'
import RothCSoilVue from '@/components/ConfigurationsRothC/RothCSoil.vue'
import RothCInitSoilVue from '@/components/ConfigurationsRothC/RothCInitSoil.vue'
import RothCPresCMVue from '@/components/ConfigurationsRothC/RothCPresCM.vue'
import RothCOpenPanEvapVue from '@/components/ConfigurationsRothC/RothCOpenPanEvap.vue'
import RothCRainfallVue from '@/components/ConfigurationsRothC/RothCRainfall.vue'

import { ref } from 'vue'
import { markRaw } from 'vue'
import { RightOutlined } from '@ant-design/icons-vue'
import { useStore } from 'vuex'

export default {
  components: {
    RothCTemplate,
    Datepicker,
    RightOutlined,
    RothCOutputContainer,
    Button
  },

  setup() {
    const showTable = ref(false)
    const clickedRun = ref(false)

    const store = useStore()

    const configurations = ref({
      rainfall: {
        component: markRaw(RothCRainfallVue),
        type: 'rainfall',
        text: 'Rainfall'
      },
      openPanEvap: {
        component: markRaw(RothCOpenPanEvapVue),
        type: 'openPanEvap',
        text: 'Open Pan Evaporation'
      },
      avgAirTemp: {
        component: markRaw(RothCAvgAirTempVue),
        type: 'avgAirTemp',
        text: 'Average Air Temperature'
      },
      presCM: {
        component: markRaw(RothCPresCMVue),
        type: 'presCM',
        text: 'Organic carbon inputs'
      },
      soilCover: {
        component: markRaw(RothCSoilCoverVue),
        type: 'soilCover',
        text: 'Soil Cover'
      },
      initSoil: {
        component: markRaw(RothCInitSoilVue),
        type: 'initSoil',
        text: 'Initial conditions of the Soil'
      },
      soil: {
        component: markRaw(RothCSoilVue),
        type: 'soil',
        text: 'Soil characteristics'
      }
    })

    function apiRoute_rothc() {
      // sending the new rothc config
      console.log('ROTHC route invoked with new configs')
      store.dispatch('send_rothcConfig', { root: true })
      clickedRun.value = true
    }

    function showRothCOutputContainer() {
      store.dispatch('parse_RothC_results')
      showTable.value = true
    }

    function hideRothCOutputContainer() {
      showTable.value = false
    }

    return {
      showTable,
      clickedRun,
      configurations,
      apiRoute_rothc,
      showRothCOutputContainer,
      hideRothCOutputContainer
    }
  }
}
</script>
<style>
.rothcAccordion .ant-collapse-header {
  font-size: 18px;
  color: theme('colors.earth') !important;
}
</style>
