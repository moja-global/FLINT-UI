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
        soilCover - data_lastyearcopy
        </h1>
    <textarea class="form-textarea mt-1 block w-full" rows="5" placeholder="1.0, 1.000, 0.900, 0.800, 0.359, 0.100, 0.200, 0.200, 0.500, 0.800, 0.289, 1.000, 0.600, 0.200, 1.000, 0.800, 0.587, 0.027, 0.100, 0.300, 0.173, 0.900, 0.486, 0.200, 0.800, 0.600, 0.000, 0.700, 0.400, 0.500, 0.400, 0.800, 0.200, 0.250, 0.000, 0.100, 0.700, 0.800, 0.680, 0.900, 0.213, 0.973, 0.200, 0.999, 0.227, 0.140, 0.996, 0.200, 0.600, 0.800, 0.680, 0.900, 0.213, 0.973, 0.200, 0.999, 0.227, 0.140, 0.996, 0.200, 0.600"></textarea>
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
