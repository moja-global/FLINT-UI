<template>

  <div class="relative bg-gradient-to-r from-green-400 to-blue-500 md:pt-32 pb-32 pt-12 w-full">
    <div class="px-4 md:px-10 mx-auto w-full">
      <div>
      <div class="bg-white p-6 rounded-lg shadow-lg">
    <h2 class="text-2xl font-bold mb-2 text-gray-800">RothC example simulation configuration</h2>
    <p class="text-gray-700">Input the custom values in the fields below. Default values as placeholder text will be used if none provided.</p>
  </div>

<!-- <button @click="$store.commit('soil_func_data_orig')">BTN</button> -->

<div class="flex flex-wrap mt-10"> 

  <div class="w-full px-4 content-center rounded-md m-12 mb-5">
        <h1 class="flex-auto text-xl font-semibold">
        soilCover - data_orig
        </h1>
    <textarea 
    class="form-textarea mt-1 block w-full" 
    rows="5" 
    placeholder="" 
    v-model="newconfig_soilcover_data_orig"
    @input="foobar($event)"
    >
    </textarea>
    
  </div>

  <div class="w-full px-4 content-center rounded-md m-12 mb-5">
        <h1 class="flex-auto text-xl font-semibold">
        soilCover - data_firstmonthcopy
        </h1>
    <textarea 
    class="form-textarea mt-1 block w-full" 
    rows="5" 
    placeholder="" 
    v-model="newconfig_soilcover_data_firstmonthcopy"
    >
    </textarea>
    
  </div>

  <div class="w-full px-4 content-center rounded-md m-12 mb-5">
        <h1 class="flex-auto text-xl font-semibold">
        soilCover - data_month_avg
        </h1>
    <textarea 
    class="form-textarea mt-1 block w-full" 
    rows="5" 
    placeholder="" 
    v-model="newconfig_soilcover_data_month_avg"
    >
    </textarea>
    
  </div>

  <div class="w-full px-4 content-center rounded-md m-12 mb-5">
        <h1 class="flex-auto text-xl font-semibold">
        soilCover - data_lastyearcopy
        </h1>
    <textarea 
    class="form-textarea mt-1 block w-full" 
    rows="5" 
    placeholder="" 
    v-model="newconfig_soilcover_data_lastyearcopy"
    >
    </textarea>
    
  </div>

</div>

</div>
</div>
</div>

</template>

<script>
import { useToast } from "vue-toastification";
// import index from "src/"
// import "./store/index.js"
// import { ref, reactive } from "vue";

export default {
  setup() {
    const toast = useToast();
    toast("I'm a toast!");

    toast.success("My toast content", {
        timeout: 2000
      });

      return { toast }
  },

  components: {
    
  },
  computed: {
    newconfig_soilcover_data_orig: {
      get() {
         return this.$store.state.RothC_config.Variables[12].soilCover.transform.data_orig
      },
      set(newValue) {
        let tempval = newValue;
        this.$store.commit('setNewConfig_soilCover_data_orig', tempval)
      }
    },

    newconfig_soilcover_data_firstmonthcopy: {
      get() {
         return this.$store.state.RothC_config.Variables[12].soilCover.transform.data_firstmonthcopy
      },
      set(newValue) {
        let tempval = newValue;
        this.$store.commit('setNewConfig_soilCover_data_firstmonthcopy', tempval)
      }
    },

    newconfig_soilcover_data_month_avg: {
      get() {
         return this.$store.state.RothC_config.Variables[12].soilCover.transform.data_month_avg
      },
      set(newValue) {
        let tempval = newValue;
        this.$store.commit('setNewConfig_soilCover_data_month_avg', tempval)
      }
    },

    newconfig_soilcover_data_lastyearcopy: {
      get() {
         return this.$store.state.RothC_config.Variables[12].soilCover.transform.data_lastyearcopy
      },
      set(newValue) {
        let tempval = newValue;
        this.$store.commit('setNewConfig_soilCover_data_lastyearcopy', tempval)
      }
    },
  },
  data() {
      return {
         config_soilcover_data_orig: "1.0, 1.000, 0.900, 0.800, 0.359, 0.100, 0.200, 0.200, 0.500, 0.800, 0.289, 1.000, 0.600, 0.200, 1.000, 0.800, 0.587, 0.027, 0.100, 0.300, 0.173, 0.900, 0.486, 0.200, 0.800, 0.600, 0.000, 0.700, 0.400, 0.500, 0.400, 0.800, 0.200, 0.250, 0.000, 0.100, 0.700, 0.800, 0.680, 0.900, 0.213, 0.973, 0.200, 0.999, 0.227, 0.140, 0.996, 0.200, 0.600",
         config_soilcover_data_firstmonthcopy: "1.0, 1.000, 0.900, 0.800, 0.359, 0.100, 0.200, 0.200, 0.500, 0.800, 0.289, 1.000, 0.600, 0.200, 1.000, 0.800, 0.587, 0.027, 0.100, 0.300, 0.173, 0.900, 0.486, 0.200, 0.800, 0.600, 0.000, 0.700, 0.400, 0.500, 0.400, 0.800, 0.200, 0.250, 0.000, 0.100, 0.700, 0.800, 0.680, 0.900, 0.213, 0.973, 0.200, 0.999, 0.227, 0.140, 0.996, 0.200, 0.600, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0",
         config_soilcover_data_month_avg: "1.0, 1.00, 0.90, 0.80, 0.36, 0.10, 0.20, 0.20, 0.50, 0.80, 0.29, 1.00, 0.60, 0.20, 1.00, 0.80, 0.59, 0.03, 0.10, 0.30, 0.17, 0.90, 0.49, 0.20, 0.80, 0.60, 0.00, 0.70, 0.40, 0.50, 0.40, 0.80, 0.20, 0.25, 0.00, 0.10, 0.70, 0.80, 0.68, 0.90, 0.21, 0.97, 0.20, 1.00, 0.23, 0.14, 1.00, 0.20, 0.60, 0.65, 0.65, 0.80, 0.39, 0.40, 0.23, 0.57, 0.28, 0.52, 0.44, 0.38, 0.68",
         config_soilcover_data_lastyearcopy: "1.0, 1.000, 0.900, 0.800, 0.359, 0.100, 0.200, 0.200, 0.500, 0.800, 0.289, 1.000, 0.600, 0.200, 1.000, 0.800, 0.587, 0.027, 0.100, 0.300, 0.173, 0.900, 0.486, 0.200, 0.800, 0.600, 0.000, 0.700, 0.400, 0.500, 0.400, 0.800, 0.200, 0.250, 0.000, 0.100, 0.700, 0.800, 0.680, 0.900, 0.213, 0.973, 0.200, 0.999, 0.227, 0.140, 0.996, 0.200, 0.600, 0.800, 0.680, 0.900, 0.213, 0.973, 0.200, 0.999, 0.227, 0.140, 0.996, 0.200, 0.600",
         businessNameV2: "My consulting firm v2",

         val: { 
          get() {
            return this.value
          },
          set(val) {
            //  this.config_soilcover_data_orig
            this.$emit('input', val)
          }
        },
      }},
       
  methods: {
    yut () {
      console.log(this.$store.state.RothC_config.Variables[12]);
         console.log(this.$store.state.RothC_config.Variables[12].soilCover.transform.data_orig);
      console.log("Sss");
    },
    foobar (event) {
    
         console.log(event.target.value);
        console.log(this.$store.state.RothC_config.Variables[12].soilCover.transform.data_orig);
        // console.log("haaaa");
      
      // checkExist(event){

      // this.state.Variables[8].rainfall.transform.data_orig = ('#$[ ' + event.target.value + ' ]#$');

      //  } 
      // console.log(this.val);
      // let final_soilcover_data_orig_config = '#$[ ' + (this.state.Variables[8].rainfall.transform.data_orig) + ' ]#$';
      // console.log(this.state.Variables[8].rainfall.transform);

      // handler();
      // this.state.Variables[8].rainfall.transform.data_orig = final_soilcover_data_orig_config;

    //  console.log(this.state.Variables[8].rainfall.transform.data_orig);

    },

    
  }}
</script>
