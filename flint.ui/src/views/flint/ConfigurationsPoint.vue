<template>
  <div>
    <div class="px-8 pb-6 sm:px-16 md:px-24">
      <div class="mt-14">
        <h2 class="text-xl sm:text-2xl md:text-2xl text-earth mb-3">Point example simulation configuration</h2>
        <p class="text-earth sm:text-base">
          Was the simulation conducted at a specific place?
          <a>
            <span class="underline cursor-pointer text-earth" @click="isShow = !isShow">
              {{ isShow ? 'Close' : 'Click here' }}
            </span>
          </a>
          <span v-if="!isShow"> to save latitude and longitude co-ordinates on a map.</span>
        </p>

        <div v-if="isShow">
          <Maptest />
        </div>

        <div class="mt-16">
          <div data-v-step="1">
            <div class="">
              <h2 class="text-xl mb-2 text-earth">Start and end date of simulation</h2>
              <div>
                <Datepicker size="large" />
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-evenly gap-14 flex-wrap w-full mt-16 z-0">
          <div class="flex-grow">
            <div class="">
              <div data-v-step="2">
                <div class="text-earth flex gap-4 justify-between mb-6">
                  <span>Pool 1: {{ pool1.pool_value }}</span>
                  <span>{{ pool1.max }}</span>
                </div>
                <Slider
                  :value="pool1.pool_value"
                  :max="pool1.max"
                  :min="pool1.min"
                  :step="pool1.step"
                  @changeVal="(val) => (pool1.pool_value = val)"
                />
              </div>
            </div>
          </div>

          <div class="flex-grow">
            <div class="">
              <div data-v-step="3">
                <div class="text-earth flex gap-4 justify-between mb-6">
                  <span>Pool 2: {{ pool2.pool_value }}</span>
                  <span>{{ pool2.max }}</span>
                </div>
                <Slider
                  :value="pool2.pool_value"
                  :max="pool2.max"
                  :min="pool2.min"
                  :step="pool2.step"
                  @changeVal="(val) => (pool2.pool_value = val)"
                />
              </div>
            </div>
          </div>

          <div class="flex-grow">
            <div class="">
              <div data-v-step="4">
                <div class="text-earth flex gap-4 justify-between mb-6">
                  <span>Pool 3: {{ pool3.pool_value }}</span>
                  <span>{{ pool3.max }}</span>
                </div>
                <Slider
                  :value="pool3.pool_value"
                  :max="pool3.max"
                  :min="pool3.min"
                  :step="pool3.step"
                  @changeVal="(val) => (pool3.pool_value = val)"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="my-16 flex gap-8 items-center">
          <div data-v-step="5"><Button @click="Run()">Run</Button></div>
          <div data-v-step="6">
            <Button :btn-size="'auto'" @click="showPointOutputTable()">Point Output Table</Button>
          </div>
        </div>
      </div>
      <v-tour name="MyTour" :steps="steps" :options="myOptions"></v-tour>
      <PointOuterTable v-if="showTable" />
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button/Button.vue'
import Datepicker from '@/components/Datepicker/DatepickerPoint.vue'
import Maptest from '@/components/Vuelayers/Maptest.vue'
import Slider from '@/components/Slider/Slider.vue'
import PointOuterTable from './PointOuterTable.vue'

import { ref, onMounted, getCurrentInstance, createVNode } from 'vue'
import { useStore } from 'vuex'
import { Modal } from 'ant-design-vue'
import { ExclamationCircleOutlined } from '@ant-design/icons-vue'

export default {
  components: {
    Button,
    Datepicker,
    Maptest,
    Slider,
    PointOuterTable
  },

  setup() {
    const isShow = ref(false)
    const showTable = ref(false)

    const store = useStore()

    const pool1 = ref({
      min: 0.0,
      max: 400.0,
      interval: 5.0,
      pool_value: 100.0
    })

    const pool2 = ref({
      min: 0.0,
      max: 400.0,
      interval: 5.0,
      pool_value: 100.0
    })

    const pool3 = ref({
      min: 0.0,
      max: 400.0,
      interval: 5.0,
      pool_value: 100.0
    })

    const myOptions = ref({
      useKeyboardNavigation: true,
      labels: {
        buttonSkip: 'Skip tour',
        buttonPrevious: 'Previous',
        buttonNext: 'Next',
        buttonStop: 'Finish'
      }
    })

    const steps = ref([
      {
        target: '[data-v-step="1"]',
        content: 'Set the Start and End date of simulation from the date picker.',
        params: {
          placement: 'bottom'
        }
      },
      {
        target: '[data-v-step="2"]',
        content: 'Use the slider to set the Pool 1 value.',
        params: {
          placement: 'top'
        }
      },
      {
        target: '[data-v-step="3"]',
        content: 'Use the slider to set the Pool 2 value.',
        params: {
          placement: 'top'
        }
      },
      {
        target: '[data-v-step="4"]',
        content: 'Use the slider to set the Pool 3 value.',
        params: {
          placement: 'top'
        }
      },
      {
        target: '[data-v-step="5"]',
        content: 'Click on the RUN button to start the simulation.',
        params: {
          placement: 'top'
        }
      },
      {
        target: '[data-v-step="6"]',
        content: 'Click on this button to see the Point output.',
        params: {
          placement: 'top'
        }
      }
    ])

    function poolValuesNotChanged(slider_values) {
      let pool_values_in_store = {
        pool_1: parseInt(store.state.point.config['Pools'][0]['Pool 1'].toString().replaceAll('#$', '')),
        pool_2: parseInt(store.state.point.config['Pools'][1]['Pool 2'].toString().replaceAll('#$', '')),
        pool_3: parseInt(store.state.point.config['Pools'][2]['Pool 3'].toString().replaceAll('#$', ''))
      }

      return (
        pool_values_in_store.pool_1 === slider_values.pool_1 &&
        pool_values_in_store.pool_2 === slider_values.pool_2 &&
        pool_values_in_store.pool_3 === slider_values.pool_3
      )
    }

    function finalPoolValues() {
      let slider_values = {
        pool_1: parseInt(pool1.value.pool_value),
        pool_2: parseInt(pool2.value.pool_value),
        pool_3: parseInt(pool3.value.pool_value)
      }

      if (store.state.point.firstRun) {
        // Then return early. This also makes sure that user doesn't get
        // `Modal.confirm` prompt if it's the first time.
        store.commit('setRunStatus', false)
        store.commit('set_pointConfig_Pool_1', slider_values.pool_1.toFixed(1))
        store.commit('set_pointConfig_Pool_2', slider_values.pool_2.toFixed(1))
        store.commit('set_pointConfig_Pool_3', slider_values.pool_3.toFixed(1))
        store.dispatch('send_pointConfig')

        return
      }

      if (poolValuesNotChanged(slider_values)) {
        Modal.confirm({
          title: 'Pool values are same as the last run!',
          content: 'Click OK to run if this is intentional',
          icon: createVNode(ExclamationCircleOutlined),
          onOk() {
            store.dispatch('send_pointConfig')
          },
          onCancel() {}
        })

        return
      } else {
        // Everything's new - commit changes
        store.commit('set_pointConfig_Pool_1', slider_values.pool_1.toFixed(1))
        store.commit('set_pointConfig_Pool_2', slider_values.pool_2.toFixed(1))
        store.commit('set_pointConfig_Pool_3', slider_values.pool_3.toFixed(1))
        store.dispatch('send_pointConfig')
      }
    }

    function Run() {
      finalPoolValues()
      showTable.value = false
    }

    function showPointOutputTable() {
      showTable.value = !showTable.value
    }

    onMounted(() => {
      // https://github.com/pulsardev/vue-tour/issues/166#issuecomment-1064000704
      const internalInstance = getCurrentInstance()
      const tours = internalInstance.appContext.config.globalProperties.$tours
      tours['MyTour'].start()
    })

    return {
      isShow,
      showTable,
      pool1,
      pool2,
      pool3,
      myOptions,
      steps,
      finalPoolValues,
      Run,
      showPointOutputTable
    }
  }
}
</script>
