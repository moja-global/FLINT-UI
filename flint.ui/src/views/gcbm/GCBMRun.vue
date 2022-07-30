<template>
  <div class="py-4 px-8 text-earth">
    <a-typography-title :level="2"><span class="font-normal text-earth"> Run </span></a-typography-title>
    <a-typography-text>
      <span class="text-earth mb-6 block"> Run the simulation on the configured parameters. </span>
    </a-typography-text>

    <div class="flex justify-items-center flex-row gap-2 mb-4">
      <a-typography-text>
        <span class=""> Active Simulation: </span>
      </a-typography-text>
      <a-typography-title :level="5" style="margin: 0">
        <span class="text-earth"> {{ simulation_title }} </span>
      </a-typography-title>
    </div>

    <a-row :gutter="[16, 16]">
      <a-col :span="24" :sm="8" class="buttons">
        <button
          class="
            hover:bg-earth hover:text-white
            text-gray-800
            font-semibold
            py-2
            px-4
            border border-gray-400
            rounded
            shadow
            flex
            items-center
            gap-2
          "
          @click="runSim"
        >
          <PlayCircleOutlined />
          <span class="whitespace-nowrap">Run simulation</span>
        </button>
      </a-col>

      <a-col :span="24" :sm="8" class="buttons">
        <button
          class="
            hover:bg-earth hover:text-white
            text-gray-800
            font-semibold
            py-2
            px-4
            border border-gray-400
            rounded
            shadow
            flex
            items-center
            gap-2
          "
          @click="checkStatus"
        >
          <QuestionCircleOutlined :style="{ fontSize: '16px' }" />
          <span>Check status</span>
        </button>
      </a-col>

      <a-col :span="24" :sm="8" class="buttons">
        <button
          class="
            hover:bg-earth hover:text-white
            text-gray-800
            font-semibold
            py-2
            px-4
            border border-gray-400
            rounded
            shadow
            flex
            items-center
            gap-2
          "
          @click="downloadSim"
        >
          <DownloadOutlined />
          <span class="whitespace-nowrap">Download simulation</span>
        </button>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { notification } from 'ant-design-vue'
import { PlayCircleOutlined, QuestionCircleOutlined, DownloadOutlined } from '@ant-design/icons-vue'
import { useStore } from 'vuex'

export default {
  name: 'GCBMRun',
  components: {
    PlayCircleOutlined,
    QuestionCircleOutlined,
    DownloadOutlined
  },

  setup() {
    const store = useStore()
    const simulation_title = store.state.gcbm.config.title

    function runSim() {
      var bodyFormData = new FormData()
      bodyFormData.append('title', store.state.gcbm.DropdownSelectedSim)
      console.log(store.state.gcbm.DropdownSelectedSim)
      console.log([...bodyFormData])

      fetch(`${process.env.VUE_APP_REST_API_GCBM}/gcbm/dynamic`, { method: 'POST', body: bodyFormData })
        .then((response) => {
          console.log(response)
          notification.success({
            message: response.data.status,
            duration: 5
          })
        })
        .catch((error) => {
          notification.error({
            message: `${error}`,
            duration: 5
          })
          console.log(error)
        })
    }

    function checkStatus() {
      var bodyFormData = new FormData()
      bodyFormData.append('title', store.state.gcbm.DropdownSelectedSim)
      console.log(store.state.gcbm.DropdownSelectedSim)
      console.log([...bodyFormData])

      fetch(`${process.env.VUE_APP_REST_API_GCBM}/gcbm/status`, { method: 'POST', body: bodyFormData })
        .then((response) => {
          notification.info({
            message: `${response.data.finished}`,
            duration: 5
          })
          store.commit('setSimulationProgressState', response.data.finished)
          console.log(response)
          console.log(store.state.gcbm.SimulationProgress)
        })
        .catch((error) => {
          notification.error({
            message: `${error}`,
            duration: 5
          })
          console.log(error)
        })
    }

    function downloadSim() {
      var bodyFormData = new FormData()
      bodyFormData.append('title', store.state.gcbm.DropdownSelectedSim)
      console.log(store.state.gcbm.DropdownSelectedSim)
      console.log([...bodyFormData])

      fetch(`${process.env.VUE_APP_REST_API_GCBM}/gcbm/download`, { method: 'POST' })
        .then((response) => {
          console.log(response)
          let blob = new Blob([response.data], { type: 'application/zip' })
          const url = window.URL.createObjectURL(blob)
          console.log(response.data)
          const link = document.createElement('a')
          link.href = url
          link.setAttribute('download', store.state.gcbm.DropdownSelectedSim + '_gcbm_run_ouput' + '.zip')
          document.body.appendChild(link)
          link.click()
        })
        .catch((error) => {
          notification.error({
            message: `${error}`,
            duration: 5
          })
          console.log(error)
        })
    }

    return { simulation_title, runSim, checkStatus, downloadSim }
  }
}
</script>
