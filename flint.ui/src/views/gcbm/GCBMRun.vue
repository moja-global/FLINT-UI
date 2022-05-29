<template>
  <div>
    <LandingPageNavbar />
    <div class="px-8 pb-6 sm:px-16 md:px-24 mt-8">
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <h2 class="mt-3 text-2xl font-bold mb-2 text-gray-800">GCBM simulation workflow</h2>
        <p class="text-gray-700">
          Follow the steps below to simulate GCBM runs. Click the toggle to auto download the simulation once complete.
        </p>
        <Toggle @downloadsim="downloadSim" @checkstatus="checkStatus" />
      </div>

      <StepperStatic />

      <div class="mt-8 pb-6 mx-auto sim-card">
        <div class="p-4 bg-white rounded shadow-lg">
          <div>
            <h2 class="font-semibold text-xl text-blueGray-700">Run a simulation</h2>

            <label class="mt-4">
              <p class="text-gray-600 text-lg">Selected simulation title:</p>
              <span class="text-red-600 font-semibold text-lg">{{ $store.state.gcbm.DropdownSelectedSim }}</span>
            </label>

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
                  "
                  @click="runSim"
                >
                  <i class="far fa-play-circle"></i> Run simulation
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
                  "
                  @click="checkStatus"
                >
                  <i class="fas fa-question"></i> Check status
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
                  "
                  @click="downloadSim"
                >
                  <i class="fas fa-download"></i> Download simulation
                </button>
              </a-col>
            </a-row>
          </div>
        </div>
      </div>
    </div>

    <StepperGCBM />
    <Footer />
  </div>
</template>

<script>
import LandingPageNavbar from '../../components/Navbars/LandingPageNavbar.vue'
import StepperGCBM from '@/components/Stepper/StepperGCBM.vue'
import StepperStatic from '@/components/Stepper/StepperStatic.vue'
import Toggle from '@/components/Sliders/Toggle.vue'
import Footer from '@/components/Footer/Footer.vue'
import axios from 'axios'

export default {
  name: 'DashboardPage',
  components: {
    LandingPageNavbar,
    StepperGCBM,
    StepperStatic,
    Toggle,
    Footer
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

      axios
        .post(`${process.env.VUE_APP_REST_API_GCBM}/gcbm/dynamic`, bodyFormData)
        .then((response) => {
          this.$toast.success(`${response.data.status}`, { timeout: 5000 })
          console.log(response)
        })
        .catch((error) => {
          this.$toast.error(`${error}`, { timeout: 2000 })
          console.log(error)
        })
    },

    checkStatus: function () {
      var bodyFormData = new FormData()
      bodyFormData.append('title', this.$store.state.gcbm.DropdownSelectedSim)
      console.log(this.$store.state.gcbm.DropdownSelectedSim)
      console.log([...bodyFormData])

      axios
        .post(`${process.env.VUE_APP_REST_API_GCBM}/gcbm/status`, bodyFormData)
        .then((response) => {
          this.$toast.info(`${response.data.finished}`, { timeout: 5000 })
          this.$store.commit('setSimulationProgressState', response.data.finished)
          console.log(response)
          console.log(this.$store.state.gcbm.SimulationProgress)
        })
        .catch((error) => {
          this.$toast.error(`${error}`, { timeout: 2000 })
          console.log(error)
        })
    },

    downloadSim: function () {
      var bodyFormData = new FormData()
      bodyFormData.append('title', this.$store.state.gcbm.DropdownSelectedSim)
      console.log(this.$store.state.gcbm.DropdownSelectedSim)
      console.log([...bodyFormData])

      axios
        .post(`${process.env.VUE_APP_REST_API_GCBM}/gcbm/download`, bodyFormData, {
          responseType: 'arraybuffer'
        })
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
          this.$toast.error(`${error}`, { timeout: 2000 })
          console.log(error)
        })
    }
  }
}

</script>

<style scoped>
.sim-card {
  width: 100%;
  max-width: 400px;
}
.buttons > button {
  height: 80px;
}
@media screen and (max-width: 576px) {
  .sim-card {
    max-width: 300px;
  }
  .buttons > button {
    height: initial;
    width: 100%;
  }
}
</style>
