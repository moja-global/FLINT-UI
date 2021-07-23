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
        avgAirTemp - data_orig
        </h1>
    <textarea class="form-textarea mt-1 block w-full" rows="5" placeholder="" v-model="config_avgairtemp_data_orig"></textarea>
    
  </div>

  <div class="w-full px-4 content-center rounded-md m-12 mb-5">
        <h1 class="flex-auto text-xl font-semibold">
        avgAirTemp - data_month_avg
        </h1>
    <textarea class="form-textarea mt-1 block w-full" rows="5" placeholder="" v-model="config_avgairtemp_data_month_avg"></textarea>
    
  </div>

  <div class="w-full px-4 content-center rounded-md m-12 mb-5">
        <h1 class="flex-auto text-xl font-semibold">
        avgAirTemp - data_lastyearcopy
        </h1>
    <textarea class="form-textarea mt-1 block w-full" rows="5" placeholder="" v-model="config_avgairtemp_data_lastyearcopy"></textarea>
    
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
         config_avgairtemp_data_orig: "0.0, 22.5, 23.0, 20.4, 17.7, 14.4, 12.0, 11.4, 12.0, 13.4, 16.0, 18.4, 20.6, 22.5, 23.0, 20.4, 17.7, 14.4, 12.0, 11.4, 12.0, 13.4, 16.0, 18.4, 20.6, 22.5, 23.0, 20.4, 17.7, 14.4, 12.0, 11.4, 12.0, 13.4, 16.0, 18.4, 20.6, 22.5, 23.0, 20.4, 17.7, 14.4, 12.0, 11.4, 12.0, 13.4, 16.0, 18.4, 20.6",
         config_avgairtemp_data_month_avg: "0.0, 22.50000, 23.00000, 20.40000, 17.70000, 14.40000, 12.00000, 11.40000, 12.00000, 13.40000, 16.00000, 18.40000, 20.60000, 22.50000, 23.00000, 20.40000, 17.70000, 14.40000, 12.00000, 11.40000, 12.00000, 13.40000, 16.00000, 18.40000, 20.60000, 22.50000, 23.00000, 20.40000, 17.70000, 14.40000, 12.00000, 11.40000, 12.00000, 13.40000, 16.00000, 18.40000, 20.60000, 22.50000, 23.00000, 20.40000, 17.70000, 14.40000, 12.00000, 11.40000, 12.00000, 13.40000, 16.00000, 18.40000, 20.60000, 22.50000, 23.00000, 20.40000, 17.70000, 14.40000, 12.00000, 11.40000, 12.00000, 13.40000, 16.00000, 18.40000, 20.60000",
         config_avgairtemp_data_lastyearcopy: "0.0, 22.5, 23.0, 20.4, 17.7, 14.4, 12.0, 11.4, 12.0, 13.4, 16.0, 18.4, 20.6, 22.5, 23.0, 20.4, 17.7, 14.4, 12.0, 11.4, 12.0, 13.4, 16.0, 18.4, 20.6, 22.5, 23.0, 20.4, 17.7, 14.4, 12.0, 11.4, 12.0, 13.4, 16.0, 18.4, 20.6, 22.5, 23.0, 20.4, 17.7, 14.4, 12.0, 11.4, 12.0, 13.4, 16.0, 18.4, 20.6, 22.5, 23.0, 20.4, 17.7, 14.4, 12.0, 11.4, 12.0, 13.4, 16.0, 18.4, 20.6",
      }},
       
  methods: {
    
  }}
</script>
