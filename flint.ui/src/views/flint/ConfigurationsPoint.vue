<template>
  <div
    class="
      relative
      bg-gradient-to-r
      from-green-400
      to-blue-500
      md:pt-32
      pt-12
      w-full
    "
    style="height: auto"
  >
    <div class="px-4 md:px-10 mx-auto w-full h-auto">
      <div>
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h2 class="text-2xl font-bold mb-2 text-gray-800">
            Point example simulation configuration
          </h2>
          <p>
            Was the simulation conducted at a specific place ? Click
            <a> <span @click="isShow = !isShow">here</span> </a> to save
            latitude and longitude co-ordinates on a
            <i class="fas fa-map mr-2 text-sm" />
          </p>
        </div>

        <div v-if="isShow">
          <Maptest />
        </div>

        <div class="px-4 md:px-10 mx-auto w-full h-auto m-8">
          <div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h2 class="text-2xl font-bold mb-2 text-gray-800">
                Start and End date of simulation
              </h2>
              <div>
                <Datepicker />
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap z-0">
          <div class="w-full lg:w-4/12 xl:w-4/12 px-4 content-center">
            <div class="slider-component justify-center">
              <div class="output">Pool 1: {{ pool1.value }}</div>
              <vue-slider v-model="pool1.value" v-bind="pool1" />
            </div>
          </div>

          <div class="w-full lg:w-4/12 xl:w-4/12 px-4 content-center">
            <div class="slider-component">
              <div class="output">Pool 2: {{ pool2.value }}</div>
              <vue-slider v-model="pool2.value" v-bind="pool2" />
            </div>
          </div>

          <div class="w-full lg:w-4/12 xl:w-4/12 px-4 content-center">
            <div class="slider-component">
              <div class="output">Pool 3: {{ pool3.value }}</div>
              <vue-slider v-model="pool3.value" v-bind="pool3" />
            </div>
          </div>
          <button
            class="
              inline-block
              align-middle
              flex-initial
              bg-white
              hover:bg-black hover:text-white
              text-gray-800
              font-semibold
              py-2
              px-4
              border border-gray-400
              rounded
              shadow
            "
            @click="Run()"
          >
            <i class="far fa-image" /> Run
          </button>
        </div>
      </div>
    </div>
    <Stepper />
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
      }
    }
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

      //If the setup is ok it will take the user to the Output else give an alert.
      if (this.$store.state.point.flag === 1) {
        this.$store.dispatch('parse_point_results')
        window.open('http://127.0.0.1:8000/flint/point_output_table', '_self')
      } else {
        alert('Hey please check your setup')
      }
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
