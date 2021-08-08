<template>
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
</template>

<script>
import dataForge from 'data-forge'

import Vue from 'vue'

import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)

// const dataForge = require('data-forge')

export default {
  name: 'BrushCharts',
  data: function() {
    return {
      series: [
        {
          data: this.generateDayWiseTimeSeries(
            new Date('11 Feb 2017').getTime(),
            185,
            {
              min: 30,
              max: 90
            }
          )
        }
      ],
      chartOptionsArea: {
        chart: {
          id: 'chartArea',
          toolbar: {
            autoSelected: 'pan',
            show: false
          }
        },
        colors: ['#546E7A'],
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
          type: 'datetime'
        }
      },
      chartOptionsBrush: {
        chart: {
          id: 'chartBrush',
          brush: {
            target: 'chartArea',
            enabled: true
          },
          selection: {
            enabled: true,
            xaxis: {
              min: new Date('19 Jun 2017').getTime(),
              max: new Date('14 Aug 2017').getTime()
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
          type: 'datetime',
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
    received_data() {
      return this.$store.state.received_data
    }
  },
  beforeMount() {
    this.processDataset
  },

  methods: {
    generateDayWiseTimeSeries: function(baseval, count, yrange) {
      var i = 0
      var series = []
      while (i < count) {
        let x = baseval
        let y =
          Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min

        series.push([x, y])
        baseval += 86400000
        i++
      }

      return series
    },
    processDataset: function() {
      var dataset = this.received_data
      var pool_1 = [],
        pool_2 = [],
        pool_3 = [],
        simulation_step = []

      let lines = dataset.split('\n')
      lines.splice(0, 4)
      lines.splice(-4)
      dataset = lines.join('\n')
      const df = dataForge.fromCSV(dataset)
      let df_as_array = df.toArray()
      console.log(typeof df_as_array)
      console.log('array1')
      console.log(df_as_array[0]['Pool 1'])
      console.log(df_as_array.length)

      for (let step = 0; step < df_as_array.length; step++) {
        pool_1[step] = parseFloat(df_as_array[step]['Pool 1'])
        pool_2[step] = parseFloat(df_as_array[step]['Pool 2'])
        pool_3[step] = parseFloat(df_as_array[step]['Pool 3'])
        let x = step.toString()
        simulation_step[step] = x
      }

      console.log('pool 1')
      for (let step = 0; step < df_as_array.length; step++) {
        console.log(pool_1[step.toString()])
      }
      console.log(simulation_step)
      console.log(pool_1)
      console.log(pool_2)
      console.log(pool_3)
    }
  }
}
</script>

<style scoped>
#chart1,
#chart2 {
  max-width: 650px;
  margin: 35px auto;
}

#chart2 {
  position: relative;
  margin-top: -70px;
  margin-bottom: 0px;
}

#app {
  padding-top: 20px;
  padding-left: 10px;
  background: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 22px 35px -16px rgba(0, 0, 0, 0.1);
  max-width: 650px;
  margin: 35px auto;
}
</style>
