<template>
  <div>
    <div class="chart-wrapper">
      <div id="charts">
        <div id="chart1">
          <apexchart type="line" height="300" :options="chartOptionsArea" :series="series" />
        </div>
        <div id="chart2">
          <apexchart type="area" height="150" :options="chartOptionsBrush" :series="series" />
        </div>
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
          name: 'Soil DPM',
          data: this.$store.state.rothc.DPM
        },
        {
          name: 'Soil RPM',
          data: this.$store.state.rothc.RPM
        },
        {
          name: 'Soil BioF',
          data: this.$store.state.rothc.BIOF
        },
        {
          name: 'Soil BioS',
          data: this.$store.state.rothc.BIOS
        },
        {
          name: 'Soil HUM',
          data: this.$store.state.rothc.HUM
        },
        {
          name: 'Soil IOM',
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
        colors: ['#EF476F', '#FFD166', '#06D6A0', '#118AB2', '#073B4C', '#008b8b'],
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
  }
}
</script>
