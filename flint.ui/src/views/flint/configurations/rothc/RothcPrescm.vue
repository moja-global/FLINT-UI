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
        presCM - data_orig
        </h1>
    <textarea class="form-textarea mt-1 block w-full" rows="5" placeholder="" v-model="config_prescm_data_orig"></textarea>
    
  </div>

  <div class="w-full px-4 content-center rounded-md m-12 mb-5">
        <h1 class="flex-auto text-xl font-semibold">
        presCM - data_month_avg
        </h1>
    <textarea class="form-textarea mt-1 block w-full" rows="5" placeholder="" v-model="config_prescm_data_month_avg"></textarea>
    
  </div>

  <div class="w-full px-4 content-center rounded-md m-12 mb-5">
        <h1 class="flex-auto text-xl font-semibold">
        presCM - data_lastyearcopy
        </h1>
    <textarea class="form-textarea mt-1 block w-full" rows="5" placeholder="" v-model="config_prescm_data_lastyearcopy"></textarea>
    
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
          config_prescm_data_orig: "0.0, 10.08, 13.50, 9.30, 8.60, 7.40, 7.50, 7.50, 8.60, 10.00, 10.20, 10.20, 10.30, 9.43, 13.40, 9.20, 8.50, 7.30, 7.40, 7.40, 8.50, 9.90, 10.10, 10.10, 10.20, 8.78, 11.40, 9.10, 9.20, 7.40, 6.80, 6.50, 10.70, 10.40, 9.40, 9.20, 9.70, 8.13, 12.30, 8.90, 9.80, 7.40, 6.10, 5.50, 12.80, 10.80, 8.60, 8.20, 9.10",
          config_prescm_data_month_avg: "0.0, 10.080000, 13.500000, 9.300000, 8.600000, 7.400000, 7.500000, 7.500000, 8.600000, 10.000000, 10.200000, 10.200000, 10.300000, 9.430000, 13.400000, 9.200000, 8.500000, 7.300000, 7.400000, 7.400000, 8.500000, 9.900000, 10.100000, 10.100000, 10.200000, 8.780000, 11.400000, 9.100000, 9.200000, 7.400000, 6.800000, 6.500000, 10.700000, 10.400000, 9.400000, 9.200000, 9.700000, 8.130000, 12.300000, 8.900000, 9.800000, 7.400000, 6.100000, 5.500000, 12.800000, 10.800000, 8.600000, 8.200000, 9.100000, 9.105000, 12.650000, 9.125000, 9.025000, 7.375000, 6.950000, 6.725000, 10.150000, 10.275000, 9.575000, 9.425000, 9.825000",
          config_prescm_data_lastyearcopy: "0.0, 10.08, 13.50, 9.30, 8.60, 7.40, 7.50, 7.50, 8.60, 10.00, 10.20, 10.20, 10.30, 9.43, 13.40, 9.20, 8.50, 7.30, 7.40, 7.40, 8.50, 9.90, 10.10, 10.10, 10.20, 8.78, 11.40, 9.10, 9.20, 7.40, 6.80, 6.50, 10.70, 10.40, 9.40, 9.20, 9.70, 8.13, 12.30, 8.90, 9.80, 7.40, 6.10, 5.50, 12.80, 10.80, 8.60, 8.20, 9.10, 8.13, 12.30, 8.90, 9.80, 7.40, 6.10, 5.50, 12.80, 10.80, 8.60, 8.20, 9.10",
      }},
       
  methods: {
    
  }}
</script>
