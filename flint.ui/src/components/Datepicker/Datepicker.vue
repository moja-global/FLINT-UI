<template>
  <div :style="styles()">
    <DatePickerComponent
      @changeDate="onChange"
      startYear="1924"
      endYear="2022"
      placeholder="Select the date"
      readonly
    />
  </div>
</template>

<script>
import { DatePickerComponent } from '@moja-global/mojaglobal-ui'
import dayjs from 'dayjs'
import { ref, computed } from 'vue'

export default {
  components: {
    DatePickerComponent
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

    function styles() {
      return { maxWidth: '250px' }
    }

    return {
      selectedDate,
      inputVal,
      onChange,
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
</style>
