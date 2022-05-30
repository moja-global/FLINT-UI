<template>
  <div class="flex flex-wrap gap-8">
    <div class="text-gray-700 flex-grow">
      <div class="text-gray-700">
        <div class="mb-1">
          <label for="forms-labelLeftInputCode" class="text-base">bToCMaxTSMDRatio</label>
        </div>
        <input
          v-model="newconfig_bToCMaxTSMDRatio"
          class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
          type="text"
        />
      </div>
    </div>

    <div class="text-gray-700 flex-grow">
      <div class="text-gray-700">
        <div class="mb-1">
          <label for="forms-labelLeftInputCode" class="text-base">dToRRatioInPres</label>
        </div>
        <input
          v-model="newconfig_dToRRatioInPres"
          class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
          type="text"
        />
      </div>
    </div>

    <div class="text-gray-700 flex-grow">
      <div class="text-gray-700">
        <div class="mb-1">
          <label for="forms-labelLeftInputCode" class="text-base">encpFracHums</label>
        </div>
        <input
          v-model="newconfig_encpFracHums"
          class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
          type="text"
        />
      </div>
    </div>

    <div class="text-gray-700 flex-grow">
      <div class="text-gray-700">
        <div class="mb-1">
          <label for="forms-labelLeftInputCode" class="text-base">evapoOpenRatio</label>
        </div>
        <input
          v-model="newconfig_evapoOpenRatio"
          class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
          type="text"
        />
      </div>
    </div>

    <div class="text-gray-700 flex-grow">
      <div class="text-gray-700">
        <div class="mb-1">
          <label for="forms-labelLeftInputCode" class="text-base">fracHumsToBios</label>
        </div>
        <input
          v-model="newconfig_fracHumsToBios"
          class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
          type="text"
        />
      </div>
    </div>

    <div class="text-gray-700 flex-grow">
      <div class="text-gray-700">
        <div class="mb-1">
          <label for="forms-labelLeftInputCode" class="text-base">fracManuCMToBiof</label>
        </div>
        <input
          v-model="newconfig_fracManuCMToBiof"
          class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
          type="text"
        />
      </div>
    </div>

    <div class="text-gray-700 flex-grow">
      <div class="text-gray-700">
        <div class="mb-1">
          <label for="forms-labelLeftInputCode" class="text-base">fracManuCMToBios</label>
        </div>
        <input
          v-model="newconfig_fracManuCMToBios"
          class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
          type="text"
        />
      </div>
    </div>

    <div class="text-gray-700 flex-grow">
      <div class="text-gray-700">
        <div class="mb-1">
          <label for="forms-labelLeftInputCode" class="text-base">fracManuCMToDpma</label>
        </div>
        <input
          v-model="newconfig_fracManuCMToDpma"
          class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
          type="text"
        />
      </div>
    </div>

    <div class="text-gray-700 flex-grow">
      <div class="text-gray-700">
        <div class="mb-1">
          <label for="forms-labelLeftInputCode" class="text-base">fracManuCMToRpma</label>
        </div>
        <input
          v-model="newconfig_fracManuCMToRpma"
          class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
          type="text"
        />
      </div>
    </div>

    <div class="text-gray-700 flex-grow">
      <div class="text-gray-700">
        <div class="mb-1">
          <label for="forms-labelLeftInputCode" class="text-base">fracPbioToBiof</label>
        </div>
        <input
          v-model="newconfig_fracPbioToBiof"
          class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
          type="text"
        />
      </div>
    </div>

    <div class="text-gray-700 flex-grow">
      <div class="text-gray-700">
        <div class="mb-1">
          <label for="forms-labelLeftInputCode" class="text-base">sampleDepth</label>
        </div>
        <input
          v-model="newconfig_sampleDepth"
          class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
          type="text"
        />
      </div>
    </div>

    <div class="text-gray-700 flex-grow">
      <div class="text-gray-700">
        <div class="mb-1">
          <label for="forms-labelLeftInputCode" class="text-base">sdcmRateMultBiof</label>
        </div>
        <input
          v-model="newconfig_sdcmRateMultBiof"
          class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
          type="text"
        />
      </div>
    </div>

    <div class="text-gray-700 flex-grow">
      <div class="text-gray-700">
        <div class="mb-1">
          <label for="forms-labelLeftInputCode" class="text-base">sdcmRateMultBios</label>
        </div>
        <input
          v-model="newconfig_sdcmRateMultBios"
          class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
          type="text"
        />
      </div>
    </div>

    <div class="text-gray-700 flex-grow">
      <div class="text-gray-700">
        <div class="mb-1">
          <label for="forms-labelLeftInputCode" class="text-base">sdcmRateMultDpm</label>
        </div>
        <input
          v-model="newconfig_sdcmRateMultDpm"
          class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
          type="text"
        />
      </div>
    </div>

    <div class="text-gray-700 flex-grow">
      <div class="text-gray-700">
        <div class="mb-1">
          <label for="forms-labelLeftInputCode" class="text-base">sdcmRateMultHums</label>
        </div>
        <input
          v-model="newconfig_sdcmRateMultHums"
          class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
          type="text"
        />
      </div>
    </div>

    <div class="text-gray-700 flex-grow">
      <div class="text-gray-700">
        <div class="mb-1">
          <label for="forms-labelLeftInputCode" class="text-base">sdcmRateMultRpm</label>
        </div>
        <input
          v-model="newconfig_sdcmRateMultRpm"
          class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
          type="text"
        />
      </div>
    </div>
  </div>
</template>

<script>
import formatData from '@/mixins/formatData'

export default {
  mixins: [formatData],
  computed: {
    newconfig_bToCMaxTSMDRatio: {
      get() {
        return this.formatDecimal(this.$store.state.rothc.config.Variables[14].soil.bToCMaxTSMDRatio)
      },
      set(newValue) {
        this.$store.commit('setNewConfig_bToCMaxTSMDRatio', '$#' + newValue + '$#')
      }
    },

    newconfig_dToRRatioInPres: {
      get() {
        return this.formatDecimal(this.$store.state.rothc.config.Variables[14].soil.dToRRatioInPres)
      },
      set(newValue) {
        this.$store.commit('setNewConfig_dToRRatioInPres', '$#' + newValue + '$#')
      }
    },

    newconfig_encpFracHums: {
      get() {
        return this.formatDecimal(this.$store.state.rothc.config.Variables[14].soil.encpFracHums)
      },
      set(newValue) {
        this.$store.commit('setNewConfig_encpFracHums', '$#' + newValue + '$#')
      }
    },

    newconfig_evapoOpenRatio: {
      get() {
        return this.formatDecimal(this.$store.state.rothc.config.Variables[14].soil.evapoOpenRatio)
      },
      set(newValue) {
        this.$store.commit('setNewConfig_evapoOpenRatio', '$#' + newValue + '$#')
      }
    },

    newconfig_fracHumsToBios: {
      get() {
        return this.formatDecimal(this.$store.state.rothc.config.Variables[14].soil.fracHumsToBios)
      },
      set(newValue) {
        this.$store.commit('setNewConfig_fracHumsToBios', '$#' + newValue + '$#')
      }
    },

    newconfig_fracManuCMToBiof: {
      get() {
        return this.formatDecimal(this.$store.state.rothc.config.Variables[14].soil.fracManuCMToBiof)
      },
      set(newValue) {
        this.$store.commit('setNewConfig_fracManuCMToBiof', '$#' + newValue + '$#')
      }
    },

    newconfig_fracManuCMToBios: {
      get() {
        return this.formatDecimal(this.$store.state.rothc.config.Variables[14].soil.fracManuCMToBios)
      },
      set(newValue) {
        this.$store.commit('setNewConfig_fracManuCMToBios', '$#' + newValue + '$#')
      }
    },

    newconfig_fracManuCMToDpma: {
      get() {
        return this.formatDecimal(this.$store.state.rothc.config.Variables[14].soil.fracManuCMToDpma)
      },
      set(newValue) {
        this.$store.commit('setNewConfig_fracManuCMToDpma', '$#' + newValue + '$#')
      }
    },

    newconfig_fracManuCMToRpma: {
      get() {
        return this.formatDecimal(this.$store.state.rothc.config.Variables[14].soil.fracManuCMToRpma)
      },
      set(newValue) {
        this.$store.commit('setNewConfig_fracManuCMToRpma', '$#' + newValue + '$#')
      }
    },

    newconfig_fracPbioToBiof: {
      get() {
        return this.formatDecimal(this.$store.state.rothc.config.Variables[14].soil.fracPbioToBiof)
      },
      set(newValue) {
        this.$store.commit('setNewConfig_fracPbioToBiof', '$#' + newValue + '$#')
      }
    },

    newconfig_sampleDepth: {
      get() {
        return this.formatDecimal(this.$store.state.rothc.config.Variables[14].soil.sampleDepth)
      },
      set(newValue) {
        this.$store.commit('setNewConfig_sampleDepth', '$#' + newValue + '$#')
      }
    },

    newconfig_sdcmRateMultBiof: {
      get() {
        return this.formatDecimal(this.$store.state.rothc.config.Variables[14].soil.sdcmRateMultBiof)
      },
      set(newValue) {
        this.$store.commit('setNewConfig_sdcmRateMultBiof', '$#' + newValue + '$#')
      }
    },

    newconfig_sdcmRateMultBios: {
      get() {
        return this.formatDecimal(this.$store.state.rothc.config.Variables[14].soil.sdcmRateMultBios)
      },
      set(newValue) {
        this.$store.commit('setNewConfig_sdcmRateMultBios', '$#' + newValue + '$#')
      }
    },

    newconfig_sdcmRateMultDpm: {
      get() {
        return this.formatDecimal(this.$store.state.rothc.config.Variables[14].soil.sdcmRateMultDpm)
      },
      set(newValue) {
        this.$store.commit('setNewConfig_sdcmRateMultDpm', '$#' + newValue + '$#')
      }
    },

    newconfig_sdcmRateMultHums: {
      get() {
        return this.formatDecimal(this.$store.state.rothc.config.Variables[14].soil.sdcmRateMultHums)
      },
      set(newValue) {
        this.$store.commit('setNewConfig_sdcmRateMultHums', '$#' + newValue + '$#')
      }
    },

    newconfig_sdcmRateMultRpm: {
      get() {
        return this.formatDecimal(this.$store.state.rothc.config.Variables[14].soil.sdcmRateMultRpm)
      },
      set(newValue) {
        this.$store.commit('setNewConfig_sdcmRateMultRpm', '$#' + newValue + '$#')
      }
    }
  }
}
</script>
