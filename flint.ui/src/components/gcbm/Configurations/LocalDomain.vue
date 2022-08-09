<template>
  <div class="py-4 px-8 text-earth">
    <a-typography-title :level="2"><span class="font-normal text-earth"> Local Domain </span></a-typography-title>
    <DatepickerGCBM
      class="mt-4"
      :start_date="start_date.format('YYYY-MM-DD')"
      :end_date="end_date.format('YYYY-MM-DD')"
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
import dayjs from 'dayjs'

import DatepickerGCBM from '@/components/Datepicker/DatepickerGCBM.vue'

export default {
  name: 'LocalDomain',
  components: { DatepickerGCBM },
  setup() {
    const store = useStore()

    const num_of_threads = ref(store.state.gcbm.config.localdomain.LocalDomain.landscape.num_threads)

    watchEffect(() => {
      store.commit('setGCBMLocalDomainState', { key: 'THREADS', newState: num_of_threads.value })
    })

    const start_date = dayjs(store.state.gcbm.config.localdomain.LocalDomain.start_date)
    const end_date = dayjs(store.state.gcbm.config.localdomain.LocalDomain.end_date)

    function onStartDateChange(date) {
      store.commit('setGCBMLocalDomainState', { key: 'START_DATE', newState: date.format('YYYY/MM/DD') })
    }

    function onEndDateChange(date) {
      store.commit('setGCBMLocalDomainState', { key: 'END_DATE', newState: date.format('YYYY/MM/DD') })
    }

    return {
      start_date,
      end_date,
      num_of_threads,
      onStartDateChange,
      onEndDateChange
    }
  }
}
</script>
