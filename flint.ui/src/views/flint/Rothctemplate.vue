<template>
<div class="w-full lg:w-4/12 xl:w-4/12 p-4 content-center mt-4">
  <div
  class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg"
  >
    <div class="flex-auto p-4">
      <div class="flex flex-wrap">
        <div class="relative w-full max-w-full flex-grow flex-1">
          <p class="text-center w-full font-semibold text-md text-blueGray-700 my-4">
           Configuration parameters for {{configParamtype}}
          </p>
          <button @click="ConfigDataOrig" class="w-full text-sm block align-middle flex-initial bg-white hover:bg-black hover:text-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
           <i class="far fa-edit"></i>  {{configDataorig}}
          </button>
        
          <button @click="ConfigDataMonthAvg" class="w-full text-sm block align-middle flex-initial bg-white hover:bg-black hover:text-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
           <i class="far fa-edit"></i>  {{configDatamonthavg}}
          </button>
        
          <button @click="ConfigDataLastYear" class="w-full text-sm block align-middle flex-initial bg-white hover:bg-black hover:text-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
           <i class="far fa-edit"></i>  {{configDatalastyear}}
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: "card-roth-config",
  props: {
    configParamtype: {
      type: String,
      default: "Config params for xyz",
    },
    configDataorig: {
      type: String,
      default: "Config for data_orig",
    },
    configDatamonthavg: {
      type: String,
      default: "Config for data_month_avg",
    },
    configDatalastyear: {
      type: String,
      default: "Config for data_lastyearcopy",
    },
  },
  components: {
  },
  data() {
    return {
    };
  },
  methods: {
      ConfigDataOrig () {
        let config_type = this.configParamtype;
        console.log(config_type);
        if (config_type == "rainfall") {
           this.$router.push('/flint/configurations/rothc/rainfall-data-orig');
        }
        else if (config_type == "openPanEvap") {
            this.$router.push('/flint/configurations/rothc/openPanEvap-data-orig');
        }
        else if (config_type == "avgAirTemp") {
            this.$router.push('/flint/configurations/rothc/avgAirTemp-data-orig');
        }
        else if (config_type == "presCM") {
            this.$router.push('/flint/configurations/rothc/presCM-data-orig');
        }
        else if (config_type == "soilCover") {
            this.$router.push('/flint/configurations/rothc/soilCover-data-orig');
        }
      },
      ConfigDataMonthAvg () {
        let config_type = this.configParamtype;
        console.log(config_type);
        if (config_type == "rainfall") {
           this.$router.push('/flint/configurations/rothc/rainfall-data_monthavg');
        }
        else if (config_type == "openPanEvap") {
            this.$router.push('/flint/configurations/rothc/openPanEvap-data_monthavg');
        }
        else if (config_type == "avgAirTemp") {
            this.$router.push('/flint/configurations/rothc/avgAirTemp-data_monthavg');
        }
        else if (config_type == "presCM") {
            this.$router.push('/flint/configurations/rothc/presCM-data_monthavg');
        }
        else if (config_type == "soilCover") {
            this.$router.push('/flint/configurations/rothc/soilCover-data_monthavg');
        }
      },
      ConfigDataLastYear () {
        let config_type = this.configParamtype;
        console.log(config_type);
        if (config_type == "rainfall") {
           this.$router.push('/flint/configurations/rothc/rainfall-data_lastyearcopy');
        }
        else if (config_type == "openPanEvap") {
            this.$router.push('/flint/configurations/rothc/openPanEvap-data_lastyearcopy');
        }
        else if (config_type == "avgAirTemp") {
            this.$router.push('/flint/configurations/rothc/avgAirTemp-data_lastyearcopy');
        }
        else if (config_type == "presCM") {
            this.$router.push('/flint/configurations/rothc/presCM-data_lastyearcopy');
        }
        else if (config_type == "soilCover") {
            this.$router.push('/flint/configurations/rothc/soilCover-data_lastyearcopy');
        }
      },
  }
};
</script>
