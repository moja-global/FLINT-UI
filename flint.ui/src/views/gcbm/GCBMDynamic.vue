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
      this.simulation_title = this.$store.state.gcbm.title
      console.log(this.simulation_title)
      return this.simulation_title
    },
    getSimulations: function () {
      //axios.get('http://localhost:8081/gcbm/ + selected_simulation)
      axios.get('http://localhost:8081/gcbm/list').then((response) => {
        this.simulation_list = response.data.data
        console.log(this.simulation_list)
        this.$toast.success(`${response.data.data}`, { timeout: 5000 })
        // console.log(response.data)
        console.log(response.data.data)
        console.log(this.simulation_list)
      })
    }
  }
}
</script>
