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
              <div class="w-full px-4 content-center">
                <FileUpload ref="gcbmFileUpload" />
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
import FileUpload from '@/components/FileUpload/FileUpload.vue'
import StepperStatic from '@/components/Stepper/StepperStatic.vue'

export default {
  name: 'DashboardPage',
  components: {
    StepperGCBM,
    FileUpload,
    StepperStatic
  },

  data: () => ({
    multiple: null,
    simulation_title: ''
  }),

  methods: {
    hello() {
      this.$refs.gcbmFileUpload.triggerSend()
    },
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
