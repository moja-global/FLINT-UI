import axios from "axios";

export default {

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
              allow_zero_result_transfers: false,
            },
          },
          Pools: [{ "Pool 1": 100.0 }, { "Pool 2": 100.0 }, { "Pool 3": 100.0 }],
          Variables: [
            {
              localDomainId: 1,
            },
            {
              simulateLandUnit: true,
            },
            {
              spatialLocationInfo: {
                flintdata: {
                  library: "internal.flint",
                  type: "SpatialLocationInfo",
                  settings: {},
                },
              },
            },
            {
              landUnitBuildSuccess: true,
            },
            {
              landUnitArea: 1.0,
            },
            {
              "variable 1": 1.0,
            },
            {
              "variable 2": 1.0,
            },
            {
              "variable 3": 1.0,
            },
          ],
          Modules: {
            TransactionManagerEndOfStepModule: {
              library: "internal.flint",
              order: 1,
            },
            CalendarSequencer: {
              library: "internal.flint",
              order: 2,
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
                pool_3: "Pool 3",
              },
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
                pool_3: "Pool 3",
              },
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
                pool_3: "Pool 3",
              },
            },
            ErrorScreenWriter: {
              enabled: true,
              library: "moja.flint.example.base",
              order: 10,
              settings: {
                log_errors_max_number: 10,
              },
            },
            OutputerStream: {
              enabled: true,
              library: "internal.flint",
              order: 11,
              settings: {
                output_filename: "Example_Point_Stock.csv",
                output_to_screen: true,
                output_info_header: true,
              },
            },
            OutputerStreamFlux: {
              enabled: true,
              library: "internal.flint",
              order: 12,
              settings: {
                output_filename: "Example_Point_Flux.csv",
                output_to_screen: false,
                output_info_header: true,
              },
            },
          },
        },
    },

    mutations: {
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
      },
    },

    actions: {
        send_pointConfig() {
            let FLINT_config_string = JSON.stringify(this.state.flint_point.Point_config);
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
                this._vm.$toast.success(`${response}`, { timeout: 2000 });
                console.log(response);
                })
              .catch(error => {
                this._vm.$toast.error(`${error}`, { timeout: 2000 });
                console.log(error);
              })
          },
    }
}
