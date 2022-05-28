<template>
  <div>
    <div class="mb-10 mx-5 md:justify-center">
      <LandingPageNavbar />
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
                <div class="text-2xl font-normal text-gray"><Datepicker size="small" /></div>
              </div>
            </div>
          </div>
        </div>

        <h2 class="mt-7 py-4 text-2xl text-gray-800">Configure Parameters</h2>
        <!-- Will update this once all the changes are made -->
        <div class="flex flex-wrap mt-5">
          <Accordion config-paramtype="rainfall" />

          <RothCTemplate config-paramtype="openPanEvap" config-paramtext="Open Pan Evaporation" />

          <RothCTemplate config-paramtype="avgAirTemp" config-paramtext="Average Air Temperature" />

          <RothCTemplate config-paramtype="presCM" config-paramtext="Organic carbon inputs" />

          <RothCTemplate config-paramtype="soilCover" config-paramtext="Soil Cover" />

          <RothCTemplate config-paramtype="initSoil" config-paramtext="Initial conditions of the Soil" />

          <RothCTemplate config-paramtype="soil" config-paramtext="Soil characteristics" />
        </div>
        <div class="my-16 flex gap-8 items-center">
          <div data-v-step="5"><Button @click.native="apiRoute_rothc">Run</Button></div>
          <div v-show="clickedRun" data-v-step="6">
            <Button :btn-size="'auto'" @click.native="showRothCOuterTable">Show Output</Button>
          </div>
        </div>
        <RothCOuterTable v-if="showTable" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import RothCTemplate from '@/views/flint/RothCTemplate.vue'
import Datepicker from '@/components/Datepicker/DatepickerRothC.vue'
import LandingPageNavbar from '../../components/Navbars/LandingPageNavbar.vue'
import Accordion from '../../components/Accordion/Accordion.vue'
import Button from '@/components/Button/Button.vue'
import Footer from '@/components/Footer/Footer.vue'
import RothCOuterTable from './RothCOuterTable.vue'

export default {
  components: {
    RothCTemplate,
    Datepicker,
    LandingPageNavbar,
    RothCOuterTable,
    Accordion,
    Button,
    Footer
  },
  data: function () {
    return {
      showTable: false,
      clickedRun: false
    }
  },
  methods: {
    apiRoute_rothc() {
      // sending the new rothc config
      console.log('ROTHC route invoked with new configs')
      this.$store.dispatch('send_rothcConfig', { root: true })
      this.clickedRun = true
    },

    showRothCOuterTable() {
      this.$store.dispatch('parse_RothC_results')
      this.showTable = true
    }
  }
}
</script>
