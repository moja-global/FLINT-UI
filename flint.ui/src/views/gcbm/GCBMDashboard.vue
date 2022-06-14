<template>
  <div>
    <div class="px-8 pb-6 sm:px-16 md:px-24 mt-8">
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <h2 class="mt-3 text-2xl font-bold mb-2 text-gray-800">GCBM simulation workflow</h2>
        <p class="text-gray-700">Follow the steps below to simulate GCBM runs.</p>
      </div>

      <StepperStatic />

      <div class="mt-8 pb-6 mx-auto" style="width: 100%; max-width: 300px">
        <div class="p-4 bg-white rounded shadow-lg">
          <div class="relative w-full max-w-full flex-grow flex-1">
            <h2 class="font-semibold text-xl text-blueGray-700">Create a new Simulation</h2>

            <input
              v-model="simulation_title"
              class="
                w-full
                mt-4
                h-10
                px-3
                mb-2
                text-base text-gray-700
                placeholder-gray-600
                border
                rounded-lg
                focus:shadow-outline
              "
              type="text"
              placeholder="Enter title for simulation"
            />

            <button
              class="
                w-full
                mt-4
                inline-flex
                items-center
                bg-white
                hover:bg-earth hover:text-white
                text-gray-800
                font-semibold
                py-2
                px-4
                border border-gray-400
                rounded
                shadow
              "
              :disabled="isTitle()"
              :class="{ 'opacity-25 cursor-not-allowed': isTitle() }"
              @click="sendToAPI"
            >
              <PlusOutlined :style="{marginRight: '16px'}" /> Create run
            </button>
          </div>

          <p class="text-sm text-blueGray-400 mt-4">Creates a new simulation run</p>
        </div>
      </div>
    </div>
    <StepperGCBM :initial="0" />
  </div>
</template>

<script>
import StepperGCBM from '@/components/Stepper/StepperGCBM.vue'
import StepperStatic from '@/components/Stepper/StepperStatic.vue'
import { PlusOutlined } from '@ant-design/icons-vue'

export default {
  name: 'DashboardPage',
  components: {
    StepperGCBM,
    StepperStatic,
    PlusOutlined
  },

  data: () => ({
    multiple: null,
    simulation_title: ''
  }),

  methods: {
    checkforSimtitle() {
      if (this.simulation_title === '') return false
      else {
        console.log(this.simulation_title)
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
      console.log(this.simulation_title, ' goto /gcbm/new')
      var simulation_title = this.simulation_title
      console.log('simulation_title')
      console.log(simulation_title)

      this.$store.dispatch('title_setter', simulation_title)
      console.log('from set new title')
      console.log(this.$store.state.gcbm.config.title)
      //function to send the title to API
      this.$store.dispatch('send_new_gcbm_job_title')
    },
    check_status() {
      this.$store.dispatch('check_gcbm_run_status')
    }
  }
}
</script>
