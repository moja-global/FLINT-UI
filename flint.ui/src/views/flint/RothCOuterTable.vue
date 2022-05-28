<template>
  <div class="outer-table">
    <div class="top-row">
      <div :class="{ active: isTable }" @click="isTable = true">Table</div>
      <div :class="{ active: !isTable }" @click="isTable = false">Graph</div>
    </div>
    <div class="full-w">
      <RothCOutput v-if="!isTable" />
      <Table v-else :columns="columns" :rows="rows" />
    </div>
  </div>
</template>

<script>
/* eslint-disable no-alert, no-console */
import RothCOutput from './RothCOutput.vue'
import Table from './Table.vue'
export default {
  name: 'RothCOuterTable',
  components: {
    RothCOutput,
    Table
  },
  data() {
    return {
      isTable: true,
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
.outer-table {
  border: 1px solid #475447;
  border-radius: 5px;
}
.top-row {
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid #eeeef0;
}
.top-row div {
  width: 50%;
  text-align: center;
  padding: 16px;
  cursor: pointer;
}
.top-row .active {
  color: white;
  background-color: #475447;
}
</style>