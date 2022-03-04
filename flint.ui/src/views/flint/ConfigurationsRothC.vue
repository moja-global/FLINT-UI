<template>
  <div class="md:pt-32 w-full md:justify-center">
    <div class="mx-3 w-full md:justify-center">
      <LandingPageNavbar />
      <div>
        <div>
          <h2 class="mt-7 py-4 text-2xl font text-gray-800">RothC example simulation configuration</h2>
          <p>
            Was the simulation conducted at a specific place ? Click
            <span>here</span> to save latitude and longitude co-ordinates
          </p>
          <p class="text-gray-700">
            Input the custom values in the fields below. Default values as placeholder text will be used if none
            provided.
          </p>
        </div>

        <div class="mt-6">
          <div>
            <div class="p-6 mb-3">
              <h2 class="px-3 text-2xl font-bold mb-2 text-gray-800">Start and End date of simulation</h2>
              <div>
                <Datepicker size="small" />
              </div>
            </div>
          </div>
        </div>

        <h2 class="mt-7 py-4 text-2xl font text-gray-800">Configure Parameters</h2>
        <div class="flex flex-wrap mt-5">
          <Accordion config-paramtype="rainfall" />

          <RothCTemplate config-paramtype="openPanEvap" />

          <RothCTemplate config-paramtype="avgAirTemp" />

          <RothCTemplate config-paramtype="presCM" />

          <RothCTemplate config-paramtype="soilCover" />

          <RothCTemplate config-paramtype="initSoil" />

          <RothCTemplate config-paramtype="soil" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RothCTemplate from '@/views/flint/RothCTemplate.vue'
import Datepicker from '@/components/Datepicker/DatepickerRothC.vue'
import LandingPageNavbar from '../../components/Navbars/LandingPageNavbar.vue'
import Accordion from '../../components/Accordion/Accordion.vue'

export default {
  components: {
    RothCTemplate,
    Datepicker,
    LandingPageNavbar,
    Accordion
  }
}
</script>
