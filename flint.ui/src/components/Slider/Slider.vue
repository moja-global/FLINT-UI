<template>
  <div :style="styles()">
    <SliderComponent
      classname="primary"
      PrimaryColor="#2E382B"
      OuterWidth="356px"
      OuterHeight="7px"
      InnerWidth="16px"
      InnerHeight="16px"
      minimum="0"
      maximum="100"
      value="22"
      @clicked="getvalue"
    />
  </div>
</template>

<script>
import { SliderComponent } from '@moja-global/mojaglobal-ui'
import { ref, computed } from 'vue'

export default {
  components: {
    SliderComponent
  },
  emits: ['changeVal'],
  props: {
    value: { type: Number, default: 100 }
  },
  setup(props, { emit }) {
    const sliderValue = ref(props.value)

    const inputVal = computed({
      get: () => {
        return sliderValue.value
      },
      set: (val) => {
        emit('changeVal', val)
        sliderValue.value = val
      }
    })

    return { inputVal, sliderValue }
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
:deep(.ant-slider:hover .ant-slider-handle) {
  border-color: theme('colors.earth');
}

:deep(.ant-slider-track) {
  height: 5px;
  background-color: theme('colors.earth');
  border-radius: 5px;
}
:deep(.ant-slider-rail) {
  height: 5px;
  background-color: gray;
  border-radius: 5px;
}
:deep(.ant-slider-handle) {
  background-color: rgb(82, 77, 77);
  border: none;
  width: 24px;
  height: 24px;
  margin-top: -10px;
  border: 3px;
  border-style: solid;
  border-color: white;
  box-shadow: 2px 2px 5px #aaaaaa;
}
</style>
