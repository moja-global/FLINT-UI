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
import { ref, computed } from 'vue'

export default {
  components: {
    'a-date-picker': DatePicker
  },
  props: {
    value: { type: String, default: dayjs('2022-01-31') }
  },
  setup(props) {
    const selectedDate = ref(props.value)

    const inputVal = computed({
      get: () => {
        return selectedDate.value
      },
      set: (val) => {
        // this.$emit('input', dayjs(val).toString())
        selectedDate.value = val
      }
    })

    function onChange(val) {
      selectedDate.value = val
    }

    return {
      selectedDate,
      inputVal,
      onChange
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
