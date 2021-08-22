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

          <div class="flex flex-col">
            <div class="my-5">
              <div class="flex">
                <div class="w-1/3 text-center px-6">
                  <div
                    class="
                      bg-gray-300
                      rounded-lg
                      flex
                      items-center
                      justify-center
                      border border-gray-200
                    "
                  >
                    <div
                      class="
                        w-1/3
                        bg-transparent
                        h-20
                        flex
                        items-center
                        justify-center
                        icon-step
                      "
                    >
                      <i class="fas fa-plus fa-lg" />
                    </div>
                    <div
                      class="
                        w-2/3
                        bg-gray-200
                        h-24
                        flex flex-col
                        items-center
                        justify-center
                        px-1
                        rounded-r-lg
                        body-step
                      "
                    >
                      <h2 class="font-bold text-sm">Create a new simulation</h2>
                      <p class="text-xs text-gray-600">
                        Click the new button below
                      </p>
                    </div>
                  </div>
                </div>
                <div class="flex-1 flex items-center justify-center">
                  <i class="fas fa-arrow-right fa-2x" />
                </div>
                <div class="w-1/3 text-center px-6">
                  <div
                    class="
                      bg-gray-300
                      rounded-lg
                      flex
                      items-center
                      justify-center
                      border border-gray-200
                    "
                  >
                    <div
                      class="
                        w-1/3
                        bg-transparent
                        h-20
                        flex
                        items-center
                        justify-center
                        icon-step
                      "
                    >
                      <i class="far fa-file fa-lg" />
                    </div>
                    <div
                      class="
                        w-2/3
                        bg-gray-200
                        h-24
                        flex flex-col
                        items-center
                        justify-center
                        px-1
                        rounded-r-lg
                        body-step
                      "
                    >
                      <h2 class="font-bold text-sm">Upload file</h2>
                      <p class="text-xs text-gray-600">Dataset file for GCBM</p>
                    </div>
                  </div>
                </div>
                <div class="flex-1 flex items-center justify-center">
                  <i class="fas fa-arrow-right fa-2x" />
                </div>
                <div class="w-1/3 text-center px-6">
                  <div
                    class="
                      bg-gray-300
                      rounded-lg
                      flex
                      items-center
                      justify-center
                      border border-gray-200
                    "
                  >
                    <div
                      class="
                        w-1/3
                        bg-transparent
                        h-20
                        flex
                        items-center
                        justify-center
                        icon-step
                      "
                    >
                      <i class="fas fa-cogs fa-lg" />
                    </div>
                    <div
                      class="
                        w-2/3
                        bg-gray-200
                        h-24
                        flex flex-col
                        items-center
                        justify-center
                        px-1
                        rounded-r-lg
                        body-step
                      "
                    >
                      <h2 class="font-bold text-sm">Configure</h2>
                      <p class="text-xs text-gray-600">
                        Change configuration parameters
                      </p>
                    </div>
                  </div>
                </div>

                <div class="flex-1 flex items-center justify-center">
                  <i class="fas fa-arrow-right fa-2x" />
                </div>
                <div class="w-1/3 text-center px-6">
                  <div
                    class="
                      bg-gray-300
                      rounded-lg
                      flex
                      items-center
                      justify-center
                      border border-gray-200
                    "
                  >
                    <div
                      class="
                        w-1/3
                        bg-transparent
                        h-20
                        flex
                        items-center
                        justify-center
                        icon-step
                      "
                    >
                      <i class="fas fa-check fa-lg" />
                    </div>
                    <div
                      class="
                        w-2/3
                        bg-gray-200
                        h-24
                        flex flex-col
                        items-center
                        justify-center
                        px-1
                        rounded-r-lg
                        body-step
                      "
                    >
                      <h2 class="font-bold text-sm">Run</h2>
                      <p class="text-xs text-gray-600">
                        Run the simulation with new configs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-wrap my-5">
              <div class="w-full px-4 content-center">
                <FileUpload />
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

export default {
  name: 'DashboardPage',
  components: {
    StepperGCBM,
    FileUpload
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
      console.log(this.$store.state.gcbm.title)
      //function to send the title to API
      this.$store.dispatch('send_new_gcbm_job_title')
    }
  }
}
</script>

<style>
.vue-dropzone > .dz-preview .dz-progress .dz-upload {
  background-color: #73e8a3;
}

div#dropzone {
  border-radius: 10px;
}

.dz-default.dz-message {
  font-size: larger;
}

.vue-dropzone > .dz-preview .dz-details {
  background-color: #2e382b;
}

.dz-filename {
  width: 100%;
  height: 100%;
}

span.data-dz-name {
  display: block;
}

#dropzone .dz-preview {
  width: 29.1%;
}

#dropzone .dz-preview .dz-image {
  width: 20px;
  height: 20px;
  margin-left: 20px;
  margin-bottom: 10px;
}
#dropzone .dz-preview .dz-image > div {
  width: inherit;
  height: inherit;
  border-radius: 50%;
  background-size: contain;
}
#dropzone .dz-preview .dz-image > img {
  width: 100%;
  display: none;
}

.dropzone .dz-preview.dz-image-preview .dz-details {
  opacity: 1;
}

#dropzone .dz-preview .dz-details {
  color: white;
  transition: opacity 0.2s linear;
  text-align: center;
}
#dropzone .dz-success-mark,
.dz-error-mark,
.dz-remove,
div.dz-image,
div.dz-size {
  display: none;
}
</style>
