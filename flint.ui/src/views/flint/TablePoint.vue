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
          prop: 'step',
          name: 'step'
        },
        {
          prop: 'stepDate',
          name: 'stepDate'
        },
        {
          prop: 'stepLenInYears',
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
    step() {
      console.log('this.$store.state.point.step')
      console.log(this.$store.state.point.step)
      return this.$store.state.point.step
    },
    stepDate() {
      console.log('this.$store.state.point.stepDate')
      console.log(this.$store.state.point.stepDate)
      return this.$store.state.point.stepDate
    },
    stepLenInYears() {
      console.log('this.$store.state.point.stepLenInYears')
      console.log(this.$store.state.point.stepLenInYears)
      return this.$store.state.point.stepLenInYears
    },
    generateDataRows: function () {
      var result = []
      var pool_1 = this.pool_1(),
        pool_2 = this.pool_2(),
        pool_3 = this.pool_3(),
        step = this.step(),
        stepDate = this.stepDate(),
        stepLenInYears = this.stepLenInYears()
      console.log('pool_1 from generateDataRows')
      console.log(pool_1)
      console.log('pool_2 from generateDataRows')
      console.log(pool_2)
      console.log('pool_3 from generateDataRows')
      console.log(pool_3)

      for (let j = 0; j < step.length; j++) {
        let row = j
        if (!result[row]) {
          result[row] = {}
        }
        result[row]['step'] = step[row]
        result[row]['stepDate'] = stepDate[row]
        result[row]['stepLenInYears'] = stepLenInYears[row]
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
