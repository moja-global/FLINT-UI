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
          v-model="startDateInput"
          class="w-full"
          :size="size"
          :format="dateFormatList"
          :value="selectedStartDate"
          :default-value="selectedStartDate"
          v-bind="$attrs"
          @change="onStartChange"
        />
      </div>

      <div class="w-12/12 md:w-10/12">
        <button class="text-gray text-base">End Date</button><br />
        <a-date-picker
          v-model="endDateInput"
          class="w-full"
          :size="size"
          :format="dateFormatList"
          :value="selectedEndDate"
          :default-value="selectedEndDate"
          v-bind="$attrs"
          @change="onEndChange"
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
import dayjs from 'dayjs'

export default {
  props: {
    value: { type: dayjs.Dayjs, default: dayjs('2022-01-01') }
  },
  setup() {
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY']
    return {
      size: 'large',
      dateFormatList
    }
  },
  data() {
    return { selectedStartDate: this.value, selectedEndDate: this.value }
  },
  computed: {
    date_diff() {
      var start_date_value = new Date(dayjs(this.selectedStartDate).format('YYYY-MM-DD'))

      var end_date_value = new Date(dayjs(this.selectedEndDate).format('YYYY-MM-DD'))

      console.log(start_date_value, end_date_value)

      // difference in years
      var diff = (Date.parse(end_date_value) - Date.parse(start_date_value)) / (1000 * 60 * 60 * 24 * 365)
      return diff
    },
    startDateInput: {
      get() {
        return this.selectedStartDate
      },
      set(val) {
        this.$emit('input', dayjs(val).toString())
        this.selectedStartDate = val
        console.log(this.selectedStartDate)

        if (this.date_diff < 0) {
          this.$toast.error('Start date should be less than end date', {
            timeout: 5000
          })
        }
      }
    },

    endDateInput: {
      get() {
        return this.selectedEndDate
      },
      set(val) {
        this.$emit('input', dayjs(val).toString())
        this.selectedEndDate = val
        console.log(this.selectedEndDate)

        if (this.date_diff < 0) {
          this.$toast.error('End date should be greater than start date', {
            timeout: 5000
          })
        }
      }
    }
  },
  methods: {
    onStartChange(val) {
      this.selectedStartDate = val
    },
    onEndChange(val) {
      this.selectedEndDate = val
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
