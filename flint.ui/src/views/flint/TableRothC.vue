<template>
  <div>
    <LandingPageNavbar />
    <div class="relative w-full h-full">
      <div class="mx-auto w-full h-auto">
        <div>
          <div class="p-6 pb-0 flex">
            <h2 class="text-2xl text-gray-800 flex-1">RothC example data visualisation table</h2>
            <router-link to="/flint/rothc_output">
              <Button :btn-size="'auto'"> <i class="far fa-image" /> Visualise on Graph </Button>
            </router-link>
          </div>
        </div>
      </div>

      <div class="h-2/3 mt-12 px-6">
        <v-grid style="height: 500px" theme="default" :source="rows" :columns="columns" :readonly="true"></v-grid>
      </div>
    </div>
  </div>
</template>

<script>
import VGrid from '@revolist/vue-datagrid'
import LandingPageNavbar from '@/components/Navbars/LandingPageNavbar.vue'
import Button from '@/components/Button/Button.vue'

export default {
  components: {
    VGrid,
    Button,
    LandingPageNavbar
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
          size: 150
        },
        {
          prop: 'plantCM',
          name: 'plantCM',
          size: 150
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
          size: 150
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
        var defaultDateFormat = new Date(RothC_stepDate[row])
        result[row]['RothC_stepDate'] = defaultDateFormat.toISOString().substring(0, 10)
        result[row]['DPM'] = DPM[row].toPrecision(5)
        result[row]['RPM'] = RPM[row].toPrecision(5)
        result[row]['BIOF'] = BIOF[row].toPrecision(5)
        result[row]['BIOS'] = BIOS[row].toPrecision(5)
        result[row]['HUM'] = HUM[row].toPrecision(5)
        result[row]['IOM'] = IOM[row].toPrecision(5)
        result[row]['plantCM'] = plantCM[row].toPrecision(5)
        result[row]['atmosphere'] = atmosphere[row].toPrecision(5)
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
