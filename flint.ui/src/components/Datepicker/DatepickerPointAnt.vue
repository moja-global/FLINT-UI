<template>
  <div class="w-full flex-col mt-4 justify-center">
    <div class="flex lg:flex-row flex-col my-2">
      <div class="flex flex-col w-full m-2 font-medium text-base">
        <p class="text-gray">Start Date</p>
        <a-date-picker
          v-model="startValue"
          class="w-full"
          :disabled-date="disabledStartDate"
          placeholder="Select Date"
          @openChange="handleStartOpenChange"
        />
      </div>
      <div class="flex flex-col w-full m-2 font-medium text-base">
        <p class="text-gray">End Date</p>
        <a-date-picker
          v-model="endValue"
          class="w-full"
          :disabled-date="disabledEndDate"
          placeholder="Select Date"
          :open="endOpen"
          @openChange="handleEndOpenChange"
        />
      </div>
    </div>
    <h3 class="mt-14 py-4 text-xl font-medium m-2 text-gray-600 justify-center">
      Simulation length is
      <span class="text-persiangreen">{{ date_diff > 0 ? date_diff.toFixed(2) + ' years' : 'invalid' }}</span>
    </h3>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  data() {
    return {
      startValue: moment('1970-01-01').toString(),
      endValue: moment('1971-01-01').toString(),
      endOpen: false
    }
  },
  computed: {
    date_diff() {
      let date_difference = moment(this.endValue).diff(this.startValue, 'years', true)
      return date_difference
    }
  },

  methods: {
    disabledStartDate(startValue) {
      const endValue = this.endValue
      if (!startValue || !endValue) {
        return false
      }
      return startValue.valueOf() > endValue.valueOf()
    },
    disabledEndDate(endValue) {
      const startValue = this.startValue
      if (!endValue || !startValue) {
        return false
      }
      return startValue.valueOf() >= endValue.valueOf()
    },
    handleStartOpenChange(open) {
      if (!open) {
        this.endOpen = true
      }
    },
    handleEndOpenChange(open) {
      this.endOpen = open
    }
  }
}
</script>

<style>
.ant-calendar-picker-input.ant-input {
  font-size: 16px;
  height: 53px;
}
</style>
