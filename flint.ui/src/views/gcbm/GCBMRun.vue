<template>
  <div class="py-4 px-8 text-earth">
    <a-typography-title :level="2"><span class="font-normal text-earth"> Run </span></a-typography-title>
    <a-typography-text>
      <span class="text-earth mb-6 block"> Run the simulation on the configured parameters. </span>
    </a-typography-text>

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

export default {
  name: 'DashboardPage',
  components: {
    PlayCircleOutlined,
    QuestionCircleOutlined,
    DownloadOutlined
  },

  data: () => ({
    simulation_title: ''
  }),

  methods: {
    runSim: function () {
      var bodyFormData = new FormData()
      bodyFormData.append('title', this.$store.state.gcbm.DropdownSelectedSim)
      console.log(this.$store.state.gcbm.DropdownSelectedSim)
      console.log([...bodyFormData])

      fetch(`${process.env.VUE_APP_REST_API_GCBM}/gcbm/dynamic`, { method: 'POST', body: bodyFormData })
        .then((response) => {
          notification.success({
            message: response.data.status,
            duration: 5
          })
          console.log(response)
        })
        .catch((error) => {
          notification.error({
            message: `${error}`,
            duration: 5
          })
          console.log(error)
        })
    },

    checkStatus: function () {
      var bodyFormData = new FormData()
      bodyFormData.append('title', this.$store.state.gcbm.DropdownSelectedSim)
      console.log(this.$store.state.gcbm.DropdownSelectedSim)
      console.log([...bodyFormData])

      fetch(`${process.env.VUE_APP_REST_API_GCBM}/gcbm/status`, { method: 'POST', body: bodyFormData })
        .then((response) => {
          notification.info({
            message: `${response.data.finished}`,
            duration: 5
          })
          this.$store.commit('setSimulationProgressState', response.data.finished)
          console.log(response)
          console.log(this.$store.state.gcbm.SimulationProgress)
        })
        .catch((error) => {
          notification.error({
            message: `${error}`,
            duration: 5
          })
          console.log(error)
        })
    },

    downloadSim: function () {
      var bodyFormData = new FormData()
      bodyFormData.append('title', this.$store.state.gcbm.DropdownSelectedSim)
      console.log(this.$store.state.gcbm.DropdownSelectedSim)
      console.log([...bodyFormData])

      fetch(`${process.env.VUE_APP_REST_API_GCBM}/gcbm/download`, { method: 'POST' })
        .then((response) => {
          console.log(response)
          let blob = new Blob([response.data], { type: 'application/zip' })
          const url = window.URL.createObjectURL(blob)
          console.log(response.data)
          const link = document.createElement('a')
          link.href = url
          link.setAttribute('download', this.$store.state.gcbm.DropdownSelectedSim + '_gcbm_run_ouput' + '.zip')
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
  }
}
</script>
