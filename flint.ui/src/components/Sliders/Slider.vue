<template>
  <div>
    <a-slider v-model="inputVal" :value="sliderValue" v-bind="$attrs" @change="onChange" v-on="$listeners" />
  </div>
</template>

<script>
import { Slider } from 'ant-design-vue'
export default {
  components: {
    'a-slider': Slider
  },
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
        this.$emit('input', val)
        this.sliderValue = val
      }
    }
  },
  methods: {
    onChange(val) {
      this.sliderValue = val
    }
  }
}
</script>

<style scoped>
::v-deep .ant-slider {
  width: auto;
  margin: 0;
  padding: 7px 0;
}
::v-deep .ant-slider:hover .ant-slider-track,
::v-deep .ant-slider:hover .ant-slider-rail {
  background-color: theme('colors.earth');
}
::v-deep .ant-slider-track {
  height: 2px;
  background-color: theme('colors.earth');
}
::v-deep .ant-slider-rail {
  height: 2px;
  background-color: theme('colors.earth');
}
::v-deep .ant-slider-handle {
  background-color: theme('colors.earth');
  border: none;
  width: 14px;
  height: 14px;
  margin-top: -6px;
}
</style>
