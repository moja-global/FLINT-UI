<template>
  <div>
    <div class="flex flex-wrap"></div>
    <div class="flex flex-wrap mt-4"></div>
    <div class="chart-wrapper">
      <Chart />
    </div>
    <div>{{received_data}}</div>
  </div>
</template>

<script>
import Chart from "@/components/Chart.vue";

export default {
  computed: {
    received_data() {
      return this.$store.state.Point_config;
    },
  },

  name: "dashboard-page",
  components: {
    Chart,
  },
};
</script>
<style>
div.chart-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 200px 200px;
}
</style>
