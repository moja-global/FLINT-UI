<template>
  <div
    class="w-min mt-3"
    @click="
      toggleActive = !toggleActive
      checkforAutoProgress()
    "
  >
    <div
      id="revert-toggle"
      class="
        w-10
        h-6
        items-center
        bg-red-600
        rounded-full
        p-1
        duration-300
        ease-in-out
        -mx-0
      "
      :class="{ 'bg-green-400': toggleActive }"
    >
      <div
        class="
          bg-white
          w-4
          h-4
          rounded-full
          shadow-md
          transform
          duration-300
          ease-in-out
        "
        :class="{ 'translate-x-4': toggleActive }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggleActive: false,
      isDownloaded: false
    }
  },
  methods: {
    checkforAutoProgress() {
      this.isDownloaded = false
      console.log('Current state of the switch: ', this.toggleActive)
      if (this.toggleActive == true) {
        console.log('toggled = true')
        this.interval = setInterval(() => {
          this.$emit('checkstatus')

          if (
            this.$store.state.gcbm.SimulationProgress ==
            'Output is ready to download at gcbm/download'
          ) {
            console.log('download now')
            this.$emit('downloadsim')
            this.isDownloaded = true
            document.getElementById('revert-toggle').click()
          }
        }, 30000)
      } else {
        clearInterval(this.interval)
      }
    }
  }
}
</script>
