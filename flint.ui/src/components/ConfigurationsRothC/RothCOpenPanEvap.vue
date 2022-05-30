<template>
  <div class="flex flex-wrap">
    <div class="w-full content-center rounded-md">
      <h1 class="flex-auto text-base text-earth font-normal">openPanEvap - data_orig</h1>
      <textarea
        v-model="newconfig_openPanEvap_data_orig"
        class="form-textarea rounded-md mt-1 block w-full"
        rows="5"
        placeholder=""
      >
      </textarea>
    </div>

    <div class="w-full content-center rounded-md mt-3">
      <h1 class="flex-auto text-base text-earth font-normal">openPanEvap - data_month_avg</h1>
      <textarea
        v-model="newconfig_openPanEvap_data_month_avg"
        class="form-textarea rounded-md mt-1 block w-full"
        rows="5"
        placeholder=""
      >
      </textarea>
    </div>

    <div class="w-full content-center rounded-md mt-3">
      <h1 class="flex-auto text-base text-earth font-normal">openPanEvap - data_lastyearcopy</h1>
      <textarea
        v-model="newconfig_openPanEvap_data_lastyearcopy"
        class="form-textarea rounded-md mt-1 block w-full"
        rows="5"
        placeholder=""
      >
      </textarea>
    </div>
  </div>
</template>

<script>
import formatData from '@/mixins/formatData'

export default {
  mixins: [formatData],
  computed: {
    newconfig_openPanEvap_data_orig: {
      get() {
        return this.formatArray(this.$store.state.rothc.config.Variables[9].openPanEvap.transform.data_orig)
      },
      set(newValue) {
        this.$store.commit('setNewConfig_openPanEvap_data_orig', '$#[ ' + newValue + ' ]$#')
      }
    },

    newconfig_openPanEvap_data_month_avg: {
      get() {
        return this.formatArray(this.$store.state.rothc.config.Variables[9].openPanEvap.transform.data_month_avg)
      },
      set(newValue) {
        this.$store.commit('setNewConfig_openPanEvap_data_month_avg', '$#[ ' + newValue + ' ]$#')
      }
    },

    newconfig_openPanEvap_data_lastyearcopy: {
      get() {
        return this.formatArray(this.$store.state.rothc.config.Variables[9].openPanEvap.transform.data_lastyearcopy)
      },
      set(newValue) {
        this.$store.commit('setNewConfig_openPanEvap_data_lastyearcopy', '$#[ ' + newValue + ' ]$#')
      }
    }
  }
}
</script>
