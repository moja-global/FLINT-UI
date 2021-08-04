import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Point_config: {
      LocalDomain: {
        type: "point",
        start_date: "1920/01/01",
        end_date: "1924/12/31",
        sequencer_library: "internal.flint",
        sequencer: "CalendarSequencer",
        simulateLandUnit: "simulateLandUnit",
        landUnitBuildSuccess: "landUnitBuildSuccess",
        operationManager: {
          name: "Simple",
          use_kahan: false,
          allow_zero_result_transfers: false
        }
      },
      Pools: [{ "Pool 1": 100.0 }, { "Pool 2": 100.0 }, { "Pool 3": 100.0 }],
      Variables: [
        {
          localDomainId: 1
        },
        {
          simulateLandUnit: true
        },
        {
          spatialLocationInfo: {
            flintdata: {
              library: "internal.flint",
              type: "SpatialLocationInfo",
              settings: {}
            }
          }
        },
        {
          landUnitBuildSuccess: true
        },
        {
          landUnitArea: 1.0
        },
        {
          "variable 1": 1.0
        },
        {
          "variable 2": 1.0
        },
        {
          "variable 3": 1.0
        }
      ],
      Modules: {
        TransactionManagerEndOfStepModule: {
          library: "internal.flint",
          order: 1
        },
        CalendarSequencer: {
          library: "internal.flint",
          order: 2
        },
        TestModule1: {
          enabled: true,
          library: "internal.flint",
          order: 3,
          settings: {
            ratio_1: 0.4,
            ratio_2: 0.4,
            ratio_3: 0.4,
            varible_1: "variable 1",
            varible_2: "variable 2",
            varible_3: "variable 3",
            pool_1: "Pool 1",
            pool_2: "Pool 2",
            pool_3: "Pool 3"
          }
        },
        TestModule2: {
          enabled: true,
          library: "internal.flint",
          order: 4,
          settings: {
            ratio_1: 0.3,
            ratio_2: 0.35,
            ratio_3: 0.39,
            varible_1: "variable 1",
            varible_2: "variable 2",
            varible_3: "variable 3",
            pool_1: "Pool 1",
            pool_2: "Pool 2",
            pool_3: "Pool 3"
          }
        },
        TestModule3: {
          enabled: true,
          library: "internal.flint",
          order: 5,
          settings: {
            ratio_1: 0.6,
            ratio_2: 0.65,
            ratio_3: 0.7,
            varible_1: "variable 1",
            varible_2: "variable 2",
            varible_3: "variable 3",
            pool_1: "Pool 1",
            pool_2: "Pool 2",
            pool_3: "Pool 3"
          }
        },
        ErrorScreenWriter: {
          enabled: true,
          library: "moja.flint.example.base",
          order: 10,
          settings: {
            log_errors_max_number: 10
          }
        },
        OutputerStream: {
          enabled: true,
          library: "internal.flint",
          order: 11,
          settings: {
            output_filename: "Example_Point_Stock.csv",
            output_to_screen: true,
            output_info_header: true
          }
        },
        OutputerStreamFlux: {
          enabled: true,
          library: "internal.flint",
          order: 12,
          settings: {
            output_filename: "Example_Point_Flux.csv",
            output_to_screen: false,
            output_info_header: true
          }
        }
      }
    },
    RothC_config: {
      LocalDomain: {
        type: "point",
        start_date: "1920/01/01",
        end_date: "1924/12/31",
        sequencer_library: "internal.flint",
        sequencer: "CalendarSequencer",
        simulateLandUnit: "simulateLandUnit",
        landUnitBuildSuccess: "landUnitBuildSuccess",
        operationManager: {
          name: "Simple",
          use_kahan: false,
          allow_zero_result_transfers: false
        }
      },
      Pools: [
        "initialValues",
        "plantCM",
        "SoilDPM",
        "SoilRPM",
        "SoilBioF",
        "SoilBioS",
        "SoilHUM",
        "SoilIOM",
        "atmosphere",
        "offsiteCM"
      ],
      Variables: [
        {
          localDomainId: 1
        },
        {
          simulateLandUnit: true
        },
        {
          spatialLocationInfo: {
            flintdata: {
              library: "internal.flint",
              type: "SpatialLocationInfo",
              settings: {}
            }
          }
        },
        {
          landUnitBuildSuccess: true
        },
        {
          landUnitArea: 1.0
        },
        {
          isSoilCovered: true
        },
        {
          TSMD: 0.0
        },
        {
          clayFrac: 0.94
        },
        {
          rainfall: {
            transform: {
              allow_nulls: true,
              library: "moja.flint.example.base",
              type: "TimeSeriesTransform",
              data_property: "data_month_avg",
              data_orig:
                "#$[ 0.0, 24.00, 23.00, 25.00, 55.00, 78.00, 77.00, 89.00, 77.00, 63.00, 52.00, 39.00, 29.00, 24.70, 24.60, 22.90, 20.90, 18.70, 15.20, 14.20, 14.80, 17.60, 20.60, 22.90, 24.00, 22.60, 23.50, 31.00, 22.00, 19.00, 16.50, 13.00, 13.20, 18.00, 20.50, 22.40, 27.00, 23.00, 24.00, 26.00, 21.00, 18.60, 16.00, 14.00, 14.10, 17.20, 20.00, 23.00, 26.00 ]#$",
              data_month_avg:
                "#$[ 0.0, 24.00000, 23.00000, 25.00000, 55.00000, 78.00000, 77.00000, 89.00000, 77.00000, 63.00000, 52.00000, 39.00000, 29.00000, 24.70000, 24.60000, 22.90000, 20.90000, 18.70000, 15.20000, 14.20000, 14.80000, 17.60000, 20.60000, 22.90000, 24.00000, 22.60000, 23.50000, 31.00000, 22.00000, 19.00000, 16.50000, 13.00000, 13.20000, 18.00000, 20.50000, 22.40000, 27.00000, 23.00000, 24.00000, 26.00000, 21.00000, 18.60000, 16.00000, 14.00000, 14.10000, 17.20000, 20.00000, 23.00000, 26.00000, 23.57500, 23.77500, 26.22500, 29.72500, 33.57500, 31.17500, 32.55000, 29.77500, 28.95000, 28.27500, 26.82500, 26.50000 ]#$",
              data_lastyearcopy:
                "#$[ 0.0, 24.00, 23.00, 25.00, 55.00, 78.00, 77.00, 89.00, 77.00, 63.00, 52.00, 39.00, 29.00, 24.70, 24.60, 22.90, 20.90, 18.70, 15.20, 14.20, 14.80, 17.60, 20.60, 22.90, 24.00, 22.60, 23.50, 31.00, 22.00, 19.00, 16.50, 13.00, 13.20, 18.00, 20.50, 22.40, 27.00, 23.00, 24.00, 26.00, 21.00, 18.60, 16.00, 14.00, 14.10, 17.20, 20.00, 23.00, 26.00, 23.00, 24.00, 26.00, 21.00, 18.60, 16.00, 14.00, 14.10, 17.20, 20.00, 23.00, 26.00 ]#$"
            }
          }
        },
        {
          openPanEvap: {
            transform: {
              allow_nulls: true,
              library: "moja.flint.example.base",
              type: "TimeSeriesTransform",
              data_property: "data_orig",
              data_orig:
                "#$[ 0.0, 230.00, 209.00, 162.00, 105.00, 68.000, 45.000, 50.000, 68.000, 92.000, 138.00, 171.00, 211.00, 26.647, 28.827, 31.007, 33.187, 35.367, 37.547, 39.727, 41.907, 44.087, 46.267, 63.707, 65.887, 29.027, 31.887, 34.747, 37.607, 40.467, 43.327, 46.187, 49.047, 51.907, 54.767, 77.647, 80.507, 28.000, 30.557, 33.114, 35.671, 38.229, 40.786, 43.343, 45.900, 48.457, 51.014, 71.471, 74.029 ]#$",
              data_month_avg:
                "#$[ 0.0, 230.00000, 209.00000, 162.00000, 105.00000, 68.00000, 45.00000, 50.00000, 68.00000, 92.00000, 138.00000, 171.00000, 211.00000, 26.64700, 28.82700, 31.00700, 33.18700, 35.36700, 37.54700, 39.72700, 41.90700, 44.08700, 46.26700, 63.70700, 65.88700, 29.02700, 31.88700, 34.74700, 37.60700, 40.46700, 43.32700, 46.18700, 49.04700, 51.90700, 54.76700, 77.64700, 80.50700, 28.00000, 30.55700, 33.11400, 35.67100, 38.22900, 40.78600, 43.34300, 45.90000, 48.45700, 51.01400, 71.47100, 74.02900, 78.41850, 75.06775, 65.21700, 52.86625, 45.51575, 41.66500, 44.81425, 51.21350, 59.11275, 72.51200, 95.95625, 107.85575 ]#$",
              data_lastyearcopy:
                "#$[ 0.0, 230.00, 209.00, 162.00, 105.00, 68.000, 45.000, 50.000, 68.000, 92.000, 138.00, 171.00, 211.00, 26.647, 28.827, 31.007, 33.187, 35.367, 37.547, 39.727, 41.907, 44.087, 46.267, 63.707, 65.887, 29.027, 31.887, 34.747, 37.607, 40.467, 43.327, 46.187, 49.047, 51.907, 54.767, 77.647, 80.507, 28.000, 30.557, 33.114, 35.671, 38.229, 40.786, 43.343, 45.900, 48.457, 51.014, 71.471, 74.029, 28.000, 30.557, 33.114, 35.671, 38.229, 40.786, 43.343, 45.900, 48.457, 51.014, 71.471, 74.029 ]#$"
            }
          }
        },
        {
          avgAirTemp: {
            transform: {
              allow_nulls: true,
              library: "moja.flint.example.base",
              type: "TimeSeriesTransform",
              data_property: "data_month_avg",
              data_orig:
                "#$[ 0.0, 22.5, 23.0, 20.4, 17.7, 14.4, 12.0, 11.4, 12.0, 13.4, 16.0, 18.4, 20.6, 22.5, 23.0, 20.4, 17.7, 14.4, 12.0, 11.4, 12.0, 13.4, 16.0, 18.4, 20.6, 22.5, 23.0, 20.4, 17.7, 14.4, 12.0, 11.4, 12.0, 13.4, 16.0, 18.4, 20.6, 22.5, 23.0, 20.4, 17.7, 14.4, 12.0, 11.4, 12.0, 13.4, 16.0, 18.4, 20.6 ]#$",
              data_month_avg:
                "#$[ 0.0, 22.50000, 23.00000, 20.40000, 17.70000, 14.40000, 12.00000, 11.40000, 12.00000, 13.40000, 16.00000, 18.40000, 20.60000, 22.50000, 23.00000, 20.40000, 17.70000, 14.40000, 12.00000, 11.40000, 12.00000, 13.40000, 16.00000, 18.40000, 20.60000, 22.50000, 23.00000, 20.40000, 17.70000, 14.40000, 12.00000, 11.40000, 12.00000, 13.40000, 16.00000, 18.40000, 20.60000, 22.50000, 23.00000, 20.40000, 17.70000, 14.40000, 12.00000, 11.40000, 12.00000, 13.40000, 16.00000, 18.40000, 20.60000, 22.50000, 23.00000, 20.40000, 17.70000, 14.40000, 12.00000, 11.40000, 12.00000, 13.40000, 16.00000, 18.40000, 20.60000 ]#$",
              data_lastyearcopy:
                "#$[ 0.0, 22.5, 23.0, 20.4, 17.7, 14.4, 12.0, 11.4, 12.0, 13.4, 16.0, 18.4, 20.6, 22.5, 23.0, 20.4, 17.7, 14.4, 12.0, 11.4, 12.0, 13.4, 16.0, 18.4, 20.6, 22.5, 23.0, 20.4, 17.7, 14.4, 12.0, 11.4, 12.0, 13.4, 16.0, 18.4, 20.6, 22.5, 23.0, 20.4, 17.7, 14.4, 12.0, 11.4, 12.0, 13.4, 16.0, 18.4, 20.6, 22.5, 23.0, 20.4, 17.7, 14.4, 12.0, 11.4, 12.0, 13.4, 16.0, 18.4, 20.6 ]#$"
            }
          }
        },
        {
          presCM: {
            transform: {
              allow_nulls: true,
              library: "moja.flint.example.base",
              type: "TimeSeriesTransform",
              data_property: "data_month_avg",
              data_orig:
                "#$[ 0.0, 10.08, 13.50, 9.30, 8.60, 7.40, 7.50, 7.50, 8.60, 10.00, 10.20, 10.20, 10.30, 9.43, 13.40, 9.20, 8.50, 7.30, 7.40, 7.40, 8.50, 9.90, 10.10, 10.10, 10.20, 8.78, 11.40, 9.10, 9.20, 7.40, 6.80, 6.50, 10.70, 10.40, 9.40, 9.20, 9.70, 8.13, 12.30, 8.90, 9.80, 7.40, 6.10, 5.50, 12.80, 10.80, 8.60, 8.20, 9.10 ]#$",
              data_month_avg:
                "#$[ 0.0, 10.080000, 13.500000, 9.300000, 8.600000, 7.400000, 7.500000, 7.500000, 8.600000, 10.000000, 10.200000, 10.200000, 10.300000, 9.430000, 13.400000, 9.200000, 8.500000, 7.300000, 7.400000, 7.400000, 8.500000, 9.900000, 10.100000, 10.100000, 10.200000, 8.780000, 11.400000, 9.100000, 9.200000, 7.400000, 6.800000, 6.500000, 10.700000, 10.400000, 9.400000, 9.200000, 9.700000, 8.130000, 12.300000, 8.900000, 9.800000, 7.400000, 6.100000, 5.500000, 12.800000, 10.800000, 8.600000, 8.200000, 9.100000, 9.105000, 12.650000, 9.125000, 9.025000, 7.375000, 6.950000, 6.725000, 10.150000, 10.275000, 9.575000, 9.425000, 9.825000 ]#$",
              data_lastyearcopy:
                "#$[ 0.0, 10.08, 13.50, 9.30, 8.60, 7.40, 7.50, 7.50, 8.60, 10.00, 10.20, 10.20, 10.30, 9.43, 13.40, 9.20, 8.50, 7.30, 7.40, 7.40, 8.50, 9.90, 10.10, 10.10, 10.20, 8.78, 11.40, 9.10, 9.20, 7.40, 6.80, 6.50, 10.70, 10.40, 9.40, 9.20, 9.70, 8.13, 12.30, 8.90, 9.80, 7.40, 6.10, 5.50, 12.80, 10.80, 8.60, 8.20, 9.10, 8.13, 12.30, 8.90, 9.80, 7.40, 6.10, 5.50, 12.80, 10.80, 8.60, 8.20, 9.10 ]#$"
            }
          }
        },
        {
          soilCover: {
            transform: {
              allow_nulls: true,
              library: "moja.flint.example.base",
              type: "TimeSeriesTransform",
              data_property: "data_month_avg",
              data_orig:
                "#$[ 1.0, 1.000, 0.900, 0.800, 0.359, 0.100, 0.200, 0.200, 0.500, 0.800, 0.289, 1.000, 0.600, 0.200, 1.000, 0.800, 0.587, 0.027, 0.100, 0.300, 0.173, 0.900, 0.486, 0.200, 0.800, 0.600, 0.000, 0.700, 0.400, 0.500, 0.400, 0.800, 0.200, 0.250, 0.000, 0.100, 0.700, 0.800, 0.680, 0.900, 0.213, 0.973, 0.200, 0.999, 0.227, 0.140, 0.996, 0.200, 0.600 ]#$",
              data_firstmonthcopy:
                "#$[ 1.0, 1.000, 0.900, 0.800, 0.359, 0.100, 0.200, 0.200, 0.500, 0.800, 0.289, 1.000, 0.600, 0.200, 1.000, 0.800, 0.587, 0.027, 0.100, 0.300, 0.173, 0.900, 0.486, 0.200, 0.800, 0.600, 0.000, 0.700, 0.400, 0.500, 0.400, 0.800, 0.200, 0.250, 0.000, 0.100, 0.700, 0.800, 0.680, 0.900, 0.213, 0.973, 0.200, 0.999, 0.227, 0.140, 0.996, 0.200, 0.600, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ]#$",
              data_month_avg:
                "#$[ 1.0, 1.00, 0.90, 0.80, 0.36, 0.10, 0.20, 0.20, 0.50, 0.80, 0.29, 1.00, 0.60, 0.20, 1.00, 0.80, 0.59, 0.03, 0.10, 0.30, 0.17, 0.90, 0.49, 0.20, 0.80, 0.60, 0.00, 0.70, 0.40, 0.50, 0.40, 0.80, 0.20, 0.25, 0.00, 0.10, 0.70, 0.80, 0.68, 0.90, 0.21, 0.97, 0.20, 1.00, 0.23, 0.14, 1.00, 0.20, 0.60, 0.65, 0.65, 0.80, 0.39, 0.40, 0.23, 0.57, 0.28, 0.52, 0.44, 0.38, 0.68 ]#$",
              data_lastyearcopy:
                "#$[ 1.0, 1.000, 0.900, 0.800, 0.359, 0.100, 0.200, 0.200, 0.500, 0.800, 0.289, 1.000, 0.600, 0.200, 1.000, 0.800, 0.587, 0.027, 0.100, 0.300, 0.173, 0.900, 0.486, 0.200, 0.800, 0.600, 0.000, 0.700, 0.400, 0.500, 0.400, 0.800, 0.200, 0.250, 0.000, 0.100, 0.700, 0.800, 0.680, 0.900, 0.213, 0.973, 0.200, 0.999, 0.227, 0.140, 0.996, 0.200, 0.600, 0.800, 0.680, 0.900, 0.213, 0.973, 0.200, 0.999, 0.227, 0.140, 0.996, 0.200, 0.600 ]#$"
            }
          }
        },
        {
          initSoil: {
            dpmaCMInit: "#$0.02#$",
            rpmaCMInit: "#$8.681#$",
            biofCMInit: "#$0.05#$",
            biosCMInit: "#$0.03#$",
            humsCMInit: "#$20.96#$",
            inrtCMInit: "#$43.0#$",
            TSMDInit: "#$35.21#$"
          }
        },
        {
          soil: {
            fracManuCMToDpma: "#$0.49#$",
            fracManuCMToRpma: "#$0.49#$",
            fracManuCMToBiof: "#$0.0#$",
            fracManuCMToBios: "#$0.0#$",
            dToRRatioInPres: "#$2.84#$",
            encpFracHums: "#$0.68#$",
            sampleDepth: "#$26.0#$",
            sdcmRateMultDpm: "#$12.0#$",
            sdcmRateMultRpm: "#$0.5#$",
            sdcmRateMultBiof: "#$0.0#$",
            sdcmRateMultBios: "#$0.76#$",
            sdcmRateMultHums: "#$0.05#$",
            fracPbioToBiof: "#$0.49#$",
            fracHumsToBios: "#$0.0#$",
            evapoOpenRatio: "#$2.5#$",
            bToCMaxTSMDRatio: "#$3.0#$"
          }
        }
      ],
      Modules: {
        TransactionManagerEndOfStepModule: {
          library: "internal.flint",
          order: 1
        },
        CalendarSequencer: {
          library: "internal.flint",
          order: 2
        },
        PlantResidueModule: {
          enabled: true,
          library: "moja.flint.example.rothc",
          order: 3
        },
        SoilCoverModule: {
          enabled: true,
          library: "moja.flint.example.rothc",
          order: 4
        },
        RothCModule: {
          enabled: true,
          library: "moja.flint.example.rothc",
          order: 5
        },
        ErrorScreenWriter: {
          enabled: true,
          library: "moja.flint.example.base",
          order: 10,
          settings: {
            log_errors_max_number: 10
          }
        },
        OutputerStream: {
          enabled: true,
          library: "internal.flint",
          order: 11,
          settings: {
            output_filename: "Example_RothC_Point_Stock.csv",
            output_to_screen: true,
            output_info_header: true
          }
        },
        OutputerStreamFlux: {
          enabled: true,
          library: "internal.flint",
          order: 12,
          settings: {
            output_filename: "Example_RothC_Point_Flux.csv",
            output_to_screen: false,
            output_info_header: true,
          },
        },
      },
    },
    received_data: {},
  },
  mutations: {
    setNewConfig_dpmaCMInit(state, newValue) {
      state.RothC_config.Variables[13].initSoil.dpmaCMInit = newValue;
    },

    setNewConfig_rpmaCMInit(state, newValue) {
      state.RothC_config.Variables[13].initSoil.rpmaCMInit = newValue;
    },

    setNewConfig_biofCMInit(state, newValue) {
      state.RothC_config.Variables[13].initSoil.biofCMInit = newValue;
    },

    setNewConfig_biosCMInit(state, newValue) {
      state.RothC_config.Variables[13].initSoil.biosCMInit = newValue;
    },

    setNewConfig_humsCMInit(state, newValue) {
      state.RothC_config.Variables[13].initSoil.humsCMInit = newValue;
    },

    setNewConfig_inrtCMInit(state, newValue) {
      state.RothC_config.Variables[13].initSoil.inrtCMInit = newValue;
    },

    setNewConfig_TSMDInit(state, newValue) {
      state.RothC_config.Variables[13].initSoil.TSMDInit = newValue;
    },

    ////

    setNewConfig_rainfall_data_orig(state, newValue) {
      state.RothC_config.Variables[8].rainfall.transform.data_orig = newValue;
    },

    setNewConfig_rainfall_data_month_avg(state, newValue) {
      state.RothC_config.Variables[8].rainfall.transform.data_month_avg = newValue;
    },

    setNewConfig_rainfall_data_lastyearcopy(state, newValue) {
      state.RothC_config.Variables[8].rainfall.transform.data_lastyearcopy = newValue;
    },

    ////

    setNewConfig_openPanEvap_data_orig(state, newValue) {
      state.RothC_config.Variables[9].openPanEvap.transform.data_orig = newValue;
    },

    setNewConfig_openPanEvap_data_month_avg(state, newValue) {
      state.RothC_config.Variables[9].openPanEvap.transform.data_month_avg = newValue;
    },

    setNewConfig_openPanEvap_data_lastyearcopy(state, newValue) {
      state.RothC_config.Variables[9].openPanEvap.transform.data_lastyearcopy = newValue;
    },

    ////

    setNewConfig_avgAirTemp_data_orig(state, newValue) {
      state.RothC_config.Variables[10].avgAirTemp.transform.data_orig = newValue;
    },

    setNewConfig_avgAirTemp_data_month_avg(state, newValue) {
      state.RothC_config.Variables[10].avgAirTemp.transform.data_month_avg = newValue;
    },

    setNewConfig_avgAirTemp_data_lastyearcopy(state, newValue) {
      state.RothC_config.Variables[10].avgAirTemp.transform.data_lastyearcopy = newValue;
    },

    ////

    setNewConfig_presCM_data_orig(state, newValue) {
      state.RothC_config.Variables[11].presCM.transform.data_orig = newValue;
    },

    setNewConfig_presCM_data_month_avg(state, newValue) {
      state.RothC_config.Variables[11].presCM.transform.data_month_avg = newValue;
    },

    setNewConfig_presCM_data_lastyearcopy(state, newValue) {
      state.RothC_config.Variables[11].presCM.transform.data_lastyearcopy = newValue;
    },

    ////

    setNewConfig_soilCover_data_orig(state, newValue) {
      state.RothC_config.Variables[12].soilCover.transform.data_orig = newValue;
    },

    setNewConfig_soilCover_data_firstmonthcopy(state, newValue) {
      state.RothC_config.Variables[12].soilCover.transform.data_firstmonthcopy = newValue;
    },

    setNewConfig_soilCover_data_month_avg(state, newValue) {
      state.RothC_config.Variables[12].soilCover.transform.data_month_avg = newValue;
    },

    setNewConfig_soilCover_data_lastyearcopy(state, newValue) {
      state.RothC_config.Variables[12].soilCover.transform.data_lastyearcopy = newValue;
    },

    setNewConfig_bToCMaxTSMDRatio(state, newValue) {
      state.RothC_config.Variables[14].soil.bToCMaxTSMDRatio = newValue;
    },
    setNewConfig_dToRRatioInPres(state, newValue) {
      state.RothC_config.Variables[14].soil.dToRRatioInPres = newValue;
    },
    setNewConfig_encpFracHums(state, newValue) {
      state.RothC_config.Variables[14].soil.encpFracHums = newValue;
    },
    setNewConfig_evapoOpenRatio(state, newValue) {
      state.RothC_config.Variables[14].soil.evapoOpenRatio = newValue;
    },
    setNewConfig_fracHumsToBios(state, newValue) {
      state.RothC_config.Variables[14].soil.fracHumsToBios = newValue;
    },
    setNewConfig_fracManuCMToBiof(state, newValue) {
      state.RothC_config.Variables[14].soil.fracManuCMToBiof = newValue;
    },
    setNewConfig_fracManuCMToBios(state, newValue) {
      state.RothC_config.Variables[14].soil.fracManuCMToBios = newValue;
    },
    setNewConfig_fracManuCMToDpma(state, newValue) {
      state.RothC_config.Variables[14].soil.fracManuCMToDpma = newValue;
    },
    setNewConfig_fracManuCMToRpma(state, newValue) {
      state.RothC_config.Variables[14].soil.fracManuCMToRpma = newValue;
    },
    setNewConfig_fracPbioToBiof(state, newValue) {
      state.RothC_config.Variables[14].soil.fracPbioToBiof = newValue;
    },
    setNewConfig_sampleDepth(state, newValue) {
      state.RothC_config.Variables[14].soil.sampleDepth = newValue;
    },
    setNewConfig_sdcmRateMultBiof(state, newValue) {
      state.RothC_config.Variables[14].soil.sdcmRateMultBiof = newValue;
    },
    setNewConfig_sdcmRateMultBios(state, newValue) {
      state.RothC_config.Variables[14].soil.sdcmRateMultBios = newValue;
    },
    setNewConfig_sdcmRateMultDpm(state, newValue) {
      state.RothC_config.Variables[14].soil.sdcmRateMultDpm = newValue;
    },
    setNewConfig_sdcmRateMultHums(state, newValue) {
      state.RothC_config.Variables[14].soil.sdcmRateMultHums = newValue;
    },
    setNewConfig_sdcmRateMultRpm(state, newValue) {
      state.RothC_config.Variables[14].soil.sdcmRateMultRpm = newValue;
    },

    //Point Sim config
    set_pointConfig_Pool_1(state, pool_1_value) {
      let pool_1_valuex = "#$" + pool_1_value + "#$";
      state.Point_config["Pools"][0]["Pool 1"] = pool_1_valuex;
    },
    set_pointConfig_Pool_2(state, pool_2_value) {
      console.log(state.Point_config);
      let pool_2_valuex = "#$" + pool_2_value + "#$";
      state.Point_config["Pools"][1]["Pool 2"] = pool_2_valuex;
    },
    set_pointConfig_Pool_3(state, pool_3_value) {
      let pool_3_valuex = "#$" + pool_3_value + "#$";
      state.Point_config["Pools"][2]["Pool 3"] = pool_3_valuex;
      console.log(state.Point_config);
    }
  },
  actions: {
    send_pointConfig() {
      let FLINT_config_string = JSON.stringify(this.state.Point_config);
      let preprocessed_FLINT_config_string = FLINT_config_string.replaceAll(
        '"#$',
        " "
      );
      let final_FLINT_config_string = preprocessed_FLINT_config_string.replaceAll(
        '#$"',
        " "
      );
      axios
        .post("http://127.0.0.1:8080/point", final_FLINT_config_string)
        .then(response => {
          Vue.$toast.success(`${response}`, { timeout: 2000 });
          console.log(response);
        })
        .catch(error => {
          Vue.$toast.error(`${error}`, { timeout: 2000 });
          console.log(error);
        });
    },
  },
  getters: {
    received_data: state => {
      return state.received_data;
    }
  },
  actions: {
    send_pointConfig() {
      let FLINT_config_string = JSON.stringify(this.state.Point_config);
      let preprocessed_FLINT_config_string = FLINT_config_string.replaceAll(
        '"#$',
        " "
      );
      let final_FLINT_config_string = preprocessed_FLINT_config_string.replaceAll(
        '#$"',
        " "
      );
      axios
        .post("http://127.0.0.1:8080/point", final_FLINT_config_string)
        .then((response) => {
          Vue.$toast.success(`${response}`, { timeout: 2000 });
          console.log(response);
          this.state.received_data = response.data;
          console.log(this.state.received_data);
        })
        .catch((error) => {
          Vue.$toast.error(`${error}`, { timeout: 2000 });
          console.log(error);
        });
    },

    send_rothcConfig() {
      console.log(this.state.RothC_config);
      let final_RothC_string = JSON.stringify(this.state.RothC_config);
      let preprocessed_RothC_string = final_RothC_string.replaceAll('"#$', " ");
      let final_RothC_config_string = preprocessed_RothC_string.replaceAll(
        '#$"',
        " "
      );
      axios
        .post("http://127.0.0.1:8080/rothc", final_RothC_config_string)
        .then((response) => {
          Vue.$toast.success(`${response}`, { timeout: 2000 });
          console.log(response);
          this.state.received_data = response.data;
          console.log(this.state.received_data);
        })
        .catch((error) => {
          Vue.$toast.error(`${error}`, { timeout: 2000 });
          console.log(error);
        });
    },
  },
});
