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
        rainfall - data_orig
        </h1>
    <textarea class="form-textarea mt-1 block w-full" rows="5" placeholder="" v-model="config_rainfall_data_orig"></textarea>
    
  </div>

  <div class="w-full px-4 content-center rounded-md m-12 mb-5">
        <h1 class="flex-auto text-xl font-semibold">
        rainfall - data_month_avg
        </h1>
    <textarea class="form-textarea mt-1 block w-full" rows="5" placeholder="" v-model="config_rainfall_data_month_avg"></textarea>
    
  </div>

  <div class="w-full px-4 content-center rounded-md m-12 mb-5">
        <h1 class="flex-auto text-xl font-semibold">
        rainfall - data_lastyearcopy
        </h1>
    <textarea class="form-textarea mt-1 block w-full" rows="5" placeholder="" v-model="config_rainfall_data_lastyearcopy"></textarea>
    
  </div>

</div>

</div>
</div>
</div>

</template>

<script>


export default {
  components: {
    
  },
  data() {
      return {
        config_rainfall_data_orig: "0.0, 24.00, 23.00, 25.00, 55.00, 78.00, 77.00, 89.00, 77.00, 63.00, 52.00, 39.00, 29.00, 24.70, 24.60, 22.90, 20.90, 18.70, 15.20, 14.20, 14.80, 17.60, 20.60, 22.90, 24.00, 22.60, 23.50, 31.00, 22.00, 19.00, 16.50, 13.00, 13.20, 18.00, 20.50, 22.40, 27.00, 23.00, 24.00, 26.00, 21.00, 18.60, 16.00, 14.00, 14.10, 17.20, 20.00, 23.00, 26.00",
        config_rainfall_data_month_avg: "0.0, 24.00000, 23.00000, 25.00000, 55.00000, 78.00000, 77.00000, 89.00000, 77.00000, 63.00000, 52.00000, 39.00000, 29.00000, 24.70000, 24.60000, 22.90000, 20.90000, 18.70000, 15.20000, 14.20000, 14.80000, 17.60000, 20.60000, 22.90000, 24.00000, 22.60000, 23.50000, 31.00000, 22.00000, 19.00000, 16.50000, 13.00000, 13.20000, 18.00000, 20.50000, 22.40000, 27.00000, 23.00000, 24.00000, 26.00000, 21.00000, 18.60000, 16.00000, 14.00000, 14.10000, 17.20000, 20.00000, 23.00000, 26.00000, 23.57500, 23.77500, 26.22500, 29.72500, 33.57500, 31.17500, 32.55000, 29.77500, 28.95000, 28.27500, 26.82500, 26.50000",
        config_rainfall_data_lastyearcopy: "0.0, 24.00, 23.00, 25.00, 55.00, 78.00, 77.00, 89.00, 77.00, 63.00, 52.00, 39.00, 29.00, 24.70, 24.60, 22.90, 20.90, 18.70, 15.20, 14.20, 14.80, 17.60, 20.60, 22.90, 24.00, 22.60, 23.50, 31.00, 22.00, 19.00, 16.50, 13.00, 13.20, 18.00, 20.50, 22.40, 27.00, 23.00, 24.00, 26.00, 21.00, 18.60, 16.00, 14.00, 14.10, 17.20, 20.00, 23.00, 26.00, 23.00, 24.00, 26.00, 21.00, 18.60, 16.00, 14.00, 14.10, 17.20, 20.00, 23.00, 26.00", 
      }},
       
  methods: {
    
  }}
</script>
