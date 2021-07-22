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
        avgAirTemp - data_lastyearcopy
        </h1>
    <textarea class="form-textarea mt-1 block w-full" rows="5" placeholder="0.0, 22.5, 23.0, 20.4, 17.7, 14.4, 12.0, 11.4, 12.0, 13.4, 16.0, 18.4, 20.6, 22.5, 23.0, 20.4, 17.7, 14.4, 12.0, 11.4, 12.0, 13.4, 16.0, 18.4, 20.6, 22.5, 23.0, 20.4, 17.7, 14.4, 12.0, 11.4, 12.0, 13.4, 16.0, 18.4, 20.6, 22.5, 23.0, 20.4, 17.7, 14.4, 12.0, 11.4, 12.0, 13.4, 16.0, 18.4, 20.6, 22.5, 23.0, 20.4, 17.7, 14.4, 12.0, 11.4, 12.0, 13.4, 16.0, 18.4, 20.6"></textarea>
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
