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
            ROTHC example data visualisation table
          </h2>
        </div>
      </div>
    </div>
    <v-grid theme="compact" :source="rows" :columns="columns"></v-grid>
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
          name: 'step'
        },
        {
          prop: 'RothC_stepDate',
          name: 'stepDate'
        },
        {
          prop: 'RothC_stepLenInYears',
          name: 'stepLenInYears'
        },
        {
          prop: 'initialValues',
          name: 'initialValues'
        },
        {
          prop: 'plantCM',
          name: 'plantCM'
        },
        {
          prop: 'DPM',
          name: 'SoilDPM'
        },
        {
          prop: 'RPM',
          name: 'SoilRPM'
        },
        {
          prop: 'BIOF',
          name: 'SoilBioF'
        },
        {
          prop: 'BIOS',
          name: 'SoilBioS'
        },
        {
          prop: 'HUM',
          name: 'SoilHUM'
        },
        {
          prop: 'IOM',
          name: 'SoilIOM'
        },
        {
          prop: 'atmosphere',
          name: 'atmosphere'
        }
      ],
      rows: this.generateDataRows()
    }
  },
  beforeMount() {
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
