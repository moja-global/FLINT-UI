import { notification } from 'ant-design-vue'
import axios from 'axios'

import initialState from '@/utils/gcbmInitialStoreState.js'

export default {
  state: {
    ...initialState()
  },
  mutations: {
    resetState(state) {
      console.log('RESETTING STATE')
      const newState = { ...initialState() }
      Object.keys(newState).forEach((key) => {
        state[key] = newState[key]
      })
    },
    setDropdownSimState(state, newValue) {
      this.state.gcbm.DropdownSelectedSim = newValue
    },
    save_new_gcbm_job_title(state, title) {
      console.log('passed title')
      console.log(title)
      state.config.title = title
      console.log(state.config.title)
    },
    setSimulationProgressState(state, newValue) {
      this.state.gcbm.SimulationProgress = newValue
    },
    setGCBMLocalDomainState(state, { key, newState }) {
      switch (key) {
        case 'THREADS':
          console.log('changed threads state in GCBM store', newState)
          state.config.localdomain.LocalDomain.landscape.num_threads = newState
          break
        case 'START_DATE':
          console.log('changed start date state in GCBM store')
          state.config.localdomain.LocalDomain.start_date = newState
          break
        case 'END_DATE':
          console.log('changed end date state in GCBM store')
          state.config.localdomain.LocalDomain.end_date = newState
          break
      }
    },
    setWholeGCBMLocalDomainState(state, { newState }) {
      state.config.localdomain = newState
      console.log('changed whole local domain state in GCBM store', state.config.localdomain)
    },
    setGCBMModulesState(state, { newState }) {
      state.config.modules_cbm.Modules = newState
      console.log('changed Modules state in GCBM store:', state.config.modules_cbm.Modules)
    },
    setGCBMVariablesState(state, { newState }) {
      state.config.variables.Variables = newState
      console.log('changed Variables state in GCBM store', newState, state.config.variables.Variables)
    },
    setGCBMPoolsState(state, { newState }) {
      state.config.pools_cbm.Pools = newState
      console.log('changed Pools state in GCBM store', state.config.pools_cbm.Pools)
    },
    setGCBMSpinupEnabledState(state, { newState }) {
      state.config.spinup.Spinup.enabled = newState
      console.log('changed Spinup Enabled state in GCBM store', state.config.spinup.Spinup.enabled)
    },
    setGCBMSpinupVariablesState(state, { newState }) {
      state.config.spinup.SpinupVariables = newState
      console.log('changed Spinup Variables state in GCBM store', state.config.spinup.SpinupVariables)
    },
    setWholeGCBMSpinupState(state, { newState }) {
      state.config.spinup = newState
      console.log('changed complete Spinup state in GCBM store', state.config.spinup)
    },
    setGCBMInternalVariablesState(state, { newState }) {
      state.config.internal_variables.Variables = newState
      console.log('changed InternalVariables state in GCBM store', state.config.internal_variables.Variables)
    },
    setGCBMUploadFilesState(state, { fileType, fileList }) {
      state.filesUploaded[fileType] = fileList
      console.log(`changed UploadFiles(${fileType}) state in GCBM store`, state.filesUploaded[fileType])
    },
    setGCBMInputDBConfigState(state, { newState }) {
      state.fileConfigs.inputDB = newState
      console.log('changed inputDB fileConfig state in GCBM store', state.fileConfigs.inputDB)
    },
    setGCBMFileConfig(state, { fileType, fileName, fileConfig }) {
      state.fileConfigs[fileType][fileName] = fileConfig
      console.log(`changed fileConfig(${fileType}) state in GCBM store`, state.fileConfigs[fileType][fileName])
    }
  },

  actions: {
    reset_state({ commit }) {
      commit('resetState')
    },
    send_new_gcbm_job_title({ commit }, { title, onCreateRunSuccess, onCreateRunError }) {
      var bodyFormData = new FormData()
      console.log(title)
      bodyFormData.append('title', title)
      console.log([...bodyFormData])

      axios
        .post(`${process.env.VUE_APP_REST_API_GCBM}/upload/title`, bodyFormData)
        .then((response) => {
          if (!response.data.data.startsWith('Simulation already exists.')) {
            commit('resetState')
            commit('save_new_gcbm_job_title', title)
          }
          console.log(response.data.data)
          onCreateRunSuccess(response.data.data)
        })
        .catch((error) => {
          notification.error({
            message: `${error}`,
            duration: 5
          })
          onCreateRunError(error)
          console.log(error)
        })
    },
    check_gcbm_run_status() {
      axios.get(`${process.env.VUE_APP_REST_API_GCBM}/gcbm/list`).then((response) => {
        notification.success({
          message: `${response.data.data}`,
          duration: 5
        })
        console.log(response.data)
      })
    }
  }
}
