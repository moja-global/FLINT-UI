<template>
  <div
    class="relative bg-gradient-to-r from-green-400 to-blue-500 md:pt-32 pt-12 w-full" style="height: auto;"
  >
    <div class="px-4 md:px-10 mx-auto w-full h-screen">
      <div>
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h2 class="text-2xl font-bold mb-2 text-gray-800">
            Point example simulation configuration
          </h2>
          <p>Was the simulation conducted at a specific place ? Click <a> <span v-on:click="isShow = !isShow">here</span> </a> to save latitude and longitude co-ordinates on a <i class="fas fa-map mr-2 text-sm"></i></p>
        </div>

        <div class="flex flex-wrap">
          <div class="w-full lg:w-4/12 xl:w-4/12 px-4 content-center">
            <div class="slider-component justify-center">
              <div class="output">Pool 1: {{ pool1.value }}</div>
              <vue-slider 
                v-model="pool1.value"
                v-bind="pool1"
                @change="loggingVal1"
              ></Slider>
            </div>
          </div>

          <div class="w-full lg:w-4/12 xl:w-4/12 px-4 content-center">
            <div class="slider-component">
              <div class="output">Pool 2: {{ pool2.value }}</div>
              <vue-slider 
                v-model="pool2.value"
                v-bind="pool2"
                @change="loggingVal2"
              ></Slider>
            </div>
          </div>

          <div class="w-full lg:w-4/12 xl:w-4/12 px-4 content-center">
            <div class="slider-component">
              <div class="output">Pool 3: {{ pool3.value }}</div>
              <vue-slider 
                v-model="pool3.value"
                v-bind="pool1"
                @change="loggingVal3"
              ></Slider>
            </div>
          </div>     
        </div>

          <button
            class="inline-block align-middle w-full mt-4 flex-initial bg-white hover:bg-red-500 hover:text-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            @click="finalPoolValues"
          >
            <i class="fas fa-check"></i> Confirm and run with the new Pool
            configuration
          </button>
        </div>
      
      </div>
    </div>
    <Stepper/>
  </div>
</template>

<script>
import Maptest from "@/components/Vuelayers/Maptest.vue";
import Stepper from "@/components/Stepper/StepperPoint.vue";

export default {
  components: {
    Maptest,
    Stepper
  },
  created() {
    this.$root.$refs = this;
  },
  data() {
    return {
      isShow: true,
      
      pool1: {
        min: 0.0,
        max: 400.0,
        step: 5.0,
        value: 100.0
      },
      pool2: {
        min: 0.0,
        max: 400.0,
        step: 5.0,
        value: 100.0
      },
      pool3: {
        min: 0.0,
        max: 400.0,
        step: 5.0,
        value: 100.0
      }
    };
  },
  methods: {
    finalPoolValues() {
      if (
        this.pool1.value.toFixed(1) === this.pool2.value.toFixed(1) &&
        this.pool2.value.toFixed(1) === this.pool3.value.toFixed(1)
      ) {
        console.log("Config values not changed!!");
      }

      this.$store.commit("set_pointConfig_Pool_1", this.pool1.value.toFixed(1));
      this.$store.commit("set_pointConfig_Pool_2", this.pool2.value.toFixed(1));
      this.$store.commit("set_pointConfig_Pool_3", this.pool3.value.toFixed(1));

      this.$store.dispatch("send_pointConfig");
    }
  }
};
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
