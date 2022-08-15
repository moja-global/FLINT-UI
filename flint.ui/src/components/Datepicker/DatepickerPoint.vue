<template>
  <div>
    <div class="flex w-full">
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
    <h3 class="mt-14 py-4 text-xl font-medium mb-2 text-gray-600 justify-center">
      Simulation length is
      <span class="text-persiangreen">{{ date_diff >= 0.0 ? date_diff.toFixed(2) + ' years' : 'invalid' }}</span>
    </h3>
  </div>
</template>
<script>
import dayjs from 'dayjs'
import { ref, computed } from 'vue'
import { notification } from 'ant-design-vue'
import { DatePickerComponent } from '@moja-global/mojaglobal-ui'
export default {
  components: {
    DatePickerComponent
  },
  props: {
    value: { type: dayjs.Dayjs, default: dayjs('2022-01-01') }
  },
  setup(props, { emit }) {
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY']
    const selectedStartDate = ref(props.value)
    const selectedEndDate = ref(props.value)
    const date_diff = computed(() => {
      var start_date_value = new Date(dayjs(selectedStartDate.value).format('YYYY-MM-DD'))
      var end_date_value = new Date(dayjs(selectedEndDate.value).format('YYYY-MM-DD'))
      console.log(start_date_value, end_date_value)
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
        console.log(selectedStartDate.value)
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
        console.log(selectedEndDate.value)
        if (date_diff.value < 0) {
          notification.error({
            message: 'End date should be greater than start date.',
            duration: 5
          })
        }
      }
    })
    function onStartChange(val) {
      selectedStartDate.value = val
      var arr = val.split('/')
      startDateInput.value = new Date(arr[2], arr[1], arr[0])
    }
    function styles() {
      return { maxWidth: '250px' }
    }
    function onEndChange(val) {
      selectedEndDate.value = val
      var arr = val.split('/')
      endDateInput.value = new Date(arr[2], arr[1], arr[0])
    }
    return {
      size: 'large',
      dateFormatList,
      selectedStartDate,
      selectedEndDate,
      date_diff,
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
:deep(.ant-calendar-picker-input.ant-input) {
  border-color: theme('colors.earth');
}

:deep(.ant-calendar-picker-icon) {
  color: theme('colors.earth');
}

@media only screen and (max-width: 768px) {
  .flex {
    display: flex;
    flex-direction: column;
  }
}
</style>

configureWebpack: config => { ... config.externals = { vue: 'Vue' } ... }
