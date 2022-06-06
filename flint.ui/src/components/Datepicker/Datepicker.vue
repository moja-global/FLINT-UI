<template>
  <div>
    <a-date-picker
      v-model="inputVal"
      :value="selectedDate"
      :default-value="selectedDate"
      v-bind="$attrs"
      @change="onChange"
    />
  </div>
</template>

<script>
import { DatePicker } from 'ant-design-vue'
import dayjs from 'dayjs'
console.log(dayjs)
export default {
  components: {
    'a-date-picker': DatePicker
  },
  props: {
    value: { type: String, default: dayjs('2022-01-31') }
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
        // this.$emit('input', dayjs(val).toString())
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
:deep(.ant-calendar-picker-input.ant-input) {
  border-color: theme('colors.earth');
}
:deep(.ant-calendar-picker-icon) {
  color: theme('colors.earth');
}
</style>
