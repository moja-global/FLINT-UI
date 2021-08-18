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
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h2 class="text-2xl font-bold mb-2 text-gray-800">
            Point example data visualisation table
          </h2>
        </div>
      </div>
    </div>

    <v-grid theme="compact" :source="rows" :columns="columns"></v-grid>
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
          name: 'step'
        },
        {
          prop: 'point_stepDate',
          name: 'stepDate'
        },
        {
          prop: 'point_stepLenInYears',
          name: 'stepLenInYears'
        },
        {
          prop: 'pool_1',
          name: 'Pool 1'
        },
        {
          prop: 'pool_2',
          name: 'Pool 2'
        },
        {
          prop: 'pool_3',
          name: 'Pool 3'
        }
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
        result[row]['point_stepLenInYears'] = point_stepLenInYears[row]
        result[row]['pool_1'] = pool_1[row]
        result[row]['pool_2'] = pool_2[row]
        result[row]['pool_3'] = pool_3[row]
      }
      console.log('result')
      console.log(result)
      return result
    }
  },
  beforeMount() {
    this.$store.dispatch('parse_point_results')
  }
}
</script>

<style>
revo-grid {
  height: 50%;
}
</style>
