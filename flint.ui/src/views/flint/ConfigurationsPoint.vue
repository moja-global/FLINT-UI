<template>
  <div>
    <LandingPageNavbar />
    <div class="px-8 pb-6 sm:px-16 md:px-24">
      <div class="mt-14">
        <h2 class="text-xl sm:text-2xl md:text-2xl text-earth mb-3">Point example simulation configuration</h2>
        <p class="text-earth sm:text-base">
          Was the simulation conducted at a specific place?
          <a>
            <span class="underline cursor-pointer text-earth" @click="isShow = !isShow">
              {{ isShow ? 'Close' : 'Click here' }}</span
            >
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
                  <span>Pool 1: {{ pool1.value }}</span>
                  <span>{{ pool1.max }}</span>
                </div>
                <vue-slider
                  v-model="pool1.value"
                  v-bind="pool1"
                  :dot-style="{ 'background-color': '#475447', width: '14px', height: '14px' }"
                  :rail-style="{ 'background-color': '#475447', height: '2px !important' }"
                  :process-style="{ 'background-color': '#475447', height: '2px !important' }"
                />
              </div>
            </div>
          </div>

          <div class="flex-grow">
            <div class="">
              <div data-v-step="3">
                <div class="text-earth flex gap-4 justify-between mb-6">
                  <span>Pool 2: {{ pool2.value }}</span>
                  <span>{{ pool2.max }}</span>
                </div>
                <vue-slider
                  v-model="pool2.value"
                  v-bind="pool2"
                  :dot-style="{ 'background-color': '#475447', width: '14px', height: '14px' }"
                  :rail-style="{ 'background-color': '#475447', height: '2px !important' }"
                  :process-style="{ 'background-color': '#475447', height: '2px !important' }"
                />
              </div>
            </div>
          </div>

          <div class="flex-grow">
            <div class="">
              <div data-v-step="4">
                <div class="text-earth flex gap-4 justify-between mb-6">
                  <span>Pool 3: {{ pool3.value }}</span>
                  <span>{{ pool3.max }}</span>
                </div>
                <vue-slider
                  v-model="pool3.value"
                  v-bind="pool3"
                  :dot-style="{ 'background-color': '#475447', width: '14px', height: '14px' }"
                  :rail-style="{ 'background-color': '#475447', height: '2px !important' }"
                  :process-style="{ 'background-color': '#475447', height: '2px !important' }"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="mt-16 text-xl mb-2 text-earth">
          Simulation length is
          <!-- This can be updated later when we have the
            DatepickerPoint component ready with the new UI. -->
          <span class="text-blue-500">4.92 years</span>
        </div>

        <div class="my-16 flex gap-8 items-center">
          <div data-v-step="5"><Button @click.native="Run()">Run</Button></div>
          <div data-v-step="6">
            <Button :btn-size="'auto'" @click.native="showPointOutputTable()">Point Output Table</Button>
          </div>
        </div>
      </div>
      <v-tour name="MyTour" :steps="steps" :options="myOptions"></v-tour>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button/Button.vue'
import Datepicker from '@/components/Datepicker/DatepickerPoint.vue'
import LandingPageNavbar from '@/components/Navbars/LandingPageNavbar.vue'
import Maptest from '@/components/Vuelayers/Maptest.vue'

export default {
  components: {
    Button,
    Datepicker,
    LandingPageNavbar,
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
    },

    showPointOutputTable() {
      // this is a temporary function which can be removed when we have the
      // PointOutputTable component ready.
      this.$router.push('/flint/point_output_table')
    }
  }
}
</script>
