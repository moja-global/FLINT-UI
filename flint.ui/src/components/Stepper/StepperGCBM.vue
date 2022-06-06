<template>
  <div class="stepper-container">
    <a-steps :current="current" @change="onChange">
      <a-step title="New simulation" />
      <a-step title="Upload dataset" />
      <a-step title="Run | Status | Download" />
    </a-steps>
  </div>
</template>

<script>
export default {
  props: {
    initial: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      current: this.initial
    }
  },

  mounted() {
    this.current = this.$route.params.current || this.initial
  },

  methods: {
    onChange(current) {
      this.current = current

      switch (current) {
        case 0:
          // New Simulation
          this.$router.push({
            name: 'gcbmdashboard',
            params: { current }
          })
          break
        case 1:
          // Upload Dataset
          this.$router.push({
            name: 'gcbmupload',
            params: { current }
          })
          break
        case 2:
          // Run | Status | Download
          this.$router.push({
            name: 'gcbmrun',
            params: { current }
          })
          break
      }
    }
  }
}
</script>

<style scoped>
.stepper-container {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  padding: 40px;
}

.small-screen {
  display: block;
}
.large-screen {
  display: none;
}

@media screen and (min-width: 510px) {
  .small-screen {
    display: none;
  }
  .large-screen {
    display: block;
  }
}
</style>
