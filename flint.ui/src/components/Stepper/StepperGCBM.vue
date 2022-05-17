<template>
  <div class="sticky bottom-0">
    <md-steppers md-sync-route md-dynamic-height md-alternative class="large-screen">
      <md-step id="first" to="/gcbm/dashboard" md-label="New Simulation" />

      <md-step id="second" to="/gcbm/upload" md-label="Upload dataset" />

      <md-step id="third" to="/gcbm/run" md-label="Run | Status | Download" />
    </md-steppers>

    <md-steppers md-sync-route md-dynamic-height md-vertical class="small-screen">
      <md-step id="first" to="/gcbm/dashboard" md-label="New Simulation" />

      <md-step id="second" to="/gcbm/upload" md-label="Upload dataset" />

      <md-step id="third" to="/gcbm/run" md-label="Run | Check Status | Download" />
    </md-steppers>
  </div>
</template>

<script>
export default {
  methods: {}
}
</script>

<style scoped>
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
