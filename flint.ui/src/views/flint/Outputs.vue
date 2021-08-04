<template>
    <div class="chart-wrapper">
      <LineChart/>
    </div>
</template>

<script>
import { Bar } from "vue-chartjs";
const dataForge = require("data-forge");
import Chart from "chart.js";
import LineChart from "@/components/Chart.vue";

export default {
  computed: {
    received_data() {
      var dataset = this.$store.state.received_data;

      var lines = dataset.split("\n");
      lines.splice(0, 4);
      lines.splice(-4);
      var dataset = lines.join("\n");
      const df = dataForge.fromCSV(dataset);
      var df_as_array = df.toArray();
      console.log(typeof df_as_array);
      console.log("array1");
      console.log(df_as_array[0]["Pool 1"]);
      console.log(df_as_array.length);
      var pool_1 = [],
        pool_2 = [],
        pool_3 = [],
        simulation_step = [];
      for (var step = 0; step < df_as_array.length; step++) {
        pool_1[step] = parseFloat(df_as_array[step]["Pool 1"]);
        pool_2[step] = parseFloat(df_as_array[step]["Pool 2"]);
        pool_3[step] = parseFloat(df_as_array[step]["Pool 3"]);
        var x = step.toString();
        simulation_step[step] = x;
      }

      console.log("pool 1");
      for (var step = 0; step < df_as_array.length; step++) {
        console.log(pool_1[step.toString()]);
      }
      console.log(simulation_step);
      console.log(pool_1);
      console.log(pool_2);
      console.log(pool_3);
    },
  },
  data() {
    return {
      chartData: {
        Books: 24,
        Magazine: 30,
        Newspapers: 10,
      },
    };
  },
  methods: {
    get_pools: function(pool) {
      if (pool == "pool_1") return pool_1;
      else if (pool == "pool_2") return pool_2;
      else if (pool == "pool_3") return pool_3;
    },
  },

  name: "dashboard-page",
  components: {
    LineChart,
  },
};
</script>
<style>
div.chart-wrapper {
  padding-top:100px;

}
</style>
