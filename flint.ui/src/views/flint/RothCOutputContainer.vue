<template>
  <div class="outer-table">
    <div class="top-row">
      <div :class="{ active: isTable }" @click="isTable = true">Table</div>
      <div :class="{ active: !isTable }" @click="isTable = false">Graph</div>
    </div>
    <div class="full-w">
      <Table v-if="isTable" :columns="columns" :rows="rows" />
      <RothCOutput v-else />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import RothCOutput from './RothCOutput.vue'
import Table from './Table.vue'
import dayjs from 'dayjs'
import { useStore } from 'vuex'

export default {
  name: 'RothCOutputContainer',
  components: {
    RothCOutput,
    Table
  },
  setup() {
    const store = useStore()
    const isTable = ref(true)

    function getRothC_step() {
      console.log('store.state.rothc.RothC_step')
      console.log(this.store.state.rothc.RothC_step)
      return store.state.rothc.RothC_step
    }
    function getRothC_stepDate() {
      console.log('store.state.rothc.RothC_stepDate')
      console.log(store.state.rothc.RothC_stepDate)
      return store.state.rothc.RothC_stepDate
    }
    function getDPM() {
      console.log('store.state.rothc.DPM')
      console.log(store.state.rothc.DPM)
      return store.state.rothc.DPM
    }
    function getRPM() {
      console.log('store.state.rothc.RPM')
      console.log(store.state.rothc.RPM)
      return store.state.rothc.RPM
    }
    function getBIOF() {
      console.log('store.state.rothc.BIOF')
      console.log(store.state.rothc.BIOF)
      return store.state.rothc.BIOF
    }
    function getBIOS() {
      console.log('store.state.rothc.BIOS')
      console.log(store.state.rothc.BIOS)
      return store.state.rothc.BIOS
    }
    function getHUM() {
      console.log('store.state.rothc.HUM')
      console.log(store.state.rothc.HUM)
      return store.state.rothc.HUM
    }
    function getIOM() {
      console.log('store.state.rothc.IOM')
      console.log(store.state.rothc.IOM)
      return store.state.rothc.IOM
    }
    function getplantCM() {
      console.log('store.state.rothc.plantCM')
      console.log(store.state.rothc.plantCM)
      return store.state.rothc.plantCM
    }
    function getatmosphere() {
      console.log('store.state.rothc.atmosphere')
      console.log(store.state.rothc.atmosphere)
      return store.state.rothc.atmosphere
    }
    function generateDataRows() {
      var result = []
      var DPM = getDPM(),
        RPM = getRPM(),
        BIOF = getBIOF(),
        BIOS = getBIOS(),
        HUM = getHUM(),
        IOM = getIOM(),
        RothC_step = getRothC_step(),
        RothC_stepDate = getRothC_stepDate(),
        plantCM = getplantCM(),
        atmosphere = getatmosphere()
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
        var defaultDateFormat = new Date(dayjs(RothC_stepDate[row], 'YYYY-MM-DD:HH:mm:ss.SSSSSS'))
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

    const rows = generateDataRows()
    const columns = ref([
      {
        dataIndex: 'RothC_step',
        key: 'RothC_step',
        title: 'step'
      },
      {
        dataIndex: 'RothC_stepDate',
        key: 'RothC_stepDate',
        title: 'stepDate'
      },
      {
        dataIndex: 'plantCM',
        key: 'plantCM',
        title: 'plantCM'
      },
      {
        dataIndex: 'DPM',
        key: 'DPM',
        title: 'SoilDPM'
      },
      {
        dataIndex: 'RPM',
        key: 'RPM',
        title: 'SoilRPM'
      },
      {
        dataIndex: 'BIOF',
        key: 'BIOF',
        title: 'SoilBioF'
      },
      {
        dataIndex: 'BIOS',
        key: 'BIOS',
        title: 'SoilBioS'
      },
      {
        dataIndex: 'HUM',
        key: 'HUM',
        title: 'SoilHUM'
      },
      {
        dataIndex: 'IOM',
        key: 'IOM',
        title: 'SoilIOM'
      },
      {
        dataIndex: 'atmosphere',
        key: 'atmosphere',
        title: 'atmosphere'
      }
    ])

    return {
      isTable,
      columns,
      rows,
      getRothC_step,
      getRothC_stepDate,
      getDPM,
      getRPM,
      getBIOF,
      getBIOS,
      getHUM,
      getIOM,
      getplantCM,
      getatmosphere,
      generateDataRows
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
