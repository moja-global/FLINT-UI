<template>
  <div>
    <a-slider v-model:value="inputVal" v-bind="$attrs" />
  </div>
</template>

<script>
import { Slider } from 'ant-design-vue'
export default {
  components: {
    'a-slider': Slider
  },
  emits: ['changeVal'],
  props: {
    value: { type: Number, default: 100 }
  },
  data() {
    return { sliderValue: this.value }
  },
  computed: {
    inputVal: {
      get() {
        return this.sliderValue
      },
      set(val) {
        this.$emit('changeVal', val)
        this.sliderValue = val
      }
    }
  }
}
</script>

<style scoped>
:deep(.ant-slider) {
  width: auto;
  margin: 0;
  padding: 7px 0;
}
:deep(.ant-slider:hover .ant-slider-track),
:deep(.ant-slider:hover .ant-slider-rail) {
  background-color: theme('colors.earth');
}
:deep(.ant-slider-track) {
  height: 2px;
  background-color: theme('colors.earth');
}
:deep(.ant-slider-rail) {
  height: 2px;
  background-color: theme('colors.earth');
}
:deep(.ant-slider-handle) {
  background-color: theme('colors.earth');
  border: none;
  width: 14px;
  height: 14px;
  margin-top: -6px;
}
</style>
