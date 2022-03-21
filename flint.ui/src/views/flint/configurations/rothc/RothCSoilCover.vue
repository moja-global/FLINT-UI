<template>
  <div class="relative bg-gradient-to-r from-green-400 to-blue-500 md:pt-32 pt-12 w-full">
    <div class="mx-auto w-full">
      <div>
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h2 class="text-2xl font-bold mb-2 text-gray-800">RothC example simulation configuration</h2>
          <p class="text-gray-700">
            Input the custom values in the fields below. Default values as placeholder text will be used if none
            provided.
          </p>
        </div>

        <div class="flex flex-wrap mt-10">
          <div class="w-full px-4 content-center rounded-md m-12 mb-5">
            <h1 class="flex-auto text-xl font-semibold">soilCover - data_orig</h1>
            <textarea
              v-model="newconfig_soilcover_data_orig"
              class="form-textarea mt-1 block w-full"
              rows="5"
              placeholder=""
            >
            </textarea>
          </div>

          <div class="w-full px-4 content-center rounded-md m-12 mb-5">
            <h1 class="flex-auto text-xl font-semibold">soilCover - data_firstmonthcopy</h1>
            <textarea
              v-model="newconfig_soilcover_data_firstmonthcopy"
              class="form-textarea mt-1 block w-full"
              rows="5"
              placeholder=""
            >
            </textarea>
          </div>

          <div class="w-full px-4 content-center rounded-md m-12 mb-5">
            <h1 class="flex-auto text-xl font-semibold">soilCover - data_month_avg</h1>
            <textarea
              v-model="newconfig_soilcover_data_month_avg"
              class="form-textarea mt-1 block w-full"
              rows="5"
              placeholder=""
            >
            </textarea>
          </div>

          <div class="w-full px-4 content-center rounded-md m-12 mb-5">
            <h1 class="flex-auto text-xl font-semibold">soilCover - data_lastyearcopy</h1>
            <textarea
              v-model="newconfig_soilcover_data_lastyearcopy"
              class="form-textarea mt-1 block w-full"
              rows="5"
              placeholder=""
            >
            </textarea>
          </div>
        </div>
      </div>
    </div>

    <Stepper />
  </div>
</template>

<script>
import Stepper from '@/components/Stepper/StepperRothc.vue'
import formatData from '@/mixins/formatData'

export default {
  components: {
    Stepper
  },
  mixins: [formatData],
  computed: {
    newconfig_soilcover_data_orig: {
      get() {
        return this.formatArray(this.$store.state.rothc.config.Variables[12].soilCover.transform.data_orig)
      },
      set(newValue) {
        this.$store.commit('setNewConfig_soilCover_data_orig', '$#[ ' + newValue + ' ]$#')
      }
    },

    newconfig_soilcover_data_firstmonthcopy: {
      get() {
        return this.formatArray(this.$store.state.rothc.config.Variables[12].soilCover.transform.data_firstmonthcopy)
      },
      set(newValue) {
        this.$store.commit('setNewConfig_soilCover_data_firstmonthcopy', '$#[ ' + newValue + ' ]$#')
      }
    },

    newconfig_soilcover_data_month_avg: {
      get() {
        return this.formatArray(this.$store.state.rothc.config.Variables[12].soilCover.transform.data_month_avg)
      },
      set(newValue) {
        this.$store.commit('setNewConfig_soilCover_data_month_avg', '$#[ ' + newValue + ' ]$#')
      }
    },

    newconfig_soilcover_data_lastyearcopy: {
      get() {
        return this.formatArray(this.$store.state.rothc.config.Variables[12].soilCover.transform.data_lastyearcopy)
      },
      set(newValue) {
        this.$store.commit('setNewConfig_soilCover_data_lastyearcopy', '$#[ ' + newValue + ' ]$#')
      }
    }
  }
}
</script>
