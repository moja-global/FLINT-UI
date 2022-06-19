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
import useformatData from '../../utils/useformatData'
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const { formatDecimal } = useformatData()
    const store = useStore()

    const newconfig_bToCMaxTSMDRatio = computed({
      get() {
        return formatDecimal(store.state.rothc.config.Variables[14].soil.bToCMaxTSMDRatio)
      },
      set(newValue) {
        store.commit('setNewConfig_bToCMaxTSMDRatio', '$#' + newValue + '$#')
      }
    })

    const newconfig_dToRRatioInPres = computed({
      get() {
        return formatDecimal(store.state.rothc.config.Variables[14].soil.dToRRatioInPres)
      },
      set(newValue) {
        store.commit('setNewConfig_dToRRatioInPres', '$#' + newValue + '$#')
      }
    })

    const newconfig_encpFracHums = computed({
      get() {
        return formatDecimal(store.state.rothc.config.Variables[14].soil.encpFracHums)
      },
      set(newValue) {
        store.commit('setNewConfig_encpFracHums', '$#' + newValue + '$#')
      }
    })

    const newconfig_evapoOpenRatio = computed({
      get() {
        return formatDecimal(store.state.rothc.config.Variables[14].soil.evapoOpenRatio)
      },
      set(newValue) {
        store.commit('setNewConfig_evapoOpenRatio', '$#' + newValue + '$#')
      }
    })

    const newconfig_fracHumsToBios = computed({
      get() {
        return formatDecimal(store.state.rothc.config.Variables[14].soil.fracHumsToBios)
      },
      set(newValue) {
        store.commit('setNewConfig_fracHumsToBios', '$#' + newValue + '$#')
      }
    })

    const newconfig_fracManuCMToBiof = computed({
      get() {
        return formatDecimal(store.state.rothc.config.Variables[14].soil.fracManuCMToBiof)
      },
      set(newValue) {
        store.commit('setNewConfig_fracManuCMToBiof', '$#' + newValue + '$#')
      }
    })

    const newconfig_fracManuCMToBios = computed({
      get() {
        return formatDecimal(store.state.rothc.config.Variables[14].soil.fracManuCMToBios)
      },
      set(newValue) {
        store.commit('setNewConfig_fracManuCMToBios', '$#' + newValue + '$#')
      }
    })

    const newconfig_fracManuCMToDpma = computed({
      get() {
        return formatDecimal(store.state.rothc.config.Variables[14].soil.fracManuCMToDpma)
      },
      set(newValue) {
        store.commit('setNewConfig_fracManuCMToDpma', '$#' + newValue + '$#')
      }
    })

    const newconfig_fracManuCMToRpma = computed({
      get() {
        return formatDecimal(store.state.rothc.config.Variables[14].soil.fracManuCMToRpma)
      },
      set(newValue) {
        store.commit('setNewConfig_fracManuCMToRpma', '$#' + newValue + '$#')
      }
    })

    const newconfig_fracPbioToBiof = computed({
      get() {
        return formatDecimal(store.state.rothc.config.Variables[14].soil.fracPbioToBiof)
      },
      set(newValue) {
        store.commit('setNewConfig_fracPbioToBiof', '$#' + newValue + '$#')
      }
    })

    const newconfig_sampleDepth = computed({
      get() {
        return formatDecimal(store.state.rothc.config.Variables[14].soil.sampleDepth)
      },
      set(newValue) {
        store.commit('setNewConfig_sampleDepth', '$#' + newValue + '$#')
      }
    })

    const newconfig_sdcmRateMultBiof = computed({
      get() {
        return formatDecimal(store.state.rothc.config.Variables[14].soil.sdcmRateMultBiof)
      },
      set(newValue) {
        store.commit('setNewConfig_sdcmRateMultBiof', '$#' + newValue + '$#')
      }
    })

    const newconfig_sdcmRateMultBios = computed({
      get() {
        return formatDecimal(store.state.rothc.config.Variables[14].soil.sdcmRateMultBios)
      },
      set(newValue) {
        store.commit('setNewConfig_sdcmRateMultBios', '$#' + newValue + '$#')
      }
    })

    const newconfig_sdcmRateMultDpm = computed({
      get() {
        return formatDecimal(store.state.rothc.config.Variables[14].soil.sdcmRateMultDpm)
      },
      set(newValue) {
        store.commit('setNewConfig_sdcmRateMultDpm', '$#' + newValue + '$#')
      }
    })
    const newconfig_sdcmRateMultHums = computed({
      get() {
        return formatDecimal(store.state.rothc.config.Variables[14].soil.sdcmRateMultHums)
      },
      set(newValue) {
        store.commit('setNewConfig_sdcmRateMultHums', '$#' + newValue + '$#')
      }
    })

    const newconfig_sdcmRateMultRpm = computed({
      get() {
        return formatDecimal(store.state.rothc.config.Variables[14].soil.sdcmRateMultRpm)
      },
      set(newValue) {
        store.commit('setNewConfig_sdcmRateMultRpm', '$#' + newValue + '$#')
      }
    })

    return {
      formatDecimal,
      newconfig_bToCMaxTSMDRatio,
      newconfig_dToRRatioInPres,
      newconfig_encpFracHums,
      newconfig_evapoOpenRatio,
      newconfig_fracHumsToBios,
      newconfig_fracManuCMToBiof,
      newconfig_fracManuCMToBios,
      newconfig_fracManuCMToDpma,
      newconfig_fracManuCMToRpma,
      newconfig_fracPbioToBiof,
      newconfig_sdcmRateMultDpm,
      newconfig_sdcmRateMultBiof,
      newconfig_sampleDepth,
      newconfig_sdcmRateMultBios,
      newconfig_sdcmRateMultHums,
      newconfig_sdcmRateMultRpm
    }
  }
}
</script>
