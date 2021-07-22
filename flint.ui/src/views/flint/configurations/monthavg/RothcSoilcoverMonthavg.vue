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
        soilCover - data_month_avg
        </h1>
    <textarea class="form-textarea mt-1 block w-full" rows="5" placeholder="1.0, 1.00, 0.90, 0.80, 0.36, 0.10, 0.20, 0.20, 0.50, 0.80, 0.29, 1.00, 0.60, 0.20, 1.00, 0.80, 0.59, 0.03, 0.10, 0.30, 0.17, 0.90, 0.49, 0.20, 0.80, 0.60, 0.00, 0.70, 0.40, 0.50, 0.40, 0.80, 0.20, 0.25, 0.00, 0.10, 0.70, 0.80, 0.68, 0.90, 0.21, 0.97, 0.20, 1.00, 0.23, 0.14, 1.00, 0.20, 0.60, 0.65, 0.65, 0.80, 0.39, 0.40, 0.23, 0.57, 0.28, 0.52, 0.44, 0.38, 0.68"></textarea>
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
