<template>
  <div class="text-earth">
    <div class="flex flex-col">
      <span class="text-xl mb-2">Start and End date of simulation</span>
      <a-typography-text class="mb-4">
        <span class="text-earth"> Configure the Start and End dates of the simulation </span>
      </a-typography-text>
    </div>

    <div class="flex w-full lg:w-2/3 gap-4 md:gap-10">
      <div class="w-12/12 md:w-10/12">
        <button class="text-gray text-base">Start Date</button><br />
        <a-date-picker
          v-model:value="selectedStartDate"
          class="w-full"
          :size="size"
          :format="dateFormatList"
          v-bind="$attrs"
          @change="onStartChange"
          :disabledDate="(date) => date > selectedEndDate"
        />
      </div>

      <div class="w-12/12 md:w-10/12">
        <button class="text-gray text-base">End Date</button><br />
        <a-date-picker
          v-model:value="selectedEndDate"
          class="w-full"
          :size="size"
          :format="dateFormatList"
          v-bind="$attrs"
          @change="onEndChange"
          :disabledDate="(date) => date < selectedStartDate"
        />
      </div>
    </div>
    <h3 class="mt-4 py-4 text-xl font-medium mb-2 text-gray-600 justify-center">
      Simulation length is
      <span class="text-persiangreen">{{ date_diff > -0.01 ? date_diff.toFixed(2) + ' years' : 'invalid' }}</span>
    </h3>
  </div>
</template>

<script>
// import dayjs from 'dayjs'
import dayjs from 'dayjs'
import { computed, ref, watchEffect } from 'vue'

export default {
  name: 'DatepickerGCBM',
  emits: ['startDateChange', 'endDateChange'],
  props: {
    start_date: {
      type: String,
      default: '2020-01-01'
    },
    end_date: {
      type: String,
      default: '2020-12-31'
    }
  },
  setup(props, { emit }) {
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY']

    const startDate = ref(props.start_date)
    const endDate = ref(props.end_date)

    const selectedStartDate = ref(dayjs(startDate.value))
    const selectedEndDate = ref(dayjs(endDate.value))

    console.log(props.start_date, props.end_date)

    watchEffect(() => {
      selectedStartDate.value = dayjs(props.start_date)
      selectedEndDate.value = dayjs(props.end_date)
    })

    const date_diff = computed(() => {
      // difference in years
      const diff = selectedEndDate.value.diff(selectedStartDate.value) / (1000 * 60 * 60 * 24 * 365)
      return diff
    })

    const onStartChange = (val) => {
      emit('startDateChange', val)
    }

    const onEndChange = (val) => {
      emit('endDateChange', val)
    }

    return {
      size: 'large',
      date_diff,
      dateFormatList,
      selectedEndDate,
      selectedStartDate,
      onStartChange,
      onEndChange
    }
  }
}
</script>

<style scoped>
:deep(.ant-picker-input > input) {
  border-color: theme('colors.earth');
  color: theme('colors.earth') !important;
}
</style>
