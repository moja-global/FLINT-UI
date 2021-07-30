<template>
    <div class="example">
    <h3 id="example-1">{{PoolTitle}}</h3>
    <div class="output">{{PoolNumber}}: {{ pool.value }} </div>
    <Slider
      v-model="pool.value"
      v-bind="pool"
    ></Slider>
  </div>
</template>

<script>
import Slider from "@vueform/slider/dist/slider.vue2.js";
  
  export default {
    components: {
      Slider,
    },

    props: {
        PoolTitle: {
            type: String,
            default: "Pool title",
        },
        PoolNumber: {
            type: String,
            default: "Pool number",
        },
        minPoolval: {
            type: Number,
            default: 3,
        }
    },

    data() {
      return {
        pool: {
            min: 0,   
            max: 400,
            step: 10,
            value: 180
        }
      }
    },

    methods: {
        
    }
  }
  
</script>

<style src="@vueform/slider/themes/default.css"></style>

<style>

.example {
  background: #ffffff;
  margin: 20px;
  border-color: #e7e7e7;
  padding: 40px;
}

.example pre {
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