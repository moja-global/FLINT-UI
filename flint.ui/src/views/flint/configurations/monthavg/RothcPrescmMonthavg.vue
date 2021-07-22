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
        presCM - data_month_avg
        </h1>
    <textarea class="form-textarea mt-1 block w-full" rows="5" placeholder="0.0, 10.080000, 13.500000, 9.300000, 8.600000, 7.400000, 7.500000, 7.500000, 8.600000, 10.000000, 10.200000, 10.200000, 10.300000, 9.430000, 13.400000, 9.200000, 8.500000, 7.300000, 7.400000, 7.400000, 8.500000, 9.900000, 10.100000, 10.100000, 10.200000, 8.780000, 11.400000, 9.100000, 9.200000, 7.400000, 6.800000, 6.500000, 10.700000, 10.400000, 9.400000, 9.200000, 9.700000, 8.130000, 12.300000, 8.900000, 9.800000, 7.400000, 6.100000, 5.500000, 12.800000, 10.800000, 8.600000, 8.200000, 9.100000, 9.105000, 12.650000, 9.125000, 9.025000, 7.375000, 6.950000, 6.725000, 10.150000, 10.275000, 9.575000, 9.425000, 9.825000"></textarea>
    <div class="flex mb-4 text-sm font-medium">
      <div class="flex-auto flex space-x-5">
        <button class="w-full flex items-center justify-center bg-black text-white disabled:opacity-50" type="submit" disabled>Confirm Config</button>
      </div>
    </div>
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

      }},
       
  methods: {
    
  }}
</script>
