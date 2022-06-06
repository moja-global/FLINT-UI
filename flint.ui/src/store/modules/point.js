import axios from 'axios'
import { useToast } from 'vue-toastification'

export default {
  state: {
    config: {
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
    point_results: {},
    pool_1: [],
    pool_2: [],
    pool_3: [],
    point_step: [],
    point_stepDate: [],
    point_stepLenInYears: [],
    flag: 0 //Thiis is to check if whole Run works.
  },

  mutations: {
    setNew_point_startDate(state, newValue) {
      this.state.point.config.LocalDomain.start_date = newValue
      console.log(this.state.point.config.LocalDomain.start_date)
    },
    setNew_point_endDate(state, newValue) {
      this.state.point.config.LocalDomain.end_date = newValue
      console.log(this.state.point.config.LocalDomain.end_date)
    },

    update_pool_1(state, pool_1) {
      console.log('updated pool 1 in state')
      console.log(this.state.point.pool_1)
      state['pool_1'] = pool_1
    },
    update_pool_2(state, pool_2) {
      console.log('updated pool 2 in state')
      console.log(this.state.point.pool_2)
      state['pool_2'] = pool_2
    },
    update_pool_3(state, pool_3) {
      console.log('updated pool 3 in state')
      console.log(this.state.point.pool_3)
      state['pool_3'] = pool_3
    },
    update_point_stepLenInYears(state, point_stepLenInYears) {
      console.log('updated point_stepLenInYears in state')
      console.log(this.state.point.point_stepLenInYears)
      state['point_stepLenInYears'] = point_stepLenInYears
    },
    update_point_stepDate(state, point_stepDate) {
      console.log('updated point_stepDate in state')
      console.log(this.state.point.point_stepDate)
      state['point_stepDate'] = point_stepDate
    },
    update_point_step(state, point_step) {
      console.log('updated point_step in state')
      console.log(this.state.point.point_step)
      state['point_step'] = point_step
    },

    //Point Sim config
    set_pointConfig_Pool_1(state, pool_1_value) {
      let pool_1_valuex = '#$' + pool_1_value + '#$'
      this.state.point.config['Pools'][0]['Pool 1'] = pool_1_valuex
    },
    set_pointConfig_Pool_2(state, pool_2_value) {
      console.log(this.state.point.config)
      let pool_2_valuex = '#$' + pool_2_value + '#$'
      this.state.point.config['Pools'][1]['Pool 2'] = pool_2_valuex
    },
    set_pointConfig_Pool_3(state, pool_3_value) {
      let pool_3_valuex = '#$' + pool_3_value + '#$'
      this.state.point.config['Pools'][2]['Pool 3'] = pool_3_valuex
      console.log(this.state.point.config)
    },
    save_point_results(state, response) {
      state.point_results = response
      console.log('point_results sent to state')
      //console.log(state.results)
    },
    // eslint-disable-next-line no-unused-vars
    updateFlag(state, flag) {
      state.flag = 1
      console.log('flag')
      //console.log(state.results)
    }
  },

  actions: {
    set_received_point_example_data(state, response) {
      state.received_data = response
      console.log('received_data sent to state')
    },

    send_pointConfig({ commit }) {
      let config_string = JSON.stringify(this.state.point.config)
      let parsed_config_string = config_string.replaceAll('"#$', ' ')
      let final_config_string = parsed_config_string.replaceAll('#$"', ' ')
      const toast = useToast()
      axios
        .post(`${process.env.VUE_APP_REST_API_FLINT_EXAMPLE}/point`, final_config_string)
        .then((response) => {
          toast.success(`Configuration loaded for Point.`, {
            timeout: 2000
          })
          console.log(response)
          commit('save_point_results', response.data)
          console.log(this.state.point.point_results)
        })
        .catch((error) => {
          toast.error(`${error}`, { timeout: 2000 })
          console.log(error)
        })
      commit('updateFlag', 1)
    },
    parse_point_results({ commit }) {
      console.log(this.state.point.point_results)

      const dataForge = require('data-forge')

      console.log('running from state')
      console.log(this.state.point.point_results)
      var dataset = this.state.point.point_results
      var pool_1 = [],
        pool_2 = [],
        pool_3 = [],
        point_step = [],
        point_stepDate = [],
        point_stepLenInYears = []

      let lines = (dataset || '').split('\n')
      lines.splice(0, 4)
      lines.splice(-4)
      dataset = lines.join('\n')
      const df = dataForge.fromCSV(dataset)
      let df_as_array = df.toArray()
      console.log(typeof df_as_array)
      console.log('array1')
      console.log(df_as_array.length)

      for (let simulation_step = 0; simulation_step < df_as_array.length; simulation_step++) {
        pool_1[simulation_step] = parseFloat(df_as_array[simulation_step]['Pool 1'])
        pool_2[simulation_step] = parseFloat(df_as_array[simulation_step]['Pool 2'])
        pool_3[simulation_step] = parseFloat(df_as_array[simulation_step]['Pool 3'])
        point_step[simulation_step] = parseInt(df_as_array[simulation_step]['step'])
        point_stepDate[simulation_step] = df_as_array[simulation_step]['stepDate'].toString()
        point_stepLenInYears[simulation_step] = parseFloat(df_as_array[simulation_step]['stepLenInYears'])
      }

      console.log(point_step)
      console.log(point_stepDate)
      console.log(pool_1)
      console.log(pool_2)
      console.log(pool_3)
      console.log(point_stepLenInYears)

      commit('update_pool_1', pool_1)
      commit('update_pool_2', pool_2)
      commit('update_pool_3', pool_3)
      commit('update_point_stepLenInYears', point_stepLenInYears)
      commit('update_point_step', point_step)
      commit('update_point_stepDate', point_stepDate)

      console.log('this.pool_1')
      console.log(this.state.point.pool_1)
      console.log('this.pool_2')
      console.log(this.state.point.pool_2)
      console.log('this.pool_3')
      console.log(this.state.point.pool_3)
      console.log('this.point_step')
      console.log(this.state.point.point_step)
      console.log('this.point_stepDate')
      console.log(this.state.point.point_stepDate)
      console.log('this.point_stepLenInYears')
      console.log(this.state.point.point_stepLenInYears)
      //window.open('process.env.VUE_APP_REST_API_FLINT_EXAMPLE/flint/point_output_table',"_self")
    }
  }
}
