<template>
  <div class="relative bg-gradient-to-r from-green-400 to-blue-500 md:pt-32 pt-12 w-full" style="height: auto">
    <div class="px-4 md:px-10 mx-auto w-full h-auto">
      <div>
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h2 class="text-2xl font-bold mb-2 text-gray-800">Point example simulation configuration</h2>
          <p>
            Was the simulation conducted at a specific place ? Click
            <a> <span @click="isShow = !isShow">here</span> </a> to save latitude and longitude co-ordinates on a
            <i class="fas fa-map mr-2 text-sm" />
          </p>
        </div>

        <div v-if="isShow">
          <Maptest />
        </div>

        <div class="px-4 md:px-10 mx-auto w-full h-auto m-8">
          <div>
            <div data-v-step="1">
              <div class="bg-white p-6 rounded-lg shadow-lg">
                <h2 class="text-2xl font-bold mb-2 text-gray-800">Start and End date of simulation</h2>
                <div>
                  <Datepicker size="large" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap z-0">
          <div class="w-full lg:w-4/12 xl:w-4/12 px-4 content-center">
            <div class="slider-component justify-center">
              <div data-v-step="2">
                <div class="output">Pool 1: {{ pool1.value }}</div>
                <vue-slider v-model="pool1.value" v-bind="pool1" />
              </div>
            </div>
          </div>

          <div class="w-full lg:w-4/12 xl:w-4/12 px-4 content-center">
            <div class="slider-component">
              <div data-v-step="3">
                <div class="output">Pool 2: {{ pool2.value }}</div>
                <vue-slider v-model="pool2.value" v-bind="pool2" />
              </div>
            </div>
          </div>

          <div class="w-full lg:w-4/12 xl:w-4/12 px-4 content-center">
            <div class="slider-component">
              <div data-v-step="4">
                <div class="output">Pool 3: {{ pool3.value }}</div>
                <vue-slider v-model="pool3.value" v-bind="pool3" />
              </div>
            </div>
          </div>

          <div class="items-center flex flex-wrap justify-center">
            <div class="p-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-8">
              <button
                class="
                  bg-white
                  text-lg text-gray-800
                  hover:bg-black hover:text-white
                  font-semibold
                  py-4
                  px-16
                  border border-gray-400
                  rounded
                  shadow
                "
                @click="Run()"
              >
                <div data-v-step="5"><i class="far fa-play-circle" /> RUN</div>
              </button>

              <router-link to="/flint/point_output_table">
                <button
                  class="
                    bg-white
                    text-lg text-gray-800
                    hover:bg-black hover:text-white
                    font-semibold
                    py-4
                    px-16
                    border border-gray-400
                    rounded
                    shadow
                  "
                >
                  <div data-v-step="6"><i class="far fa-image" /> POINT OUTPUT TABLE</div>
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Stepper />
    <v-tour name="MyTour" :steps="steps" :options="myOptions"></v-tour>
  </div>
</template>

<script>
import Maptest from '@/components/Vuelayers/Maptest.vue'
import Stepper from '@/components/Stepper/StepperPoint.vue'
import Datepicker from '@/components/Datepicker/DatepickerPoint.vue'

export default {
  components: {
    Datepicker,
    Stepper,
    Maptest
  },
  data() {
    return {
      isShow: false,

      pool1: {
        min: 0.0,
        max: 400.0,
        interval: 5.0,
        value: 100.0
      },
      pool2: {
        min: 0.0,
        max: 400.0,
        interval: 5.0,
        value: 100.0
      },
      pool3: {
        min: 0.0,
        max: 400.0,
        interval: 5.0,
        value: 100.0
      },
      myOptions: {
        useKeyboardNavigation: true,
        labels: {
          buttonSkip: 'Skip tour',
          buttonPrevious: 'Previous',
          buttonNext: 'Next',
          buttonStop: 'Finish'
        }
      },
      steps: [
        {
          target: '[data-v-step="1"]',
          content: 'Set the Start and End date of simulation from the date picker.',
          params: {
            placement: 'left'
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
      ]
    }
  },
  mounted: function () {
    this.$tours['MyTour'].start()
  },
  created() {
    this.$root.$refs = this
  },
  methods: {
    finalPoolValues() {
      if (
        this.pool1.value.toFixed(1) === this.pool2.value.toFixed(1) &&
        this.pool2.value.toFixed(1) === this.pool3.value.toFixed(1)
      ) {
        console.log('Config values not changed!!')
      }

      this.$store.commit('set_pointConfig_Pool_1', this.pool1.value.toFixed(1))
      this.$store.commit('set_pointConfig_Pool_2', this.pool2.value.toFixed(1))
      this.$store.commit('set_pointConfig_Pool_3', this.pool3.value.toFixed(1))

      this.$store.dispatch('send_pointConfig')
    },

    Run() {
      this.$root.$refs.finalPoolValues() //This does whatever the stepper does.
    }
  }
}
</script>

<style>
.md-steppers-wrapper {
  display: none;
}

.slider-component {
  background: #ffffff;
  margin: 20px;
  border-color: #e7e7e7;
  padding: 40px;
}

.slider-component pre {
  background: #f9f9f9;
  padding: 18px 6px;
  overflow-x: scroll;
  margin-top: 10px;
}

.output {
  font-family: Courier, Courier New, Lucida Console, Monaco, Consolas;
  background: #000000;
  color: #ffffff;
  padding: 20px;
  margin-bottom: 50px;
  display: inline-block;
  width: 100%;
  box-sizing: border-box;
  font-size: 13px;
}
</style>
