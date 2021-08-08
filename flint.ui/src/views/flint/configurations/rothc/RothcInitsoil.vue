<template>
  <div
    class="
      relative
      bg-gradient-to-r
      from-green-400
      to-blue-500
      md:pt-32
      pt-12
      w-full
    "
  >
    <div class="px-4 md:px-10 mx-auto w-full">
      <div>
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h2 class="text-2xl font-bold mb-2 text-gray-800">
            RothC example simulation configuration
          </h2>
          <p class="text-gray-700">
            Input the custom values in the fields below. Default values as
            placeholder text will be used if none provided.
          </p>
        </div>

        <div class="flex flex-col mt-10 w-1/2">
          <div class="px-4 content-center rounded-md m-12 mb-5">
            <div class="text-gray-700 md:flex md:items-center">
              <div class="mb-1 md:mb-0 md:w-2/3">
                <label for="forms-labelLeftInputCode">dpmaCMInit</label>
              </div>
              <div class="md:w-2/3 md:flex-grow">
                <input
                  v-model="newconfig_dpmaCMInit"
                  class="
                    w-full
                    h-10
                    px-3
                    text-base
                    placeholder-gray-600
                    border
                    rounded-lg
                    focus:shadow-outline
                  "
                  type="text"
                />
              </div>
            </div>
          </div>

          <div class="px-4 content-center rounded-md m-12 mb-5">
            <div class="text-gray-700 md:flex md:items-center">
              <div class="mb-1 md:mb-0 md:w-2/3">
                <label for="forms-labelLeftInputCode">rpmaCMInit</label>
              </div>
              <div class="md:w-2/3 md:flex-grow">
                <input
                  v-model="newconfig_rpmaCMInit"
                  class="
                    w-full
                    h-10
                    px-3
                    text-base
                    placeholder-gray-600
                    border
                    rounded-lg
                    focus:shadow-outline
                  "
                  type="text"
                />
              </div>
            </div>
          </div>

          <div class="px-4 content-center rounded-md m-12 mb-5">
            <div class="text-gray-700 md:flex md:items-center">
              <div class="mb-1 md:mb-0 md:w-2/3">
                <label for="forms-labelLeftInputCode">biofCMInit</label>
              </div>
              <div class="md:w-2/3 md:flex-grow">
                <input
                  v-model="newconfig_biofCMInit"
                  class="
                    w-full
                    h-10
                    px-3
                    text-base
                    placeholder-gray-600
                    border
                    rounded-lg
                    focus:shadow-outline
                  "
                  type="text"
                />
              </div>
            </div>
          </div>

          <div class="px-4 content-center rounded-md m-12 mb-5">
            <div class="text-gray-700 md:flex md:items-center">
              <div class="mb-1 md:mb-0 md:w-2/3">
                <label for="forms-labelLeftInputCode">biosCMInit</label>
              </div>
              <div class="md:w-2/3 md:flex-grow">
                <input
                  v-model="newconfig_biosCMInit"
                  class="
                    w-full
                    h-10
                    px-3
                    text-base
                    placeholder-gray-600
                    border
                    rounded-lg
                    focus:shadow-outline
                  "
                  type="text"
                />
              </div>
            </div>
          </div>

          <div class="px-4 content-center rounded-md m-12 mb-5">
            <div class="text-gray-700 md:flex md:items-center">
              <div class="mb-1 md:mb-0 md:w-2/3">
                <label for="forms-labelLeftInputCode">humsCMInit</label>
              </div>
              <div class="md:w-2/3 md:flex-grow">
                <input
                  v-model="newconfig_humsCMInit"
                  class="
                    w-full
                    h-10
                    px-3
                    text-base
                    placeholder-gray-600
                    border
                    rounded-lg
                    focus:shadow-outline
                  "
                  type="text"
                />
              </div>
            </div>
          </div>

          <div class="px-4 content-center rounded-md m-12 mb-5">
            <div class="text-gray-700 md:flex md:items-center">
              <div class="mb-1 md:mb-0 md:w-2/3">
                <label for="forms-labelLeftInputCode">inrtCMInit</label>
              </div>
              <div class="md:w-2/3 md:flex-grow">
                <input
                  v-model="newconfig_inrtCMInit"
                  class="
                    w-full
                    h-10
                    px-3
                    text-base
                    placeholder-gray-600
                    border
                    rounded-lg
                    focus:shadow-outline
                  "
                  type="text"
                />
              </div>
            </div>
          </div>

          <div class="px-4 content-center rounded-md m-12 mb-5">
            <div class="text-gray-700 md:flex md:items-center">
              <div class="mb-1 md:mb-0 md:w-2/3">
                <label for="forms-labelLeftInputCode">TSMDInit</label>
              </div>
              <div class="md:w-2/3 md:flex-grow">
                <input
                  v-model="newconfig_TSMDInit"
                  class="
                    w-full
                    h-10
                    px-3
                    text-base
                    placeholder-gray-600
                    border
                    rounded-lg
                    focus:shadow-outline
                  "
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Stepper />
  </div>
</template>

<script>
import Stepper from '@/components/Stepper/StepperRothc.vue'

export default {
  components: {
    Stepper
  },
  computed: {
    newconfig_dpmaCMInit: {
      get() {
        return this.$store.state.rothc.RothC_config.Variables[13].initSoil
          .dpmaCMInit
      },
      set(newValue) {
        let tempval = newValue
        this.$store.commit('setNewConfig_dpmaCMInit', tempval)
      }
    },

    newconfig_rpmaCMInit: {
      get() {
        return this.$store.state.rothc.RothC_config.Variables[13].initSoil
          .rpmaCMInit
      },
      set(newValue) {
        let tempval = newValue
        this.$store.commit('setNewConfig_rpmaCMInit', tempval)
      }
    },

    newconfig_biofCMInit: {
      get() {
        return this.$store.state.rothc.RothC_config.Variables[13].initSoil
          .biofCMInit
      },
      set(newValue) {
        let tempval = newValue
        this.$store.commit('setNewConfig_biofCMInit', tempval)
      }
    },

    newconfig_biosCMInit: {
      get() {
        return this.$store.state.rothc.RothC_config.Variables[13].initSoil
          .biosCMInit
      },
      set(newValue) {
        let tempval = newValue
        this.$store.commit('setNewConfig_biosCMInit', tempval)
      }
    },

    newconfig_humsCMInit: {
      get() {
        return this.$store.state.rothc.RothC_config.Variables[13].initSoil
          .humsCMInit
      },
      set(newValue) {
        let tempval = newValue
        this.$store.commit('setNewConfig_humsCMInit', tempval)
      }
    },

    newconfig_inrtCMInit: {
      get() {
        return this.$store.state.rothc.RothC_config.Variables[13].initSoil
          .inrtCMInit
      },
      set(newValue) {
        let tempval = newValue
        this.$store.commit('setNewConfig_inrtCMInit', tempval)
      }
    },

    newconfig_TSMDInit: {
      get() {
        return this.$store.state.rothc.RothC_config.Variables[13].initSoil
          .TSMDInit
      },
      set(newValue) {
        let tempval = newValue
        this.$store.commit('setNewConfig_TSMDInit', tempval)
      }
    }
  }
}
</script>
