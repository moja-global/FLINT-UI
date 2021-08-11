<template>
  <div class="chart-wrapper">
    <span>RothC module</span>
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
          name: 'SoilDPM',
          data: this.$store.state.rothc.DPM
        },
        {
          name: 'SoilRPM',
          data: this.$store.state.rothc.RPM
        },
        {
          name: 'SoilBioF',
          data: this.$store.state.rothc.BIO
        },
        {
          name: 'SoilHUM',
          data: this.$store.state.rothc.HUM
        },
        {
          name: 'SoilIOM',
          data: this.$store.state.rothc.IOM
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
        colors: ['#EF476F', '#FFD166', '#06D6A0', '#118AB2', '#073B4C'],
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
            autoScaleYaxis: true
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
            enabled: true
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
    pool_1() {
      return this.$store.state.point.pool_1
    },
    pool_2() {
      return this.$store.state.point.pool_2
    },
    pool_3() {
      return this.$store.state.point.pool_3
    }
  },

  beforeMount() {
    this.$store.dispatch('parse_results')
  },

  methods: {
    get_DPM() {
      let arr = this.$store.state.rothc.DPM
      console.log('DPM from state')
      console.log(arr)
      return arr
    },

    get_RPM() {
      let arr = this.$store.state.rothc.RPM
      console.log('DPM from state')
      console.log(arr)
      return arr
    },

    get_BIO() {
      let arr = this.$store.state.rothc.BIO
      console.log('DPM from state')
      console.log(arr)
      return arr
    },

    get_HUM() {
      let arr = this.$store.state.rothc.HUM
      console.log('DPM from state')
      console.log(arr)
      return arr
    },

    get_IOM() {
      let arr = this.$store.state.rothc.IOM
      console.log('DPM from state')
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
