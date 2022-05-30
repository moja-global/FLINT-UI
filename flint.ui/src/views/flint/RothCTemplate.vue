<template>
  <div class="w-full lg:w-4/12 xl:w-4/12 p-4 content-center mt-4">
    <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
      <div class="flex-auto p-4">
        <div class="flex flex-wrap">
          <div class="relative w-full max-w-full flex-grow flex-1">
            <p class="text-center w-full font-semibold text-md text-blueGray-700 my-4">
              Update parameters for {{ configParamtext }} ({{ configParamtype }})
            </p>
            <button
              class="
                w-full
                text-sm
                block
                align-middle
                flex-initial
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
              @click="ConfigData"
            >
              <i class="far fa-edit" /> {{ configDataexample }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardRothConfig',
  components: {},
  props: {
    configParamtext: {
      type: String,
      default: 'configuration parameter'
    },
    configParamtype: {
      type: String,
      default: 'Config params for xyz'
    },
    configDataexample: {
      type: String,
      default: 'Configure'
    }
  },
  data() {
    return {}
  },
  methods: {
    ConfigData() {
      let config_type = this.configParamtype
      console.log(config_type)
      if (config_type == 'rainfall') {
        this.$router.push('/flint/configurations/rothc/rainfall')
      } else if (config_type == 'openPanEvap') {
        this.$router.push('/flint/configurations/rothc/openPanEvap')
      } else if (config_type == 'avgAirTemp') {
        this.$router.push('/flint/configurations/rothc/avgAirTemp')
      } else if (config_type == 'presCM') {
        this.$router.push('/flint/configurations/rothc/presCM')
      } else if (config_type == 'soilCover') {
        this.$router.push('/flint/configurations/rothc/soilCover')
      } else if (config_type == 'initSoil') {
        this.$router.push('/flint/configurations/rothc/initSoil')
      } else if (config_type == 'soil') {
        this.$router.push('/flint/configurations/rothc/soil')
      }
    }
  }
}
</script>
