<template>
  <div
    class="
      relative
      bg-gradient-to-r
      from-green-400
      to-blue-500
      md:pt-32
      pt-12
      w-full
      h-full
    "
  >
    <div class="px-4 md:px-10 mx-auto w-full h-auto">
      <div>
        <div class="bg-white p-6 rounded-lg shadow-lg flex">
          <h2 class="text-2xl font-bold text-gray-800 flex-1">
            Point example data visualisation table
          </h2>

          <router-link to="/flint/point_output">
            <button
              class="
                inline-block
                align-middle
                flex-initial
                bg-white
                hover:bg-black hover:text-white
                text-gray-800
                font-semibold
                py-2
                px-4
                border border-gray-400
                rounded
                shadow
              "
            >
              <i class="far fa-image" /> Visualise on Graph
            </button>
          </router-link>
        </div>
      </div>
    </div>

    <div class="h-2/3 mt-12 px-6">
      <v-grid
        style="height: 100%"
        theme="default"
        :source="rows"
        :columns="columns"
        :readonly="true"
      ></v-grid>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import VGrid from '@revolist/vue-datagrid'
export default {
  components: {
    VGrid
  },
  data() {
    return {
      columns: [
        {
          prop: 'point_step',
          name: 'step',
          size: 50
        },
        {
          prop: 'point_stepDate',
          name: 'stepDate',
          size: 200
        },
        {
          prop: 'point_stepLenInYears',
          name: 'stepLenInYears',
          size: 200
        },

        // stacked column
        {
        name: 'Pools',
        children: [
            {
            prop: 'pool_1',
            name: 'Pool 1',
            size: 150
          },
          {
            prop: 'pool_2',
            name: 'Pool 2',
            size: 150
          },
          {
            prop: 'pool_3',
            name: 'Pool 3',
            size: 150
          }
        ],

        },
      ],

      rows: this.generateDataRows()
    }
  },
  methods: {
    pool_1() {
      console.log('this.$store.state.point.pool_1')
      console.log(this.$store.state.point.pool_1)
      return this.$store.state.point.pool_1
    },
    pool_2() {
      console.log('this.$store.state.point.pool_2')
      console.log(this.$store.state.point.pool_2)
      return this.$store.state.point.pool_2
    },
    pool_3() {
      console.log('this.$store.state.point.pool_3')
      console.log(this.$store.state.point.pool_3)
      return this.$store.state.point.pool_3
    },
    point_step() {
      console.log('this.$store.state.point.point_step')
      console.log(this.$store.state.point.point_step)
      return this.$store.state.point.point_step
    },
    point_stepDate() {
      console.log('this.$store.state.point.point_stepDate')
      console.log(this.$store.state.point.point_stepDate)
      return this.$store.state.point.point_stepDate
    },
    point_stepLenInYears() {
      console.log('this.$store.state.point.point_stepLenInYears')
      console.log(this.$store.state.point.point_stepLenInYears)
      return this.$store.state.point.point_stepLenInYears
    },
    generateDataRows: function () {
      var result = []
      var pool_1 = this.pool_1(),
        pool_2 = this.pool_2(),
        pool_3 = this.pool_3(),
        point_step = this.point_step(),
        point_stepDate = this.point_stepDate(),
        point_stepLenInYears = this.point_stepLenInYears()
      console.log('pool_1 from generateDataRows')
      console.log(pool_1)
      console.log('pool_2 from generateDataRows')
      console.log(pool_2)
      console.log('pool_3 from generateDataRows')
      console.log(pool_3)

      for (let j = 0; j < point_step.length; j++) {
        let row = j
        if (!result[row]) {
          result[row] = {}
        }
        result[row]['point_step'] = point_step[row]
        result[row]['point_stepDate'] = point_stepDate[row]
        result[row]['point_stepLenInYears'] = point_stepLenInYears[row].toFixed(5)
        result[row]['pool_1'] = pool_1[row].toFixed(5)
        result[row]['pool_2'] = pool_2[row].toFixed(5)
        result[row]['pool_3'] = pool_3[row].toFixed(5)
      }
      console.log('result')
      console.log(result)
      return result
    }
  },
  beforeCreate() {
    this.$store.dispatch('parse_point_results')
  }
}
</script>

<style>
revo-grid {
  height: 100%;
}

div .rgHeaderCell, .header-rgRow{
  background: #000000;
  color: #fff;
}

div .header-content {
  color: #fff;
}

.rgCell {
  background-color: #fff;
}
</style>
