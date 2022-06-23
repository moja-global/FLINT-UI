<template>
  <div class="py-4 px-8 text-earth">
    <a-typography-title><span class="font-normal text-earth"> Local Domain </span></a-typography-title>
    <DatepickerGCBM class="mt-4" />
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
import { ref } from 'vue'
import DatepickerGCBM from '@/components/Datepicker/DatepickerGCBM.vue'
export default {
  name: 'LocalDomain',
  components: { DatepickerGCBM },
  setup() {
    const num_of_threads = ref(10)

    return {
      num_of_threads
    }
  }
}
</script>
