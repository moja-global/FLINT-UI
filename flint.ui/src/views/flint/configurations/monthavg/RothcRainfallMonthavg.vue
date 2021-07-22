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
        rainfall - data_month_avg
        </h1>
    <textarea class="form-textarea mt-1 block w-full" rows="5" placeholder="0.0, 24.00000, 23.00000, 25.00000, 55.00000, 78.00000, 77.00000, 89.00000, 77.00000, 63.00000, 52.00000, 39.00000, 29.00000, 24.70000, 24.60000, 22.90000, 20.90000, 18.70000, 15.20000, 14.20000, 14.80000, 17.60000, 20.60000, 22.90000, 24.00000, 22.60000, 23.50000, 31.00000, 22.00000, 19.00000, 16.50000, 13.00000, 13.20000, 18.00000, 20.50000, 22.40000, 27.00000, 23.00000, 24.00000, 26.00000, 21.00000, 18.60000, 16.00000, 14.00000, 14.10000, 17.20000, 20.00000, 23.00000, 26.00000, 23.57500, 23.77500, 26.22500, 29.72500, 33.57500, 31.17500, 32.55000, 29.77500, 28.95000, 28.27500, 26.82500, 26.50000"></textarea>
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
