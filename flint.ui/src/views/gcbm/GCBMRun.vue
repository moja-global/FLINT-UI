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
            <h2 class="text-2xl font-bold mb-2 text-gray-800">
              GCBM simulation workflow
            </h2>
            <p class="text-gray-700">
              Follow the steps below to simulate GCBM runs.
            </p>
          </div>

          <div class="flex flex-col mt-4">
            <StepperStatic />

            <div class="flex justify-center flex-wrap my-5">
              <div class="w-full lg:w-6/12 xl:w-2/12 px-4 content-center" />
              <div
                class="
                  flex
                  w-full
                  lg:w-6/12
                  xl:w-8/12
                  px-4
                  content-center
                  justify-center
                "
              >
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

              <div class="w-full lg:w-6/12 xl:w-2/12 px-4 content-center" />
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
import axios from 'axios'

export default {
  name: 'DashboardPage',
  components: {
    StepperGCBM,
    StepperStatic
  },

  data: () => ({
    // formData: new FormData(),
    simulation_title: ''
  }),

  methods: {
    // add_title_to_formdata: function () {
    //   this.formData.append('title', this.$store.state.gcbm.DropdownSelectedSim)
    //   console.log([...this.formData])
    // },
    runSim: function () {
      // var bodyFormData = new FormData()
      // this.add_title_to_formdata()
      var bodyFormData = new FormData()
      bodyFormData.append('title', this.$store.state.gcbm.DropdownSelectedSim)
      console.log(this.$store.state.gcbm.DropdownSelectedSim)
      // bodyFormData.append('title', this.$store.state.gcbm.DropdownSelectedSim)
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
      // var bodyFormData = new FormData()
      // this.add_title_to_formdata()
      var bodyFormData = new FormData()
      bodyFormData.append('title', this.$store.state.gcbm.DropdownSelectedSim)
      console.log(this.$store.state.gcbm.DropdownSelectedSim)
      // bodyFormData.append('title', this.$store.state.gcbm.DropdownSelectedSim)
      console.log([...bodyFormData])

      axios
        .post('http://127.0.0.1:8081/gcbm/status', bodyFormData)
        .then((response) => {
          this.$toast.success(`${response.data.finished}`, { timeout: 5000 })
          console.log(response)
        })
        .catch((error) => {
          this.$toast.error(`${error}`, { timeout: 2000 })
          console.log(error)
        })
    },

    downloadSim: function () {
      // var bodyFormData = new FormData()
      // this.add_title_to_formdata()
      var bodyFormData = new FormData()
      bodyFormData.append('title', this.$store.state.gcbm.DropdownSelectedSim)
      console.log(this.$store.state.gcbm.DropdownSelectedSim)
      // bodyFormData.append('title', this.$store.state.gcbm.DropdownSelectedSim)
      console.log([...bodyFormData])

      axios
        .post('http://127.0.0.1:8081/gcbm/download', bodyFormData, {
          responseType: 'text'
        })
        // .then((response) => {
        //   this.$toast.success(`${response}`, { timeout: 5000 })
        //   console.log(response)
        // })
        // .catch((error) => {
        //   this.$toast.error(`${error}`, { timeout: 2000 })
        //   console.log(error)
        // })

        .then((response) => {
          this.$toast.success(`${response}`, { timeout: 5000 })
          console.log(response)
          const url = new Blob([response.data], { type: 'application/zip' })
          console.log(response.data)
          const link = document.createElement('a')
          link.href = url
          link.setAttribute('download', 'gcbm_run_ouput.zip')
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
