<template>
  <div class="flex flex-wrap">
    <div class="w-full content-center rounded-md">
      <h1 class="flex-auto text-base text-earth font-normal">avgAirTemp - data_orig</h1>
      <textarea
        v-model="newconfig_avgAirTemp_data_orig"
        class="form-textarea rounded-md mt-1 block w-full"
        rows="5"
        placeholder=""
      >
      </textarea>
    </div>

    <div class="w-full content-center rounded-md mt-3">
      <h1 class="flex-auto text-base text-earth font-normal">avgAirTemp - data_month_avg</h1>
      <textarea
        v-model="newconfig_avgAirTemp_data_month_avg"
        class="form-textarea rounded-md mt-1 block w-full"
        rows="5"
        placeholder=""
      >
      </textarea>
    </div>

    <div class="w-full content-center rounded-md mt-3">
      <h1 class="flex-auto text-base text-earth font-normal">avgAirTemp - data_lastyearcopy</h1>
      <textarea
        v-model="newconfig_avgAirTemp_data_lastyearcopy"
        class="form-textarea rounded-md mt-1 block w-full"
        rows="5"
        placeholder=""
      >
      </textarea>
    </div>
  </div>
</template>

<script>
import useformatData from '../../utils/useformatData'
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const { formatArray } = useformatData()
    const store = useStore()

    const newconfig_avgAirTemp_data_orig = computed({
      get() {
        return formatArray(store.state.rothc.config.Variables[10].avgAirTemp.transform.data_orig)
      },
      set(newValue) {
        store.commit('setNewConfig_avgAirTemp_data_orig', '$#[ ' + newValue + ' ]$#')
      }
    })

    const newconfig_avgAirTemp_data_month_avg = computed({
      get() {
        return formatArray(store.state.rothc.config.Variables[10].avgAirTemp.transform.data_month_avg)
      },
      set(newValue) {
        store.commit('setNewConfig_avgAirTemp_data_month_avg', '$#[ ' + newValue + ' ]$#')
      }
    })

    const newconfig_avgAirTemp_data_lastyearcopy = computed({
      get() {
        return formatArray(store.state.rothc.config.Variables[10].avgAirTemp.transform.data_lastyearcopy)
      },
      set(newValue) {
        store.commit('setNewConfig_avgAirTemp_data_lastyearcopy', '$#[ ' + newValue + ' ]$#')
      }
    })

    return {
      formatArray,
      newconfig_avgAirTemp_data_month_avg,
      newconfig_avgAirTemp_data_lastyearcopy,
      newconfig_avgAirTemp_data_orig
    }
  }
}
</script>
