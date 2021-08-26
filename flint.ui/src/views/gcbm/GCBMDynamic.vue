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
                        <span class="text-gray-700">Current simulation: </span>
                        <select
                          v-model="selected_simulation"
                          class="form-control"
                        >
                          <option
                            v-for="(sim, key) in simulation_list"
                            :key="key"
                            :value="key"
                          >
                            {{ sim }}
                          </option>

                          <!-- <option v-for="(selected_simulation, index) in simulation_list" 
            :key="index" 
            :value="selected_simulation.sim">@{{ selected_simulation }}
    </option> -->
                        </select>
                      </label>
                    </div>
                    <p class="text-sm text-blueGray-400 mt-4">
                      <span> Select a simulation from the dropdown</span>
                    </p>
                  </div>
                </div>
              </div>

              <div class="w-full lg:w-6/12 xl:w-3/12 px-4 content-center" />
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
    multiple: null,
    simulation_title: '',
    selected_simulation: '',
    simulation_list: {}
  }),

  mounted() {
    this.currentSimTitle(), this.onChangeSimulation()
  },

  methods: {
    currentSimTitle: function () {
      this.simulation_title = this.$store.state.gcbm.title
      console.log(this.simulation_title)
      // return this.simulation_title
    },
    onChangeSimulation: function () {
      //axios.get('http://localhost:8081/gcbm/ + selected_simulation)
      axios.get('http://localhost:8081/gcbm/list').then((response) => {
        this.simulation_list = response.data.data
        console.log(this.simulation_list)
        this.$toast.success(`${response.data.data}`, { timeout: 5000 })
        console.log(response.data)
        console.log(response.data.data)
      })
    }
  }
}
</script>
