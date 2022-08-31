<template>
  <div class="py-4 px-8 text-earth">
    <a-typography-title :level="2"><span class="font-normal text-earth"> Local Domain </span></a-typography-title>
    <DatepickerGCBM
      class="mt-4"
      :start_date="start_date_ref"
      :end_date="end_date_ref"
      @startDateChange="onStartDateChange"
      @endDateChange="onEndDateChange"
    />
    <div class="flex">
      <span class="text-xl mr-2">Number of Threads:</span>
      <a-input-number v-model:value="num_of_threads" min="1" max="10" step="1" style="width: 100px" />
    </div>
    <span class="text-earth">
      Configure the number of threads the module is using. Match the number of cores on your computer.
      <br />
      Maximum Value: 10
    </span>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue'
import { useStore } from 'vuex'

import DatepickerGCBM from '@/components/Datepicker/DatepickerGCBM.vue'
import { cloneDeep } from 'lodash'

export default {
  name: 'LocalDomain',
  components: { DatepickerGCBM },
  setup() {
    const store = useStore()

    const num_of_threads = ref(store.state.gcbm.config.localdomain.LocalDomain.landscape.num_threads)

    const start_date_ref = ref(store.state.gcbm.config.localdomain.LocalDomain.start_date)
    const end_date_ref = ref(store.state.gcbm.config.localdomain.LocalDomain.end_date)

    watchEffect(() => {
      store.commit('setGCBMLocalDomainState', { key: 'THREADS', newState: num_of_threads.value })
    })

    store.subscribe((mutation) => {
      if (mutation.type === 'setWholeGCBMLocalDomainState') {
        const newState = cloneDeep(mutation.payload.newState)
        num_of_threads.value = newState.LocalDomain.landscape.num_threads
        start_date_ref.value = newState.LocalDomain.start_date
        end_date_ref.value = newState.LocalDomain.end_date
      }
    })

    function onStartDateChange(date) {
      store.commit('setGCBMLocalDomainState', { key: 'START_DATE', newState: date.format('YYYY/MM/DD') })
    }

    function onEndDateChange(date) {
      store.commit('setGCBMLocalDomainState', { key: 'END_DATE', newState: date.format('YYYY/MM/DD') })
    }

    return {
      start_date_ref,
      end_date_ref,
      num_of_threads,
      onStartDateChange,
      onEndDateChange
    }
  }
}
</script>
