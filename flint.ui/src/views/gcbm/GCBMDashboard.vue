<template>
  <div>
    <div class="flex flex-wrap">
      <div class="relative w-full h-auto">
        <LandingPageNavbar />
        <div class="px-8 pb-6 sm:px-16 md:px-24 mx-auto w-full">
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h2 class="mt-3 text-2xl font-bold mb-2 text-gray-800">GCBM simulation workflow</h2>
            <p class="text-gray-700">Follow the steps below to simulate GCBM runs.</p>
          </div>

          <div class="flex flex-col mt-4">
            <StepperStatic />

            <div class="w-full mt-6">
              <div class="w-4/12 px-4 mx-auto content-center">
                <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                  <div class="flex-auto p-4">
                    <div class="relative w-full max-w-full flex-grow flex-1">
                      <span class="font-semibold text-xl text-blueGray-700"> Create a new Simulation </span>

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
                          block
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
                        :disabled="isTitle()"
                        :class="{ 'opacity-25 cursor-not-allowed': isTitle() }"
                        @click="sendToAPI"
                      >
                        <i class="fas fa-plus" /> Create run
                      </button>
                    </div>
                    <p class="text-sm text-blueGray-400 mt-4">
                      <span class="whitespace-nowrap">Creates a new simulation run</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <StepperGCBM />
    <Footer />
  </div>
</template>

<script>
import StepperGCBM from '@/components/Stepper/StepperGCBM.vue'
import StepperStatic from '@/components/Stepper/StepperStatic.vue'
import LandingPageNavbar from '@/components/Navbars/LandingPageNavbar.vue'
import Footer from '@/components/Footer/Footer.vue'

export default {
  name: 'DashboardPage',
  components: {
    StepperGCBM,
    StepperStatic,
    LandingPageNavbar,
    Footer
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
