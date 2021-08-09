/* eslint-disable */

import Vue from 'vue'
import axios from 'axios'

export default {
  state: {
    Point_config: {
      LocalDomain: {
        type: 'point',
        start_date: '1920/01/01',
        end_date: '1924/12/31',
        sequencer_library: 'internal.flint',
        sequencer: 'CalendarSequencer',
        simulateLandUnit: 'simulateLandUnit',
        landUnitBuildSuccess: 'landUnitBuildSuccess',
        operationManager: {
          name: 'Simple',
          use_kahan: false,
          allow_zero_result_transfers: false
        }
      },
      Pools: [{ 'Pool 1': 100.0 }, { 'Pool 2': 100.0 }, { 'Pool 3': 100.0 }],
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
              library: 'internal.flint',
              type: 'SpatialLocationInfo',
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
          'variable 1': 1.0
        },
        {
          'variable 2': 1.0
        },
        {
          'variable 3': 1.0
        }
      ],
      Modules: {
        TransactionManagerEndOfStepModule: {
          library: 'internal.flint',
          order: 1
        },
        CalendarSequencer: {
          library: 'internal.flint',
          order: 2
        },
        TestModule1: {
          enabled: true,
          library: 'internal.flint',
          order: 3,
          settings: {
            ratio_1: 0.4,
            ratio_2: 0.4,
            ratio_3: 0.4,
            varible_1: 'variable 1',
            varible_2: 'variable 2',
            varible_3: 'variable 3',
            pool_1: 'Pool 1',
            pool_2: 'Pool 2',
            pool_3: 'Pool 3'
          }
        },
        TestModule2: {
          enabled: true,
          library: 'internal.flint',
          order: 4,
          settings: {
            ratio_1: 0.3,
            ratio_2: 0.35,
            ratio_3: 0.39,
            varible_1: 'variable 1',
            varible_2: 'variable 2',
            varible_3: 'variable 3',
            pool_1: 'Pool 1',
            pool_2: 'Pool 2',
            pool_3: 'Pool 3'
          }
        },
        TestModule3: {
          enabled: true,
          library: 'internal.flint',
          order: 5,
          settings: {
            ratio_1: 0.6,
            ratio_2: 0.65,
            ratio_3: 0.7,
            varible_1: 'variable 1',
            varible_2: 'variable 2',
            varible_3: 'variable 3',
            pool_1: 'Pool 1',
            pool_2: 'Pool 2',
            pool_3: 'Pool 3'
          }
        },
        ErrorScreenWriter: {
          enabled: true,
          library: 'moja.flint.example.base',
          order: 10,
          settings: {
            log_errors_max_number: 10
          }
        },
        OutputerStream: {
          enabled: true,
          library: 'internal.flint',
          order: 11,
          settings: {
            output_filename: 'Example_Point_Stock.csv',
            output_to_screen: true,
            output_info_header: true
          }
        },
        OutputerStreamFlux: {
          enabled: true,
          library: 'internal.flint',
          order: 12,
          settings: {
            output_filename: 'Example_Point_Flux.csv',
            output_to_screen: false,
            output_info_header: true
          }
        }
      }
    },
    received_point_example_data: {},
    Point_config_pool_1: [],
    Point_config_pool_2: [],
    Point_config_pool_3: []
  },

  mutations: {
    update_Point_config_pool_1(state, pool_1) {
      console.log('updated pool 1 in state')
      console.log(this.state.point.Point_config_pool_1)
      Vue.set(state, 'Point_config_pool_1', pool_1)
    },
    update_Point_config_pool_2(state, pool_2) {
      console.log('updated pool 2 in state')
      console.log(this.state.point.Point_config_pool_2)
      Vue.set(state, 'Point_config_pool_2', pool_2)
    },
    update_Point_config_pool_3(state, pool_3) {
      console.log('updated pool 3 in state')
      console.log(this.state.point.Point_config_pool_3)
      Vue.set(state, 'Point_config_pool_3', pool_3)
    },

    //Point Sim config
    set_pointConfig_Pool_1(state, pool_1_value) {
      let pool_1_valuex = '#$' + pool_1_value + '#$'
      state.Point_config['Pools'][0]['Pool 1'] = pool_1_valuex
    },
    set_pointConfig_Pool_2(state, pool_2_value) {
      console.log(state.Point_config)
      let pool_2_valuex = '#$' + pool_2_value + '#$'
      state.Point_config['Pools'][1]['Pool 2'] = pool_2_valuex
    },
    set_pointConfig_Pool_3(state, pool_3_value) {
      let pool_3_valuex = '#$' + pool_3_value + '#$'
      state.Point_config['Pools'][2]['Pool 3'] = pool_3_valuex
      console.log(state.Point_config)
    },
    set_received_point_example_data(state, response) {
      state.received_point_example_data = response
      console.log('received_point_example_data sent to state')
      //console.log(state.received_point_example_data)
    }
  },

  actions: {
    // send_pointConfig() {
    //   let FLINT_config_string = JSON.stringify(
    //     this.state.flint_point.Point_config
    //   )
    //   let preprocessed_FLINT_config_string = FLINT_config_string.replaceAll(
    //     '"#$',
    //     ' '
    //   )
    //   let final_FLINT_config_string = preprocessed_FLINT_config_string.replaceAll(
    //     '#$"',
    //     ' '
    //   )
    //   axios
    //     .post('http://127.0.0.1:8080/point', final_FLINT_config_string)
    //     .then(response => {
    //       this._vm.$toast.success(`${response}`, { timeout: 2000 })
    //       console.log(response)
    //     })
    //     .catch(error => {
    //       this._vm.$toast.error(`${error}`, { timeout: 2000 })
    //       console.log(error)
    //     })
    // },
    send_pointConfig({ commit }) {
      let FLINT_config_string = JSON.stringify(this.state.point.Point_config)
      let preprocessed_FLINT_config_string = FLINT_config_string.replaceAll(
        '"#$',
        ' '
      )
      let final_FLINT_config_string =
        preprocessed_FLINT_config_string.replaceAll('#$"', ' ')

      axios
        .post('http://127.0.0.1:8080/point', final_FLINT_config_string)
        .then((response) => {
          this._vm.$toast.success(`${response}`, { timeout: 2000 })
          console.log(response)
          //this.state.received_data = response.data;
          commit('set_received_point_example_data', response.data)
          console.log(this.state.point.received_point_example_data)
        })
        .catch((error) => {
          this._vm.$toast.error(`${error}`, { timeout: 2000 })
          console.log(error)
        })
    },
    process_point_config({ commit }) {
      console.log(this.state.point.received_point_example_data)

      const dataForge = require('data-forge')

      console.log('running from state')
      console.log(this.state.point.received_point_example_data)
      var dataset = this.state.point.received_point_example_data
      var pool_1 = [],
        pool_2 = [],
        pool_3 = [],
        simulation_step = []

      let lines = (dataset || '').split('\n')
      lines.splice(0, 4)
      lines.splice(-4)
      dataset = lines.join('\n')
      const df = dataForge.fromCSV(dataset)
      let df_as_array = df.toArray()
      console.log(typeof df_as_array)
      console.log('array1')
      // console.log(df_as_array[0]['Pool 1'])
      console.log(df_as_array.length)

      for (let step = 0; step < df_as_array.length; step++) {
        pool_1[step] = parseFloat(df_as_array[step]['Pool 1'])
        pool_2[step] = parseFloat(df_as_array[step]['Pool 2'])
        pool_3[step] = parseFloat(df_as_array[step]['Pool 3'])
        let x = step
        simulation_step[step] = x
      }

      console.log('pool 1')
      for (let step = 0; step < df_as_array.length; step++) {
        console.log(pool_1[step])
      }
      console.log(simulation_step)
      console.log(pool_1)
      console.log(pool_2)
      console.log(pool_3)

      this.state.point.Point_config_pool_1 = pool_1
      this.state.point.Point_config_pool_2 = pool_2
      this.state.point.Point_config_pool_3 = pool_3

      commit('update_Point_config_pool_1', pool_1)
      commit('update_Point_config_pool_2', pool_2)
      commit('update_Point_config_pool_3', pool_3)

      console.log('this.Point_config_pool_1')
      console.log(this.state.point.Point_config_pool_1)
      console.log('this.Point_config_pool_2')
      console.log(this.state.point.Point_config_pool_2)
      console.log('this.Point_config_pool_3')
      console.log(this.state.point.Point_config_pool_3)
    }
  },
  getters: {
    received_point_example_data: (state) => {
      return state.point.received_point_example_data
    },
    Point_config_pool_1: (state) => {
      return this.state.point.Point_config_pool_1
    },
    Point_config_pool_2: (state) => {
      return this.state.point.Point_config_pool_2
    },
    Point_config_pool_3: (state) => {
      return this.state.point.Point_config_pool_3
    }
  }
}
