<template>

  <div class="relative bg-gradient-to-r from-green-400 to-blue-500 md:pt-32 pb-32 pt-12 w-full">
    <div class="px-4 md:px-10 mx-auto w-full">
      <div>
      <div class="bg-white p-6 rounded-lg shadow-lg">
    <h2 class="text-2xl font-bold mb-2 text-gray-800">RothC example simulation configuration</h2>
    <p class="text-gray-700">Input the custom values in the fields below. Default values as placeholder text will be used if none provided.</p>
  </div>

<!-- -->
<div class="flex flex-wrap mt-10"> 

  <div class="w-full px-4 content-center rounded-md m-12 mb-5">
        <h1 class="flex-auto text-xl font-semibold">
        openPanEvap - data_orig
        </h1>
    <textarea 
    class="form-textarea mt-1 block w-full" 
    rows="5" 
    placeholder="" 
    v-model="newconfig_openPanEvap_data_orig"
    >
    </textarea>
    
  </div>

  <div class="w-full px-4 content-center rounded-md m-12 mb-5">
        <h1 class="flex-auto text-xl font-semibold">
        openPanEvap - data_month_avg
        </h1>
    <textarea 
    class="form-textarea mt-1 block w-full" 
    rows="5" 
    placeholder="" 
    v-model="newconfig_openPanEvap_data_month_avg"
    >
    </textarea>
    
  </div>

  <div class="w-full px-4 content-center rounded-md m-12 mb-5">
        <h1 class="flex-auto text-xl font-semibold">
        openPanEvap - data_lastyearcopy
        </h1>
    <textarea 
    class="form-textarea mt-1 block w-full" 
    rows="5" placeholder="" 
    v-model="newconfig_openPanEvap_data_lastyearcopy"
    >
    </textarea>
    
  </div>



</div>

</div>
</div>
</div>

</template>

<script>


export default {
  computed: {
    newconfig_openPanEvap_data_orig: {
      get() {
         return this.$store.state.RothC_config.Variables[9].openPanEvap.transform.data_orig
      },
      set(newValue) {
        let tempval = newValue;
        this.$store.commit('setNewConfig_openPanEvap_data_orig', tempval)
      }
    },

    newconfig_openPanEvap_data_month_avg: {
      get() {
         return this.$store.state.RothC_config.Variables[9].openPanEvap.transform.data_month_avg
      },
      set(newValue) {
        let tempval = newValue;
        this.$store.commit('setNewConfig_openPanEvap_data_month_avg', tempval)
      }
    },

    newconfig_openPanEvap_data_lastyearcopy: {
      get() {
         return this.$store.state.RothC_config.Variables[9].openPanEvap.transform.data_lastyearcopy
      },
      set(newValue) {
        let tempval = newValue;
        this.$store.commit('setNewConfig_openPanEvap_data_lastyearcopy', tempval)
      }
    },
  },
  components: {
    
  },
  data() {
      return {
        config_openpanevap_data_orig: "0.0, 230.00, 209.00, 162.00, 105.00, 68.000, 45.000, 50.000, 68.000, 92.000, 138.00, 171.00, 211.00, 26.647, 28.827, 31.007, 33.187, 35.367, 37.547, 39.727, 41.907, 44.087, 46.267, 63.707, 65.887, 29.027, 31.887, 34.747, 37.607, 40.467, 43.327, 46.187, 49.047, 51.907, 54.767, 77.647, 80.507, 28.000, 30.557, 33.114, 35.671, 38.229, 40.786, 43.343, 45.900, 48.457, 51.014, 71.471, 74.029",
        config_openpanevap_data_month_avg: "0.0, 230.00000, 209.00000, 162.00000, 105.00000, 68.00000, 45.00000, 50.00000, 68.00000, 92.00000, 138.00000, 171.00000, 211.00000, 26.64700, 28.82700, 31.00700, 33.18700, 35.36700, 37.54700, 39.72700, 41.90700, 44.08700, 46.26700, 63.70700, 65.88700, 29.02700, 31.88700, 34.74700, 37.60700, 40.46700, 43.32700, 46.18700, 49.04700, 51.90700, 54.76700, 77.64700, 80.50700, 28.00000, 30.55700, 33.11400, 35.67100, 38.22900, 40.78600, 43.34300, 45.90000, 48.45700, 51.01400, 71.47100, 74.02900, 78.41850, 75.06775, 65.21700, 52.86625, 45.51575, 41.66500, 44.81425, 51.21350, 59.11275, 72.51200, 95.95625, 107.85575",
        config_openpanevap_data_lastyearcopy: "0.0, 230.00, 209.00, 162.00, 105.00, 68.000, 45.000, 50.000, 68.000, 92.000, 138.00, 171.00, 211.00, 26.647, 28.827, 31.007, 33.187, 35.367, 37.547, 39.727, 41.907, 44.087, 46.267, 63.707, 65.887, 29.027, 31.887, 34.747, 37.607, 40.467, 43.327, 46.187, 49.047, 51.907, 54.767, 77.647, 80.507, 28.000, 30.557, 33.114, 35.671, 38.229, 40.786, 43.343, 45.900, 48.457, 51.014, 71.471, 74.029, 28.000, 30.557, 33.114, 35.671, 38.229, 40.786, 43.343, 45.900, 48.457, 51.014, 71.471, 74.029",
      }},
       
  methods: {
    
  }}
</script>
