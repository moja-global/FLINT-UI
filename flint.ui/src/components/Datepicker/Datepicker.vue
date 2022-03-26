<template>
  <div>
    <a-date-picker
      v-model="inputVal"
      :value="selectedDate"
      :default-value="selectedDate"
      v-bind="$attrs"
      @change="onChange"
      v-on="$listeners"
    />
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
    value: { type: String, default: moment('2022-01-31').toString() }
  },
  data() {
    return { selectedDate: this.value }
  },
  computed: {
    inputVal: {
      get() {
        return this.selectedDate
      },
      set(val) {
        this.$emit('input', moment(val).toString())
        this.selectedDate = val
      }
    }
  },
  methods: {
    onChange(val) {
      this.selectedDate = val
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
</style>
