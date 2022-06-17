<template>
  <div class="sticky bottom-0 mt-28 z-50">
    <md-steppers md-sync-route md-dynamic-height>
      <md-step id="first" to="/flint/configurations/point" md-label="Configure" />

      <md-step id="second" md-label="Run with new configs" @click="finalPool" />
    </md-steppers>
  </div>
</template>

<script>
export default {
  setup() {
    function finalPool() {
      this.$root.$refs.finalPoolValues()
    }
    return {
      finalPool
    }
  }
}
</script>
