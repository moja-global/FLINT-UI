<template>
  <div class="chart-wrapper">
    <div id="charts">
      <div id="chart1">
        <apexchart
          type="line"
          height="230"
          :options="chartOptionsArea"
          :series="series"
        />
      </div>
      <div id="chart2">
        <apexchart
          type="area"
          height="130"
          :options="chartOptionsBrush"
          :series="series"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { fromCSV } from "data-forge";

export default {
  name: "BrushCharts",
  data: function () {
    return {
      series: [
        {
          name: "Pool 1",
          data: this.$store.state.Point_config_pool_1
        },
        {
          name: "Pool 2",
          data: this.$store.state.Point_config_pool_2
        },
        {
          name: "Pool 3",
          data: this.$store.state.Point_config_pool_3
        }
      ],
      chartOptionsArea: {
        chart: {
          id: "chartArea",
          toolbar: {
            autoSelected: "pan",
            show: false
          }
        },
        colors: ["#546E7A", "#0ff1ce", "#bada55"],
        stroke: {
          width: 3
        },
        dataLabels: {
          enabled: false
        },
        fill: {
          opacity: 1
        },
        markers: {
          size: 0
        },
        xaxis: {
          type: "numeric"
        }
      },
      chartOptionsBrush: {
        chart: {
          id: "chartBrush",
          brush: {
            target: "chartArea",
            enabled: true,
            autoScaleYaxis: false
          },
          selection: {
            enabled: true,
            xaxis: {
              min: 1,
              max: 20
            }
          }
        },
        colors: ["#008FFB"],
        fill: {
          gradient: {
            enabled: true,
            opacityFrom: 0.91,
            opacityTo: 0.1
          }
        },
        xaxis: {
          type: "numeric",
          tooltip: {
            enabled: false
          }
        },
        yaxis: {
          tickAmount: 2
        }
      }
    };
  },
  computed: {
    received_data: {
      get() {
        return this.$store.state.received_data;
      }
    },
    Point_config_pool_1() {
      return this.$store.state.Point_config_pool_1;
    },
    Point_config_pool_2() {
      return this.$store.state.Point_config_pool_2;
    },
    Point_config_pool_3() {
      return this.$store.state.Point_config_pool_3;
    }
  },
  beforeMount() {
    this.$store.dispatch("process_point_config");
    console.log("from outputs.vue - this.Point_config_pool_1");
    console.log(typeof this.$store.state.Point_config_pool_1);
  },

  methods: {
    generateDayWiseTimeSeries: function (baseval, count, yrange) {
      var i = 0;
      var series = [];
      while (i < count) {
        var x = baseval;
        var y =
          Math.floor(Math.random() * (yrange.max - yrange.min + 1)) +
          yrange.min;

        series.push([x, y]);
        baseval += 86400000;
        i++;
      }
      console.log("example series");
      console.log(series);

      return series;
    },
    processDataset: function () {
      var dataset = this.received_data;
      var pool_1 = [],
        pool_2 = [],
        pool_3 = [],
        simulation_step = [];

      // remove header and footer
      var lines = dataset.split("\n");
      lines.splice(0, 4);
      lines.splice(-4);

      dataset = lines.join("\n");

      const df = fromCSV(dataset);
      var df_as_array = df.toArray();
      console.log(typeof df_as_array);
      console.log("array1");
      console.log(df_as_array[0]["Pool 1"]);
      console.log(df_as_array.length);

      for (let step = 0; step < df_as_array.length; step++) {
        pool_1[step] = parseFloat(df_as_array[step]["Pool 1"]);
        pool_2[step] = parseFloat(df_as_array[step]["Pool 2"]);
        pool_3[step] = parseFloat(df_as_array[step]["Pool 3"]);
        var x = step;
        simulation_step[step] = x;
      }

      console.log("pool 1");
      for (let step = 0; step < df_as_array.length; step++) {
        console.log(pool_1[step]);
      }
      console.log(simulation_step);
      console.log(pool_1);
      console.log(pool_2);
      console.log(pool_3);
    },

    get_Point_config_pool_1() {
      var arr = this.$store.state.Point_config_pool_1;
      console.log("pool 1 from state");
      console.log(arr);
      return arr;
    },

    get_Point_config_pool_2() {
      var arr = this.$store.state.Point_config_pool_2;
      console.log("pool 2 from state");
      console.log(arr);
      return arr;
    },

    get_Point_config_pool_3() {
      var arr = this.$store.state.Point_config_pool_3;
      console.log("pool 3 from state");
      console.log(arr);
      return arr;
    }
  }
};
</script>
<style>
div.chart-wrapper {
  padding-top: 100px;
}
</style>
