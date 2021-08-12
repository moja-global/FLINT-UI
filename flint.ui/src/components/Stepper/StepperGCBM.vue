<template>
  <div class="sticky bottom-0 mt-0 z-50">
    <md-steppers md-sync-route md-dynamic-height>
      <md-step id="first" to="/gcbm/dashboard" md-label="New Simulation" />

      <md-step id="second" md-label="Upload dataset" />

      <md-step id="third" md-label="Configurations" />

      <md-step id="fourth" md-label="Run" />
    </md-steppers>
  </div>
</template>

<script>
export default {
  methods: {}
}
</script>
