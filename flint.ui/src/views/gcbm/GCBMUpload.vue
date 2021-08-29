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
          <div class="bg-white p-6 rounded-lg shadow-lg flex">
            <h2 class="text-2xl font-bold text-gray-800 flex-1">
              GCBM simulation workflow
            </h2>
            <a @click="hello">
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
                <i class="far fa-file" /> Submit uploaded files
              </button>
            </a>
          </div>

          <div class="flex flex-col mt-4">
            <StepperStatic />

            <div class="flex flex-wrap my-5">
              <div class="w-full lg:w-6/12 xl:w-3/12 px-4 content-center" />
              <div class="w-full lg:w-6/12 xl:w-6/12 px-4 content-center">
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
                        List of ongoing simulations
                      </span>

                      <label class="block mt-4">
                        <span class="text-gray-700">Select a simulation: </span>
                        <select
                          v-model="sim_title"
                          class="form-control"
                          @change="onChangeSimulation($event)"
                        >
                          <option></option>
                          <option
                            v-for="(sim, key) in simulation_list"
                            :key="key"
                            :value="sim"
                          >
                            {{ sim }}
                          </option>
                        </select>
                      </label>
                    </div>
                    <p class="text-sm text-blueGray-400 mt-4">
                      <span>
                        Select a simulation from the dropdown to proceed</span
                      >
                    </p>
                  </div>
                </div>
              </div>

              <div class="w-full lg:w-6/12 xl:w-3/12 px-4 content-center" />
            </div>

            <!-- <div class="flex flex-wrap my-5"> -->
            <div class="w-full px-4 content-center">
              <FileUpload ref="gcbmFileUpload" />
            </div>
            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>

    <StepperGCBM />
  </div>
</template>

<script>
import StepperGCBM from '@/components/Stepper/StepperGCBM.vue'
import FileUpload from '@/components/FileUpload/FileUpload.vue'
import StepperStatic from '@/components/Stepper/StepperStatic.vue'
import axios from 'axios'

export default {
  name: 'DashboardPage',
  components: {
    StepperGCBM,
    FileUpload,
    StepperStatic
  },

  data: () => ({
    multiple: null,
    simulation_title: '',
    sim_title: '',
    selected_simulation: '',
    simulation_list: {}
  }),

  beforeMount() {
    this.currentSimTitle()
  },
  mounted() {
    this.getSimulations()
  },

  methods: {
    onChangeSimulation(event) {
      this.$store.commit('setDropdownSimState', event.target.value)
      console.log(event.target.value)
      console.log(this.$store.state.gcbm.DropdownSelectedSim)
    },
    currentSimTitle: function () {
      // this.simulation_title = this.$store.state.gcbm.DropdownSelectedSim
      // console.log(this.simulation_title)
      // return this.simulation_title
      return this.$store.state.gcbm.DropdownSelectedSim
    },
    getSimulations: function () {
      //axios.get('http://localhost:8081/gcbm/ + selected_simulation)
      axios.get('http://localhost:8081/gcbm/list').then((response) => {
        this.simulation_list = response.data.data
        console.log(this.simulation_list)
        this.$toast.success(`${response.data.data}`, { timeout: 5000 })
        // console.log(response.data)
        // this.simulation_list.append
        console.log(response.data.data)
        console.log(this.simulation_list)
      })
    },
    hello() {
      this.$refs.gcbmFileUpload.triggerSend()
    },
    checkforSimtitle() {
      if (this.$store.state.gcbm.DropdownSelectedSim === '') return false
      else {
        console.log(this.$store.state.gcbm.DropdownSelectedSim)
        return true
      }
    },
    isTitle() {
      if (this.checkforSimtitle()) {
        return false
      } else {
        return true
      }
    },
    sendToAPI() {
      console.log(this.$store.state.gcbm.DropdownSelectedSim, ' goto /gcbm/new')
      var simulation_title = this.$store.state.gcbm.DropdownSelectedSim
      console.log('simulation_title')
      console.log(simulation_title)

      this.$store.dispatch('title_setter', simulation_title)
      console.log('from set new title')
      console.log(this.$store.state.gcbm.title)
      //function to send the title to API
      this.$store.dispatch('send_new_gcbm_job_title')
    }
  }
}
</script>

<style>
.vue-dropzone > .dz-preview .dz-details {
  background-color: #2e382b;
}

#dropzone .dz-preview {
  width: 29.1%;
}
</style>
