<template>
  <div>
    <div class="flex w-full">
      <div class="w-12/12 md:w-10/12">
        <button class="text-gray text-base">Start Date</button><br />
        <a-date-picker
          v-model="startDateInput"
          :size="size"
          :format="dateFormatList"
          :value="selectedStartDate"
          :default-value="selectedStartDate"
          v-bind="$attrs"
          @change="onStartChange"
          v-on="$listeners"
        />
      </div>

      <div class="w-12/12 md:w-10/12">
        <button class="text-gray text-base">End Date</button><br />
        <a-date-picker
          v-model="endDateInput"
          :size="size"
          :format="dateFormatList"
          :value="selectedEndDate"
          :default-value="selectedEndDate"
          v-bind="$attrs"
          @change="onEndChange"
          v-on="$listeners"
        />
      </div>
    </div>
    <h3 class="mt-14 py-4 text-xl font-medium mb-2 text-gray-600 justify-center">
      Simulation length is
      <span class="text-persiangreen">{{ date_diff > -0.01 ? date_diff.toFixed(2) + ' years' : 'invalid' }}</span>
    </h3>
  </div>
</template>

<script>
import { DatePicker } from 'ant-design-vue'
import moment from 'moment'

export default {
  components: {
    'a-date-picker': DatePicker
  },
  props: {
    value: { type: String, default: moment('2022-01-01').toString() }
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
      var start_date_value = new Date(moment(this.selectedStartDate).format('YYYY-MM-DD'))

      var end_date_value = new Date(moment(this.selectedEndDate).format('YYYY-MM-DD'))

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
        this.$emit('input', moment(val).toString())
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
        this.$emit('input', moment(val).toString())
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
::v-deep .ant-calendar-picker-input.ant-input {
  border-color: theme('colors.earth');
}
::v-deep .ant-calendar-picker-icon {
  color: theme('colors.earth');
}

@media only screen and (max-width: 768px) {
  .flex {
    display: flex;
    flex-direction: column;
  }
}
</style>
