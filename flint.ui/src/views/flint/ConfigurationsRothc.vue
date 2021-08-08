<template>
  <div
    class="relative bg-gradient-to-r from-green-400 to-blue-500 md:pt-32 pt-12 w-full"
  >
    <div class="px-4 md:px-10 mx-auto w-full">
      <div>
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h2 class="text-2xl font-bold mb-2 text-gray-800">
            RothC example simulation configuration
          </h2>
          <p>
            Was the simulation conducted at a specific place ? Click
            <span>here</span> to save latitude and longitude co-ordinates
          </p>
          <p class="text-gray-700">
            Input the custom values in the fields below. Default values as
            placeholder text will be used if none provided.
          </p>
        </div>
        <div class="flex flex-wrap mt-10">
          <RothCTemplate config-paramtype="rainfall" />

          <RothCTemplate config-paramtype="openPanEvap" />

          <RothCTemplate config-paramtype="avgAirTemp" />

          <RothCTemplate config-paramtype="presCM" />

          <RothCTemplate config-paramtype="soilCover" />

          <RothCTemplate config-paramtype="initSoil" />

          <RothCTemplate config-paramtype="soil" />
        </div>
      </div>
    </div>

    <Stepper />
  </div>
</template>

<script>
import RothCTemplate from '@/views/flint/RothCTemplate.vue'
import Stepper from '@/components/Stepper/StepperRothc.vue'

export default {
  components: {
    RothCTemplate,
    Stepper
  }
}
</script>
