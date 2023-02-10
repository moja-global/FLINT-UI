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

        <AccordionComponent width="80vw" :centerItem="true" classname="rothcAccordion">
          <AccordionItem
            label="label_primary"
            content="content_primary"
            headingColor="white"
            bgContent="#f7f5f7"
            v-for="(item, index) in configurations"
            :key="index"
            :heading="`${item.text} (${item.type})`"
            ><br />
            <component :is="item.component" />
            <br />
          </AccordionItem>
        </AccordionComponent>

        <div class="my-16 flex gap-8 items-center">
          <div data-v-step="5">
            <ButtonComponent
              classname="primarywh"
              BackgroundColor="#ffffff"
              Color="#475447"
              Padding="0.4rem 1.3rem"
              MinWidth="100px"
              FontSize="15px"
              @click="apiRoute_rothc"
              >Run</ButtonComponent
            >
          </div>
          <div v-show="clickedRun" data-v-step="6">
            <ButtonComponent
              classname="primarywh"
              BackgroundColor="#ffffff"
              Color="#475447"
              Padding="0.4rem 1.3rem"
              MinWidth="100px"
              FontSize="15px"
              @click="showTable ? hideRothCOutputContainer() : showRothCOutputContainer()"
            >
              {{ showTable ? 'Hide' : 'Show' }} Output</ButtonComponent
            >
          </div>
        </div>
        <RothCOutputContainer v-if="showTable" />
        <ToastComponent />
      </div>
    </div>
  </div>
</template>

<script>
import RothCTemplate from '@/views/flint/RothCTemplate.vue'
import Datepicker from '@/components/Datepicker/DatepickerRothC.vue'
import { ButtonComponent } from '@moja-global/mojaglobal-ui'
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
import { AccordionComponent } from '@moja-global/mojaglobal-ui'
import { AccordionItem } from '@moja-global/mojaglobal-ui'
import { ToastComponent } from '@moja-global/mojaglobal-ui'
import { useToast } from '@moja-global/mojaglobal-ui'

export default {
  components: {
    RothCTemplate,
    Datepicker,
    RightOutlined,
    RothCOutputContainer,
    ButtonComponent,
    AccordionComponent,
    AccordionItem,
    ToastComponent
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

    if (store.state.rothc.firstRun === true) {
      // Then return early. This also makes sure that user doesn't get
      // `Modal.confirm` prompt if it's the first time.
      store.commit('setRunStatus', false)
    }

    function apiRoute_rothc() {
      // sending the new rothc config
      console.log('ROTHC route invoked with new configs')
      store.dispatch('send_rothcConfig', { root: true })
      clickedRun.value = true
    }

    function showRothCOutputContainer() {
      let firstRun = store.state.rothc.firstRun
      if (firstRun === true) {
        useToast({
          type: 'error',
          title: 'Simulation error',
          message: 'Simulation produced no result',
          description: 'Did you forget to run the simulation first?',
          time: 5000
        })
        return
      }
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

<style></style>
