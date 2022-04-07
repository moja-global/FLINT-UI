<template>
  <div>
    <a-row :gutter="8" style="width: 100%">
      <a-col :sm="24" :md="12">
        <div class="gutter-box">
          <a-space direction="vertical" style="display: flex">
            <a-typography-paragraph style="color: gray">Start Date</a-typography-paragraph>
            <a-date-picker
              v-model="startValue"
              style="width: 100%"
              :disabled-date="disabledStartDate"
              placeholder="Select Date"
              @openChange="handleStartOpenChange"
            />
          </a-space>
        </div>
      </a-col>
      <a-col :sm="24" :md="12">
        <div class="gutter-box">
          <a-space direction="vertical" style="display: flex">
            <a-typography-paragraph style="color: gray">End Date</a-typography-paragraph>
            <a-date-picker
              v-model="endValue"
              style="width: 100%"
              :disabled-date="disabledEndDate"
              placeholder="Select Date"
              :open="endOpen"
              @openChange="handleEndOpenChange"
            />
          </a-space>
        </div>
      </a-col>
    </a-row>

    <div class="extra-bold">
      <a-typography-title :level="3">
        Simulation length is
        <span style="color: #388591">{{
          date_diff > 0 ? date_diff.toFixed(2) + ' years' : 'invalid'
        }}</span></a-typography-title
      >
    </div>
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
.gutter-box {
  margin-top: 14px;
}
.ant-calendar-picker-input.ant-input {
  font-size: 16px;
  height: 53px;
}
.ant-calendar-picker-input.ant-input:hover {
  background-color: #fefefe;
  border: 1px solid #388591 !important;
}
.extra-bold {
  font-size: 20px;
  padding: 24px 0;
  font-weight: 500;
}
</style>
