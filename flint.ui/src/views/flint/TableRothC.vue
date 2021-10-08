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
            ROTHC example data visualisation table
          </h2>

          <router-link to="/flint/rothc_output">
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
import VGrid from '@revolist/vue-datagrid'
export default {
  components: {
    VGrid
  },
  data() {
    return {
      columns: [
        {
          prop: 'RothC_step',
          name: 'step',
          size: 50
        },
        {
          prop: 'RothC_stepDate',
          name: 'stepDate',
          size: 200
        },
        {
          prop: 'RothC_stepLenInYears',
          name: 'stepLenInYears',
          size: 150
        },
        {
          prop: 'initialValues',
          name: 'initialValues',
          size: 100
        },
        {
          prop: 'plantCM',
          name: 'plantCM',
          size: 100
        },
        {
          prop: 'DPM',
          name: 'SoilDPM',
          size: 150
        },
        {
          prop: 'RPM',
          name: 'SoilRPM',
          size: 150
        },
        {
          prop: 'BIOF',
          name: 'SoilBioF',
          size: 150
        },
        {
          prop: 'BIOS',
          name: 'SoilBioS',
          size: 150
        },
        {
          prop: 'HUM',
          name: 'SoilHUM',
          size: 150
        },
        {
          prop: 'IOM',
          name: 'SoilIOM',
          size: 100
        },
        {
          prop: 'atmosphere',
          name: 'atmosphere',
          size: 150
        }
      ],
      rows: this.generateDataRows()
    }
  },
  beforeCreate() {
    this.$store.dispatch('parse_RothC_results')
  },
  methods: {
    RothC_step() {
      console.log('this.$store.state.rothc.RothC_step')
      console.log(this.$store.state.rothc.RothC_step)
      return this.$store.state.rothc.RothC_step
    },
    RothC_stepDate() {
      console.log('this.$store.state.rothc.RothC_stepDate')
      console.log(this.$store.state.rothc.RothC_stepDate)
      return this.$store.state.rothc.RothC_stepDate
    },
    RothC_stepLenInYears() {
      console.log('this.$store.state.rothc.RothC_stepLenInYears')
      console.log(this.$store.state.rothc.RothC_stepLenInYears)
      return this.$store.state.rothc.RothC_stepLenInYears
    },
    DPM() {
      console.log('this.$store.state.rothc.DPM')
      console.log(this.$store.state.rothc.DPM)
      return this.$store.state.rothc.DPM
    },
    RPM() {
      console.log('this.$store.state.rothc.RPM')
      console.log(this.$store.state.rothc.RPM)
      return this.$store.state.rothc.RPM
    },
    BIOF() {
      console.log('this.$store.state.rothc.BIOF')
      console.log(this.$store.state.rothc.BIOF)
      return this.$store.state.rothc.BIOF
    },
    BIOS() {
      console.log('this.$store.state.rothc.BIOS')
      console.log(this.$store.state.rothc.BIOS)
      return this.$store.state.rothc.BIOS
    },
    HUM() {
      console.log('this.$store.state.rothc.HUM')
      console.log(this.$store.state.rothc.HUM)
      return this.$store.state.rothc.HUM
    },
    IOM() {
      console.log('this.$store.state.rothc.IOM')
      console.log(this.$store.state.rothc.IOM)
      return this.$store.state.rothc.IOM
    },
    initialValues() {
      console.log('this.$store.state.rothc.initialValues')
      console.log(this.$store.state.rothc.initialValues)
      return this.$store.state.rothc.initialValues
    },
    plantCM() {
      console.log('this.$store.state.rothc.plantCM')
      console.log(this.$store.state.rothc.plantCM)
      return this.$store.state.rothc.plantCM
    },
    atmosphere() {
      console.log('this.$store.state.rothc.atmosphere')
      console.log(this.$store.state.rothc.atmosphere)
      return this.$store.state.rothc.atmosphere
    },
    generateDataRows: function () {
      var result = []
      var DPM = this.DPM(),
        RPM = this.RPM(),
        BIOF = this.BIOF(),
        BIOS = this.BIOS(),
        HUM = this.HUM(),
        IOM = this.IOM(),
        RothC_step = this.RothC_step(),
        RothC_stepDate = this.RothC_stepDate(),
        RothC_stepLenInYears = this.RothC_stepLenInYears(),
        initialValues = this.initialValues(),
        plantCM = this.plantCM(),
        atmosphere = this.atmosphere()
      console.log('DPM from generateDataRows')
      console.log(DPM)
      console.log('RPM from generateDataRows')
      console.log(RPM)
      console.log('BIOF from generateDataRows')
      console.log(BIOF)
      console.log('BIOS from generateDataRows')
      console.log(BIOS)
      console.log('HUM from generateDataRows')
      console.log(HUM)
      console.log('IOM from generateDataRows')
      console.log(IOM)
      console.log('initialValues from generateDataRows')
      console.log(initialValues)
      console.log('plantCM from generateDataRows')
      console.log(plantCM)
      console.log('atmosphere from generateDataRows')
      console.log(atmosphere)

      for (let j = 0; j < RothC_step.length; j++) {
        let row = j
        if (!result[row]) {
          result[row] = {}
        }
        result[row]['RothC_step'] = RothC_step[row]
        result[row]['RothC_stepDate'] = RothC_stepDate[row]
        result[row]['RothC_stepLenInYears'] = RothC_stepLenInYears[row]
        result[row]['DPM'] = DPM[row]
        result[row]['RPM'] = RPM[row]
        result[row]['BIOF'] = BIOF[row]
        result[row]['BIOS'] = BIOS[row]
        result[row]['HUM'] = HUM[row]
        result[row]['IOM'] = IOM[row]
        result[row]['initialValues'] = initialValues[row]
        result[row]['plantCM'] = plantCM[row]
        result[row]['atmosphere'] = atmosphere[row]
      }
      console.log('result')
      console.log(result)
      return result
    }
  }
}
</script>

<style>
revo-grid {
  height: 50%;
}
</style>
