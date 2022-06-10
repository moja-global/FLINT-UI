<template>
  <div
    class="w-min mt-3"
    @click="
      () => {
        toggleActive = !toggleActive
        checkforAutoProgress()
      }
    "
  >
    <div
      id="revert-toggle"
      class="w-10 h-6 items-center bg-earth rounded-full p-1 duration-300 ease-in-out -mx-0"
      :class="{ 'bg-green-400': toggleActive }"
    >
      <div
        class="bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out"
        :class="{ 'translate-x-4': toggleActive }"
      ></div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
   
  setup(context) {
    const toggleActive = ref(false);
    const isDownloaded = ref(false);

    function checkforAutoProgress() {
       isDownloaded.value = false
      console.log('Current state of the switch: ', toggleActive.value)
      if ( toggleActive.value == true) {
        console.log('toggled = true')
        this.interval = setInterval(() => {
          context.emit('checkstatus')
          
          if (this.$store.state.gcbm.SimulationProgress == 'Output is ready to download at gcbm/download') {
            console.log('download now')
           context.emit('downloadsim')
            isDownloaded.value = true
            document.getElementById('revert-toggle').click()
          }
    }, 30000)
      } else {
        clearInterval(this.interval)
      } 
    }
    return { toggleActive, isDownloaded, checkforAutoProgress }
  
}
}
</script>