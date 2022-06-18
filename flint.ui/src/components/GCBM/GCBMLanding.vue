<template>
  <div class="pt-4 px-8">
    <a-typography-title>
      <span class="font-normal text-earth"> Generic Carbon Budgeting Model </span>
    </a-typography-title>
    <a-typography-text class="w-1"> The GCBM Simulation Run consists of 4 main steps: </a-typography-text>
    <StepperStatic />
    <div class="mt-4 w-12/12 md:w-3/4">
      <div class="text-xl mr-2">Create a new Simulation</div>
      <a-typography-text>
        Enter a title for your simulation. Title should be unique for each separate run.
      </a-typography-text>
      <a-input-search
        class="mt-2"
        size="large"
        v-model:value="simulation_title"
        placeholder="Enter simulation title"
        enter-button="Create Run"
        @search="sendToAPI"
      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import StepperStatic from '../Stepper/StepperStatic.vue'
import { notification } from 'ant-design-vue'
import { useStore } from 'vuex'

export default {
  name: 'GCBMLanding',
  components: { StepperStatic },
  setup() {
    const simulation_title = ref('')

    const store = useStore()

    function sendToAPI() {
      if (!simulation_title.value.trim()) {
        notification.error({
          message: 'Error',
          description: 'Please enter a simulation title.',
          duration: 2
        })
        return
      }
      store.dispatch('title_setter', simulation_title.value)
      console.log('from set new title')
      console.log(store.state.gcbm.config.title)
      //function to send the title to API
      store.dispatch('send_new_gcbm_job_title')
    }

    function check_status() {
      store.dispatch('check_gcbm_run_status')
    }

    return {
      simulation_title,
      sendToAPI,
      check_status
    }
  }
}
</script>
