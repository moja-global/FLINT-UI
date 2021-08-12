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
                <label for="forms-labelLeftInputCode">bToCMaxTSMDRatio</label>
              </div>
              <div class="md:w-2/3 md:flex-grow">
                <input
                  v-model="newconfig_bToCMaxTSMDRatio"
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
                <label for="forms-labelLeftInputCode">dToRRatioInPres</label>
              </div>
              <div class="md:w-2/3 md:flex-grow">
                <input
                  v-model="newconfig_dToRRatioInPres"
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
                <label for="forms-labelLeftInputCode">encpFracHums</label>
              </div>
              <div class="md:w-2/3 md:flex-grow">
                <input
                  v-model="newconfig_encpFracHums"
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
                <label for="forms-labelLeftInputCode">evapoOpenRatio</label>
              </div>
              <div class="md:w-2/3 md:flex-grow">
                <input
                  v-model="newconfig_evapoOpenRatio"
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
                <label for="forms-labelLeftInputCode">fracHumsToBios</label>
              </div>
              <div class="md:w-2/3 md:flex-grow">
                <input
                  v-model="newconfig_fracHumsToBios"
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
                <label for="forms-labelLeftInputCode">fracManuCMToBiof</label>
              </div>
              <div class="md:w-2/3 md:flex-grow">
                <input
                  v-model="newconfig_fracManuCMToBiof"
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
                <label for="forms-labelLeftInputCode">fracManuCMToBios</label>
              </div>
              <div class="md:w-2/3 md:flex-grow">
                <input
                  v-model="newconfig_fracManuCMToBios"
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
                <label for="forms-labelLeftInputCode">fracManuCMToDpma</label>
              </div>
              <div class="md:w-2/3 md:flex-grow">
                <input
                  v-model="newconfig_fracManuCMToDpma"
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
                <label for="forms-labelLeftInputCode">fracManuCMToRpma</label>
              </div>
              <div class="md:w-2/3 md:flex-grow">
                <input
                  v-model="newconfig_fracManuCMToRpma"
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
                <label for="forms-labelLeftInputCode">fracPbioToBiof</label>
              </div>
              <div class="md:w-2/3 md:flex-grow">
                <input
                  v-model="newconfig_fracPbioToBiof"
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
                <label for="forms-labelLeftInputCode">sampleDepth</label>
              </div>
              <div class="md:w-2/3 md:flex-grow">
                <input
                  v-model="newconfig_sampleDepth"
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
                <label for="forms-labelLeftInputCode">sdcmRateMultBiof</label>
              </div>
              <div class="md:w-2/3 md:flex-grow">
                <input
                  v-model="newconfig_sdcmRateMultBiof"
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
                <label for="forms-labelLeftInputCode">sdcmRateMultBios</label>
              </div>
              <div class="md:w-2/3 md:flex-grow">
                <input
                  v-model="newconfig_sdcmRateMultBios"
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
                <label for="forms-labelLeftInputCode">sdcmRateMultDpm</label>
              </div>
              <div class="md:w-2/3 md:flex-grow">
                <input
                  v-model="newconfig_sdcmRateMultDpm"
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
                <label for="forms-labelLeftInputCode">sdcmRateMultHums</label>
              </div>
              <div class="md:w-2/3 md:flex-grow">
                <input
                  v-model="newconfig_sdcmRateMultHums"
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
                <label for="forms-labelLeftInputCode">sdcmRateMultRpm</label>
              </div>
              <div class="md:w-2/3 md:flex-grow">
                <input
                  v-model="newconfig_sdcmRateMultRpm"
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
    newconfig_bToCMaxTSMDRatio: {
      get() {
        return this.$store.state.rothc.RothC_config.Variables[14].soil.bToCMaxTSMDRatio
          .substr(2)
          .slice(0, -2)
      },
      set(newValue) {
        this.$store.commit(
          'setNewConfig_bToCMaxTSMDRatio',
          '$#' + newValue + '$#'
        )
      }
    },

    newconfig_dToRRatioInPres: {
      get() {
        return this.$store.state.rothc.RothC_config.Variables[14].soil.dToRRatioInPres
          .substr(2)
          .slice(0, -2)
      },
      set(newValue) {
        this.$store.commit(
          'setNewConfig_dToRRatioInPres',
          '$#' + newValue + '$#'
        )
      }
    },

    newconfig_encpFracHums: {
      get() {
        return this.$store.state.rothc.RothC_config.Variables[14].soil.encpFracHums
          .substr(2)
          .slice(0, -2)
      },
      set(newValue) {
        this.$store.commit('setNewConfig_encpFracHums', '$#' + newValue + '$#')
      }
    },

    newconfig_evapoOpenRatio: {
      get() {
        return this.$store.state.rothc.RothC_config.Variables[14].soil.evapoOpenRatio
          .substr(2)
          .slice(0, -2)
      },
      set(newValue) {
        this.$store.commit(
          'setNewConfig_evapoOpenRatio',
          '$#' + newValue + '$#'
        )
      }
    },

    newconfig_fracHumsToBios: {
      get() {
        return this.$store.state.rothc.RothC_config.Variables[14].soil.fracHumsToBios
          .substr(2)
          .slice(0, -2)
      },
      set(newValue) {
        this.$store.commit(
          'setNewConfig_fracHumsToBios',
          '$#' + newValue + '$#'
        )
      }
    },

    newconfig_fracManuCMToBiof: {
      get() {
        return this.$store.state.rothc.RothC_config.Variables[14].soil.fracManuCMToBiof
          .substr(2)
          .slice(0, -2)
      },
      set(newValue) {
        this.$store.commit(
          'setNewConfig_fracManuCMToBiof',
          '$#' + newValue + '$#'
        )
      }
    },

    newconfig_fracManuCMToBios: {
      get() {
        return this.$store.state.rothc.RothC_config.Variables[14].soil.fracManuCMToBios
          .substr(2)
          .slice(0, -2)
      },
      set(newValue) {
        this.$store.commit(
          'setNewConfig_fracManuCMToBios',
          '$#' + newValue + '$#'
        )
      }
    },

    newconfig_fracManuCMToDpma: {
      get() {
        return this.$store.state.rothc.RothC_config.Variables[14].soil.fracManuCMToDpma
          .substr(2)
          .slice(0, -2)
      },
      set(newValue) {
        this.$store.commit(
          'setNewConfig_fracManuCMToDpma',
          '$#' + newValue + '$#'
        )
      }
    },

    newconfig_fracManuCMToRpma: {
      get() {
        return this.$store.state.rothc.RothC_config.Variables[14].soil.fracManuCMToRpma
          .substr(2)
          .slice(0, -2)
      },
      set(newValue) {
        this.$store.commit(
          'setNewConfig_fracManuCMToRpma',
          '$#' + newValue + '$#'
        )
      }
    },

    newconfig_fracPbioToBiof: {
      get() {
        return this.$store.state.rothc.RothC_config.Variables[14].soil.fracPbioToBiof
          .substr(2)
          .slice(0, -2)
      },
      set(newValue) {
        this.$store.commit(
          'setNewConfig_fracPbioToBiof',
          '$#' + newValue + '$#'
        )
      }
    },

    newconfig_sampleDepth: {
      get() {
        return this.$store.state.rothc.RothC_config.Variables[14].soil.sampleDepth
          .substr(2)
          .slice(0, -2)
      },
      set(newValue) {
        this.$store.commit('setNewConfig_sampleDepth', '$#' + newValue + '$#')
      }
    },

    newconfig_sdcmRateMultBiof: {
      get() {
        return this.$store.state.rothc.RothC_config.Variables[14].soil.sdcmRateMultBiof
          .substr(2)
          .slice(0, -2)
      },
      set(newValue) {
        this.$store.commit(
          'setNewConfig_sdcmRateMultBiof',
          '$#' + newValue + '$#'
        )
      }
    },

    newconfig_sdcmRateMultBios: {
      get() {
        return this.$store.state.rothc.RothC_config.Variables[14].soil.sdcmRateMultBios
          .substr(2)
          .slice(0, -2)
      },
      set(newValue) {
        this.$store.commit(
          'setNewConfig_sdcmRateMultBios',
          '$#' + newValue + '$#'
        )
      }
    },

    newconfig_sdcmRateMultDpm: {
      get() {
        return this.$store.state.rothc.RothC_config.Variables[14].soil.sdcmRateMultDpm
          .substr(2)
          .slice(0, -2)
      },
      set(newValue) {
        this.$store.commit(
          'setNewConfig_sdcmRateMultDpm',
          '$#' + newValue + '$#'
        )
      }
    },

    newconfig_sdcmRateMultHums: {
      get() {
        return this.$store.state.rothc.RothC_config.Variables[14].soil.sdcmRateMultHums
          .substr(2)
          .slice(0, -2)
      },
      set(newValue) {
        this.$store.commit(
          'setNewConfig_sdcmRateMultHums',
          '$#' + newValue + '$#'
        )
      }
    },

    newconfig_sdcmRateMultRpm: {
      get() {
        return this.$store.state.rothc.RothC_config.Variables[14].soil.sdcmRateMultRpm
          .substr(2)
          .slice(0, -2)
      },
      set(newValue) {
        this.$store.commit(
          'setNewConfig_sdcmRateMultRpm',
          '$#' + newValue + '$#'
        )
      }
    }
  }
}
</script>
