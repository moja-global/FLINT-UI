<template>
  <div>
    <div class="px-8 pb-6 md:px-24 mt-8">
      <div class="bg-white p-6 rounded-lg shadow-lg flex flex-wrap justify-between">
        <h2 class="mt-3 text-2xl font-bold mb-2 text-gray-800">GCBM simulation workflow</h2>

        <button
          class="
            inline-flex
            items-center
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
          @click="hello"
        >
          <FileOutlined :style="{marginRight: '4px'}"/> Submit uploaded files
        </button>
      </div>

      <StepperStatic />

      <div class="mt-8 pb-6 mx-auto" style="width: 100%; max-width: 300px">
        <div class="p-4 bg-white rounded shadow-lg">
          <div>
            <h2 class="font-semibold text-xl text-blueGray-700">List of ongoing simulations</h2>

            <label class="mt-4">
              <p class="text-gray-600 text-lg">Select a simulation:</p>

              <select
                v-model="sim_title"
                class="
                  w-full
                  mt-4
                  h-10
                  px-3
                  mb-2
                  text-base text-gray-700
                  placeholder-gray-600
                  border
                  rounded-lg
                  focus:shadow-outline
                "
                @change="onChangeSimulation($event)"
              >
                <option></option>
                <option v-for="(sim, key) in simulation_list" :key="key" :value="sim">
                  {{ sim }}
                </option>
              </select>
            </label>
          </div>

          <p class="text-sm text-blueGray-400 mt-4">Select a simulation from the dropdown to proceed</p>
        </div>
      </div>

      <FileUpload ref="gcbmFileUpload" />
    </div>

    <StepperGCBM :initial="1" />
  </div>
</template>

<script>
import StepperGCBM from '@/components/Stepper/StepperGCBM.vue'
import FileUpload from '@/components/FileUpload/FileUpload.vue'
import StepperStatic from '@/components/Stepper/StepperStatic.vue'
import axios from 'axios'
import { useToast } from 'vue-toastification'
import { FileOutlined } from '@ant-design/icons-vue'

export default {
  name: 'DashboardPage',
  components: {
    StepperGCBM,
    FileUpload,
    StepperStatic,
    FileOutlined
  },

  data: () => ({
    multiple: null,
    simulation_title: '',
    sim_title: '',
    selected_simulation: '',
    simulation_list: {}
  }),

  beforeMount() {
    this.currentSimTitle()
  },
  mounted() {
    this.getSimulations()
  },

  methods: {
    onChangeSimulation(event) {
      this.$store.commit('setDropdownSimState', event.target.value)
      console.log(event.target.value)
      console.log(this.$store.state.gcbm.DropdownSelectedSim)
    },
    currentSimTitle: function () {
      return this.$store.state.gcbm.DropdownSelectedSim
    },
    getSimulations: function () {
      const toast = useToast()

      axios.get(`${process.env.VUE_APP_REST_API_GCBM}/gcbm/list`).then((response) => {
        this.simulation_list = response.data.data
        console.log(this.simulation_list)
        toast.info(`Ongoing simulations - ${response.data.data}`, {
          timeout: 5000
        })
        console.log(response.data.data)
        console.log(this.simulation_list)
      })
    },
    hello() {
      this.$refs.gcbmFileUpload.triggerSend()
    },
    checkforSimtitle() {
      if (this.$store.state.gcbm.DropdownSelectedSim === '') return false
      else {
        console.log(this.$store.state.gcbm.DropdownSelectedSim)
        return true
      }
    },
    isTitle() {
      if (this.checkforSimtitle()) {
        return false
      } else {
        return true
      }
    },
    sendToAPI() {
      console.log(this.$store.state.gcbm.DropdownSelectedSim, ' goto /gcbm/new')
      var simulation_title = this.$store.state.gcbm.DropdownSelectedSim
      console.log('simulation_title')
      console.log(simulation_title)

      this.$store.dispatch('title_setter', simulation_title)
      console.log('from set new title')
      console.log(this.$store.state.gcbm.title)
      //function to send the title to API
      this.$store.dispatch('send_new_gcbm_job_title')
    }
  }
}
</script>

<style>
.vue-dropzone > .dz-preview .dz-details {
  background-color: #2e382b;
}

#dropzone .dz-preview {
  width: 29.1%;
}
</style>
