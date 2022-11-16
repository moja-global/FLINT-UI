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
        <div :style="styles()">
          <DatePickerComponent
            @changeDate="onStartChange"
            startYear="1924"
            endYear="2022"
            placeholder="Select the date"
          />
        </div>
      </div>

      <div class="w-12/12 md:w-10/12">
        <button class="text-gray text-base">End Date</button><br />
        <div :style="styles()">
          <DatePickerComponent
            @changeDate="onEndChange"
            startYear="1924"
            endYear="2022"
            placeholder="Select the date"
          />
        </div>
      </div>
    </div>
    <h3 class="mt-4 py-4 text-xl font-medium mb-2 text-gray-600 justify-center">
      Simulation length is
      <span class="text-persiangreen">{{ date_diff >= 0.0 ? date_diff.toFixed(2) + ' years' : 'invalid' }}</span>
    </h3>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import { computed, ref, watchEffect } from 'vue'
import { DatePickerComponent } from '@moja-global/mojaglobal-ui'
import { notification } from 'ant-design-vue'

export default {
  components: {
    DatePickerComponent
  },
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
      var start_date_value = new Date(dayjs(selectedStartDate.value).format('YYYY/MM/DD'))
      var end_date_value = new Date(dayjs(selectedEndDate.value).format('YYYY/MM/DD'))
      // difference in years
      var diff = (Date.parse(end_date_value) - Date.parse(start_date_value)) / (1000 * 60 * 60 * 24 * 365)
      return diff
    })

    const startDateInput = computed({
      get: () => {
        return selectedStartDate.value
      },
      set: (val) => {
        emit('input', dayjs(val).toString())
        selectedStartDate.value = val
        if (date_diff.value < 0) {
          notification.error({
            message: 'Start date should be lesser than end date',
            duration: 5
          })
        }
      }
    })

    const endDateInput = computed({
      get: () => {
        return selectedEndDate.value
      },
      set: (val) => {
        emit('input', dayjs(val).toString())
        selectedEndDate.value = val
        if (date_diff.value < 0) {
          notification.error({
            message: 'End date should be greater than start date',
            duration: 5
          })
        }
      }
    })

    const onStartChange = (val) => {
      emit('startDateChange', val)
    }

    const onEndChange = (val) => {
      emit('endDateChange', val)
    }

    function styles() {
      return { maxWidth: '250px' }
    }

    return {
      size: 'large',
      date_diff,
      dateFormatList,
      selectedEndDate,
      selectedStartDate,
      startDateInput,
      endDateInput,
      onStartChange,
      onEndChange,
      styles
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
