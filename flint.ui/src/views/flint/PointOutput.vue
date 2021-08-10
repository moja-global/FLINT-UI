<template>
  <div class="chart-wrapper">
    <span>Point module</span>
    <div id="charts">
      <div id="chart1">
        <apexchart
          type="line"
          height="300"
          :options="chartOptionsArea"
          :series="series"
        />
      </div>
      <div id="chart2">
        <apexchart
          type="area"
          height="150"
          :options="chartOptionsBrush"
          :series="series"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BrushCharts',
  data: function () {
    return {
      series: [
        {
          name: 'Pool 1',
          data: this.$store.state.point.Point_config_pool_1
        },
        {
          name: 'Pool 2',
          data: this.$store.state.point.Point_config_pool_2
        },
        {
          name: 'Pool 3',
          data: this.$store.state.point.Point_config_pool_3
        }
      ],
      chartOptionsArea: {
        chart: {
          id: 'chartArea',
          toolbar: {
            autoSelected: 'pan',
            show: true
          }
        },
        colors: ['#546E7A', '#0ff1ce', '#bada55'],
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
          type: 'numeric'
        }
      },
      chartOptionsBrush: {
        chart: {
          id: 'chartBrush',
          brush: {
            target: 'chartArea',
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
        colors: ['#008FFB'],
        fill: {
          gradient: {
            enabled: true,
            opacityFrom: 0.91,
            opacityTo: 0.1
          }
        },
        xaxis: {
          type: 'numeric',
          tooltip: {
            enabled: false
          }
        },
        yaxis: {
          tickAmount: 2
        }
      }
    }
  },
  computed: {
    received_data: {
      get() {
        return this.$store.state.point.received_data
      }
    },
    Point_config_pool_1() {
      return this.$store.state.point.Point_config_pool_1
    },
    Point_config_pool_2() {
      return this.$store.state.point.Point_config_pool_2
    },
    Point_config_pool_3() {
      return this.$store.state.point.Point_config_pool_3
    }
  },

  beforeMount() {
    this.$store.dispatch('process_point_config')
    console.log('from outputs.vue - this.Point_config_pool_1')
    console.log(typeof this.$store.state.point.Point_config_pool_1)
  },

  methods: {
    get_Point_config_pool_1() {
      let arr = this.$store.state.point.Point_config_pool_1
      console.log('pool 1 from state')
      console.log(arr)
      return arr
    },

    get_Point_config_pool_2() {
      let arr = this.$store.state.point.Point_config_pool_2
      console.log('pool 2 from state')
      console.log(arr)
      return arr
    },

    get_Point_config_pool_3() {
      let arr = this.$store.state.point.Point_config_pool_3
      console.log('pool 3 from state')
      console.log(arr)
      return arr
    }
  }
}
</script>
<style>
div.chart-wrapper {
  padding-top: 150px;
}
</style>
