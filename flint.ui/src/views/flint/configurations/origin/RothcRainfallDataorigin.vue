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
    <textarea class="form-textarea mt-1 block w-full" rows="5" placeholder="0.0, 24.00, 23.00, 25.00, 55.00, 78.00, 77.00, 89.00, 77.00, 63.00, 52.00, 39.00, 29.00, 24.70, 24.60, 22.90, 20.90, 18.70, 15.20, 14.20, 14.80, 17.60, 20.60, 22.90, 24.00, 22.60, 23.50, 31.00, 22.00, 19.00, 16.50, 13.00, 13.20, 18.00, 20.50, 22.40, 27.00, 23.00, 24.00, 26.00, 21.00, 18.60, 16.00, 14.00, 14.10, 17.20, 20.00, 23.00, 26.00"></textarea>
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
