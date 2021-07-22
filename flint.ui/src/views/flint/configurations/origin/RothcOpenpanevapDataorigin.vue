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
    <textarea class="form-textarea mt-1 block w-full" rows="5" placeholder="0.0, 230.00, 209.00, 162.00, 105.00, 68.000, 45.000, 50.000, 68.000, 92.000, 138.00, 171.00, 211.00, 26.647, 28.827, 31.007, 33.187, 35.367, 37.547, 39.727, 41.907, 44.087, 46.267, 63.707, 65.887, 29.027, 31.887, 34.747, 37.607, 40.467, 43.327, 46.187, 49.047, 51.907, 54.767, 77.647, 80.507, 28.000, 30.557, 33.114, 35.671, 38.229, 40.786, 43.343, 45.900, 48.457, 51.014, 71.471, 74.029"></textarea>
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
