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
  data() {
    return {
      current: 0
    }
  },

  mounted() {
    this.current = this.$route.params.current
  },

  methods: {
    onChange(current) {
      this.current = current

      if (current == 0) {
        this.$router.push({
          name: 'gcbmdashboard',
          params: { current }
        })
      } else if (current == 1) {
        this.$router.push({
          name: 'gcbmupload',
          params: { current }
        })
      } else if (current == 2) {
        this.$router.push({
          name: 'gcbmrun',
          params: { current }
        })
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
