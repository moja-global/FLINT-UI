<template>
  <div>
    <div class="mb-10 mx-5 w-full md:justify-center">
      <LandingPageNavbar />
      <div class="md:px-10 ml-10 w-full md:justify-center">
        <div>
          <h2 class="mb mt-7 py-4 text-2xl text-earth">RothC example simulation configuration</h2>
          <p class="text-earth sm:text-base">
            Was the simulation conducted at a specific place ? Click
            <span>here</span> to save latitude and longitude co-ordinates
          </p>
          <p class="md:px-24 text-earth text-base">
            Input the custom values in the fields below. Default values as placeholder text will be used if none
            provided.
          </p>
        </div>

        <div class="mt-10">
          <div>
            <div class="py-6 mb-3">
              <h2 class="text-xl font-normal md:px-24 text-earth text-base">Start and End date of simulation</h2>
              <div>
                <div class="md:px-24 text-2xl font-normal text-gray"><Datepicker size="small" /></div>
              </div>
            </div>
          </div>
        </div>

        <h2 class="mt-7 py-4 text-2xl text-gray-800">Configure Parameters</h2>
        <!-- Will update this once all the changes are made -->
        <div class="flex flex-wrap mt-5">
          <Accordion config-paramtype="rainfall" />

          <RothCTemplate config-paramtype="openPanEvap" />

          <RothCTemplate config-paramtype="avgAirTemp" />

          <RothCTemplate config-paramtype="presCM" />

          <RothCTemplate config-paramtype="soilCover" />

          <RothCTemplate config-paramtype="initSoil" />

          <RothCTemplate config-paramtype="soil" />
        </div>
        <div class="mt-4 mb-5">
          <Button :btn-size="'auto'" @click.native="apiRoute_rothc">Run</Button>
        </div>
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

export default {
  components: {
    RothCTemplate,
    Datepicker,
    LandingPageNavbar,
    Accordion,
    Button,
    Footer
  },
  methods: {
    apiRoute_rothc() {
      // sending the new rothc config
      console.log('ROTHC route invoked with new configs')
      this.$store.dispatch('send_rothcConfig', { root: true })
    }
  }
}
</script>
