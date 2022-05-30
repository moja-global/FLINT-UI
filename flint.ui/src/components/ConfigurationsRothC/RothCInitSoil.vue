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
import formatData from '@/mixins/formatData'

export default {
  mixins: [formatData],
  computed: {
    newconfig_dpmaCMInit: {
      get() {
        return this.formatDecimal(this.$store.state.rothc.config.Variables[13].initSoil.dpmaCMInit)
      },
      set(newValue) {
        this.$store.commit('setNewConfig_dpmaCMInit', '$#' + newValue + '$#')
      }
    },

    newconfig_rpmaCMInit: {
      get() {
        return this.formatDecimal(this.$store.state.rothc.config.Variables[13].initSoil.rpmaCMInit)
      },
      set(newValue) {
        this.$store.commit('setNewConfig_rpmaCMInit', '$#' + newValue + '$#')
      }
    },

    newconfig_biofCMInit: {
      get() {
        return this.formatDecimal(this.$store.state.rothc.config.Variables[13].initSoil.biofCMInit)
      },
      set(newValue) {
        this.$store.commit('setNewConfig_biofCMInit', '$#' + newValue + '$#')
      }
    },

    newconfig_biosCMInit: {
      get() {
        return this.formatDecimal(this.$store.state.rothc.config.Variables[13].initSoil.biosCMInit)
      },
      set(newValue) {
        this.$store.commit('setNewConfig_biosCMInit', '$#' + newValue + '$#')
      }
    },

    newconfig_humsCMInit: {
      get() {
        return this.formatDecimal(this.$store.state.rothc.config.Variables[13].initSoil.humsCMInit)
      },
      set(newValue) {
        this.$store.commit('setNewConfig_humsCMInit', '$#' + newValue + '$#')
      }
    },

    newconfig_inrtCMInit: {
      get() {
        return this.formatDecimal(this.$store.state.rothc.config.Variables[13].initSoil.inrtCMInit)
      },
      set(newValue) {
        this.$store.commit('setNewConfig_inrtCMInit', '$#' + newValue + '$#')
      }
    },

    newconfig_TSMDInit: {
      get() {
        return this.formatDecimal(this.$store.state.rothc.config.Variables[13].initSoil.TSMDInit)
      },
      set(newValue) {
        this.$store.commit('setNewConfig_TSMDInit', '$#' + newValue + '$#')
      }
    }
  }
}
</script>
