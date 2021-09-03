<template>
  <div>
    <div class="flex flex-wrap mt-4">
      <div
        class="
          relative
          bg-gradient-to-tl
          from-green-300
          via-blue-500
          to-purple-600
          md:pt-32
          pb-32
          pt-12
          w-full
          h-auto
        "
      >
        <div class="px-4 md:px-10 mx-auto w-full">
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <div>
              <h2 class="text-2xl font-bold mb-2 text-gray-800">
                GCBM simulation workflow
              </h2>
              <p class="text-gray-700">
                Follow the steps below to simulate GCBM runs. Click the toggle
                to auto download the simulation once complete.
              </p>
            </div>

            <Toggle @downloadsim="downloadSim" @checkstatus="checkStatus" />
          </div>

          <div class="flex flex-col mt-4">
            <StepperStatic />

            <div class="w-full my-5">
              <div class="w-8/12 px-4 mx-auto content-center justify-center">
                <div
                  class="
                    relative
                    flex flex-col
                    min-w-0
                    break-words
                    bg-white
                    rounded
                    mb-6
                    xl:mb-0
                    shadow-lg
                    items-center
                    justify-center
                  "
                >
                  <div class="flex-auto p-4">
                    <div class="relative w-full max-w-full flex-grow flex-1">
                      <span class="font-semibold text-xl text-blueGray-700">
                        Run a simulation
                      </span>

                      <label class="block mt-4">
                        <span class="text-gray-700 font-semibold text-lg"
                          >Selected simulation title:
                        </span>
                        <span class="text-red-600 font-semibold text-lg">{{
                          $store.state.gcbm.DropdownSelectedSim
                        }}</span>
                      </label>

                      <div class="p-5">
                        <div class="flex m-2">
                          <button
                            class="
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
                            @click="runSim"
                          >
                            <i class="far fa-play-circle"></i> Run simulation
                          </button>

                          <button
                            class="
                              mx-4
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
                            @click="checkStatus"
                          >
                            <i class="fas fa-question"></i> Check status
                          </button>

                          <button
                            class="
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
                            @click="downloadSim"
                          >
                            <i class="fas fa-download"></i> Download simulation
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <StepperGCBM />
  </div>
</template>

<script>
import StepperGCBM from '@/components/Stepper/StepperGCBM.vue'
import StepperStatic from '@/components/Stepper/StepperStatic.vue'
import Toggle from '@/components/Sliders/Toggle.vue'
import axios from 'axios'

export default {
  name: 'DashboardPage',
  components: {
    StepperGCBM,
    StepperStatic,
    Toggle
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
        .post('http://127.0.0.1:8081/gcbm/dynamic', bodyFormData)
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
        .post('http://127.0.0.1:8081/gcbm/status', bodyFormData)
        .then((response) => {
          this.$toast.info(`${response.data.finished}`, { timeout: 5000 })
          this.$store.commit(
            'setSimulationProgressState',
            response.data.finished
          )
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
        .post('http://127.0.0.1:8081/gcbm/download', bodyFormData, {
          responseType: 'arraybuffer'
        })
        .then((response) => {
          console.log(response)
          let blob = new Blob([response.data], { type: 'application/zip' })
          const url = window.URL.createObjectURL(blob)
          console.log(response.data)
          const link = document.createElement('a')
          link.href = url
          link.setAttribute(
            'download',
            this.$store.state.gcbm.DropdownSelectedSim +
              '_gcbm_run_ouput' +
              '.zip'
          )
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
