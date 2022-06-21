<template>
  <div class="flex flex-wrap">
    <div class="w-full content-center rounded-md">
      <h1 class="flex-auto text-base text-earth font-normal">rainfall - data_orig</h1>
      <textarea
        v-model="newconfig_rainfall_data_orig"
        class="form-textarea rounded-md mt-1 block w-full"
        rows="5"
        placeholder=""
      >
      </textarea>
    </div>

    <div class="w-full content-center rounded-md">
      <h1 class="flex-auto text-base text-earth font-normal mt-5">rainfall - data_month_avg</h1>
      <textarea
        v-model="newconfig_rainfall_data_month_avg"
        class="form-textarea rounded-md mt-1 block w-full"
        rows="5"
        placeholder=""
      >
      </textarea>
    </div>

    <div class="w-full content-center rounded-md">
      <h1 class="flex-auto text-base text-earth font-normal mt-5">rainfall - data_lastyearcopy</h1>
      <textarea
        v-model="newconfig_rainfall_data_lastyearcopy"
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

    const newconfig_rainfall_data_orig = computed({
      get() {
        return formatArray(store.state.rothc.config.Variables[8].rainfall.transform.data_orig)
      },
      set(newValue) {
        store.commit('setNewConfig_rainfall_data_orig', '$#[ ' + newValue + ' ]$#')
      }
    })

    const newconfig_rainfall_data_month_avg = computed({
      get() {
        return formatArray(store.state.rothc.config.Variables[8].rainfall.transform.data_month_avg)
      },
      set(newValue) {
        store.commit('setNewConfig_rainfall_data_month_avg', '$#[ ' + newValue + ' ]$#')
      }
    })

    const newconfig_rainfall_data_lastyearcopy = computed({
      get() {
        return formatArray(store.state.rothc.config.Variables[8].rainfall.transform.data_lastyearcopy)
      },
      set(newValue) {
        store.commit('setNewConfig_rainfall_data_lastyearcopy', '$#[ ' + newValue + ' ]$#')
      }
    })

    return {
      formatArray,
      newconfig_rainfall_data_orig,
      newconfig_rainfall_data_month_avg,
      newconfig_rainfall_data_lastyearcopy
    }
  }
}
</script>
