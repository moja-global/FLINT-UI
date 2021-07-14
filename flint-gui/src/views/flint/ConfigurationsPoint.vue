<template>
  <div class="relative bg-gradient-to-r from-green-400 to-blue-500 md:pt-32 pb-32 pt-12 w-full">
    <div class="px-4 md:px-10 mx-auto w-full">
      <div>
      <div class="bg-white p-6 rounded-lg shadow-lg">
    <h2 class="text-2xl font-bold mb-2 text-gray-800">Point example simulation configuration</h2>
    <p class="text-gray-700">1: Pools</p>
  </div>

    <div class="flex flex-wrap">
        <div class="w-full lg:w-4/12 xl:w-4/12 px-4 content-center"> 
            <div class="slider-component justify-center">
            <h3 class="pb-4">Pool 1 configuration:</h3>
            <div class="output">Pool 1: {{ pool1.value }} </div>
            <Slider
            v-model="pool1.value"
            v-bind="pool1"
            v-on:change="loggingVal1"
            ></Slider>
            </div>
        </div>

        <div class="w-full lg:w-4/12 xl:w-4/12 px-4 content-center"> 
            <div class="slider-component">
            <h3 class="pb-4">Pool 2 configuration:</h3>
            <div class="output">Pool 2: {{ pool2.value }} </div>
            <Slider
            v-model="pool2.value"
            v-bind="pool2"
            v-on:change="loggingVal2"
            ></Slider>
            </div>
        </div>

        <div class="w-full lg:w-4/12 xl:w-4/12 px-4 content-center"> 
            <div class="slider-component">
            <h3 class="pb-4">Pool 3 configuration:</h3>
            <div class="output">Pool 3: {{ pool3.value }} </div>
            <Slider
            v-model="pool3.value"
            v-bind="pool1"
            v-on:change="loggingVal3"
            ></Slider>
            </div>
        </div>

        <button @click="finalPoolValues" class="inline-block align-middle w-full mt-4 flex-initial bg-white hover:bg-red-500 hover:text-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
           <i class="fas fa-check"></i> Confirm and run with the new Pool configuration
          </button>
        
        <!-- <button @click="runUpdatedConfig" class="inline-block align-middle w-full mt-4 flex-initial bg-white hover:bg-blue-500 hover:text-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
           <i class="far fa-play-circle"></i> Run with new Config
          </button> -->
    </div>
    
    </div>
  </div>
 </div>
</template>

<script>
import Slider from '@vueform/slider'

export default {
  components: {
    Slider,
  },
  data() {
      return {
        pool1: {
            min: 0.0,   
            max: 400.0,
            step: 10.0,
            value: 100.0
        },
        pool2: {
            min: 0.0,   
            max: 400.0,
            step: 10.0,
            value: 100.0
        },
        pool3: {
            min: 0.0,   
            max: 400.0,
            step: 10.0,
            value: 100.0
        },
        // configvalidated: false
      }
    },
  methods: {
    loggingVal1 () {
    //   console .log(typeof(this.pool1.value).toFixed(1));
      console.log(this.pool1.value.toFixed(1));
    },
    loggingVal2 () {
      console.log(this.pool2.value.toFixed(1));
    },
    loggingVal3 () {
      console.log(this.pool3.value.toFixed(1));
    },
    finalPoolValues () {
       if ((this.pool1.value.toFixed(1))===(this.pool2.value.toFixed(1)) && (this.pool2.value.toFixed(1))===(this.pool3.value.toFixed(1)))
       {
           console.log("Config values not changed!!");
       }
       let pool_final = {
           'Pool 1':'#$'+this.pool1.value.toFixed(1)+'#$', 
           'Pool 2':'#$'+this.pool2.value.toFixed(1)+'#$', 
           'Pool 3':'#$'+this.pool3.value.toFixed(1)+'#$'
       };
       console.log(pool_final);
    },
    // runUpdatedConfig () {
    //     console.log("Or can we do all at one go!!")
    // },

  }
};
</script>


<style src="@vueform/slider/themes/default.css"></style>

<style>

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

.slider-vertical {
  margin: -30px auto 0;
}
</style>