<template>
  <div class="sticky bottom-0 mt-32 z-50">
    <md-steppers md-sync-route md-dynamic-height>
      <md-step id="first" to="/flint/configurations/rothc" md-label="RothC"> </md-step>

      <md-step id="second" to="/flint/configurations/rothc/openPanEvap" md-label="openPanEvap"> </md-step>

      <md-step id="third" to="/flint/configurations/rothc/avgAirTemp" md-label="avgAirTemp"> </md-step>

      <md-step id="fourth" to="/flint/configurations/rothc/presCM" md-label="presCM"> </md-step>

      <md-step id="fifth" to="/flint/configurations/rothc/soilCover" md-label="soilCover"> </md-step>

      <md-step id="sixth" to="/flint/configurations/rothc/initSoil" md-label="initSoil"> </md-step>

      <md-step id="seventh" to="/flint/configurations/rothc/soil" md-label="soil"> </md-step>

      <md-step id="eighth" md-label="Run" @click="apiRoute_rothc"> </md-step>
    </md-steppers>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    function apiRoute_rothc() {
      // sending the new rothc config
      console.log('ROTHC route invoked with new configs')
      store.dispatch('send_rothcConfig', { root: true })
    }
    return {
      apiRoute_rothc
    }
  }
}
</script>
