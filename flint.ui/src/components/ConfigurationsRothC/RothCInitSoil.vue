<template>
  <div class="flex flex-wrap gap-8">
    <div class="text-gray-700 flex-grow">
      <div class="mb-1">
        <label for="forms-labelLeftInputCode" class="text-base">dpmaCMInit</label>
      </div>
      <input
        v-model="newconfig_dpmaCMInit"
        class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
        type="text"
      />
    </div>

    <div class="text-gray-700 flex-grow">
      <div class="mb-1">
        <label for="forms-labelLeftInputCode" class="text-base">rpmaCMInit</label>
      </div>
      <input
        v-model="newconfig_rpmaCMInit"
        class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
        type="text"
      />
    </div>

    <div class="text-gray-700 flex-grow">
      <div class="mb-1">
        <label for="forms-labelLeftInputCode" class="text-base">biofCMInit</label>
      </div>
      <input
        v-model="newconfig_biofCMInit"
        class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
        type="text"
      />
    </div>

    <div class="text-gray-700 flex-grow">
      <div class="mb-1">
        <label for="forms-labelLeftInputCode" class="text-base">biosCMInit</label>
      </div>
      <input
        v-model="newconfig_biosCMInit"
        class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
        type="text"
      />
    </div>

    <div class="text-gray-700 flex-grow">
      <div class="mb-1">
        <label for="forms-labelLeftInputCode" class="text-base">humsCMInit</label>
      </div>
      <input
        v-model="newconfig_humsCMInit"
        class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
        type="text"
      />
    </div>

    <div class="text-gray-700 flex-grow">
      <div class="mb-1">
        <label for="forms-labelLeftInputCode" class="text-base">inrtCMInit</label>
      </div>
      <input
        v-model="newconfig_inrtCMInit"
        class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
        type="text"
      />
    </div>

    <div class="text-gray-700 flex-grow">
      <div class="mb-1">
        <label for="forms-labelLeftInputCode" class="text-base">TSMDInit</label>
      </div>
      <input
        v-model="newconfig_TSMDInit"
        class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
        type="text"
      />
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
    const newconfig_dpmaCMInit = computed({
      get() {
        return formatDecimal(store.state.rothc.config.Variables[13].initSoil.dpmaCMInit)
      },
      set(newValue) {
        store.commit('setNewConfig_dpmaCMInit', '$#' + newValue + '$#')
      }
    })

    const newconfig_rpmaCMInit = computed({
      get() {
        return formatDecimal(store.state.rothc.config.Variables[13].initSoil.rpmaCMInit)
      },
      set(newValue) {
        store.commit('setNewConfig_rpmaCMInit', '$#' + newValue + '$#')
      }
    })

    const newconfig_biofCMInit = computed({
      get() {
        return formatDecimal(store.state.rothc.config.Variables[13].initSoil.biofCMInit)
      },
      set(newValue) {
        store.commit('setNewConfig_biofCMInit', '$#' + newValue + '$#')
      }
    })

    const newconfig_biosCMInit = computed({
      get() {
        return formatDecimal(store.state.rothc.config.Variables[13].initSoil.biosCMInit)
      },
      set(newValue) {
        store.commit('setNewConfig_biosCMInit', '$#' + newValue + '$#')
      }
    })

    const newconfig_humsCMInit = computed({
      get() {
        return formatDecimal(store.state.rothc.config.Variables[13].initSoil.humsCMInit)
      },
      set(newValue) {
        store.commit('setNewConfig_humsCMInit', '$#' + newValue + '$#')
      }
    })

    const newconfig_inrtCMInit = computed({
      get() {
        return formatDecimal(store.state.rothc.config.Variables[13].initSoil.inrtCMInit)
      },
      set(newValue) {
        store.commit('setNewConfig_inrtCMInit', '$#' + newValue + '$#')
      }
    })

    const newconfig_TSMDInit = computed({
      get() {
        return formatDecimal(store.state.rothc.config.Variables[13].initSoil.TSMDInit)
      },
      set(newValue) {
        store.commit('setNewConfig_TSMDInit', '$#' + newValue + '$#')
      }
    })

    return {
      newconfig_dpmaCMInit,
      newconfig_rpmaCMInit,
      newconfig_biofCMInit,
      newconfig_biosCMInit,
      newconfig_humsCMInit,
      newconfig_inrtCMInit,
      newconfig_TSMDInit
    }
  }
}
</script>
