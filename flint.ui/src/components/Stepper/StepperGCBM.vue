<template>
  <div class="stepper-container">
    <a-steps v-model:current="current" @change="onChange">
      <a-step title="New simulation" />
      <a-step title="Upload dataset" />
      <a-step title="Run | Status | Download" />
    </a-steps>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
export default {
  props: {
    initial: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const current = ref(props.initial)
    const router = useRouter()
    function onChange(current) {
      switch (current) {
        case 0:
          // New Simulation
          router.push({
            name: 'gcbmdashboard',
            params: { current }
          })
          break
        case 1:
          // Upload Dataset
          router.push({
            name: 'gcbmupload',
            params: { current }
          })
          break
        case 2:
          // Run | Status | Download
          router.push({
            name: 'gcbmrun',
            params: { current }
          })
          break
      }
    }
    return {
      current,
      onChange
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
