<template>
  <div class="chart-wrapper">
    <span>Point module</span>
    <div id="charts">
      <div id="chart1">
        <apexchart type="line" height="300" :options="chartOptionsArea" :series="series" />
      </div>
      <div id="chart2">
        <apexchart type="area" height="150" :options="chartOptionsBrush" :series="series" />
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { ref, onBeforeMount } from 'vue'
export default {
  name: 'BrushCharts',
  setup() {
    const store = useStore()

    const series = ref([
      {
        name: 'Pool 1',
        data: store.state.point.pool_1
      },
      {
        name: 'Pool 2',
        data: store.state.point.pool_2
      },
      {
        name: 'Pool 3',
        data: store.state.point.pool_3
      }
    ])

    const chartOptionsArea = ref({
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
    })

    const chartOptionsBrush = ref({
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
    })

    onBeforeMount(() => {
      store.dispatch('parse_point_results')
    })

    return {
      series,
      chartOptionsArea,
      chartOptionsBrush
    }
  }
}
</script>
<style>
div.chart-wrapper {
  padding-top: 40px !important;
  padding-left: 10px;
  padding-right: 10px;
}
</style>
