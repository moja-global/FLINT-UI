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
        class="my-2"
        size="large"
        v-model:value="simulation_title"
        placeholder="Enter simulation title"
        enter-button="Create Run"
        @search="sendToAPI"
      />
      <a-alert v-if="create_success" message="Successfully Created New Simulation" type="success" show-icon>
        <template #description>
          <a-typography-text>
            A new simulation with the title '{{ created_simulation_title }}' has been created. You can head over to the
            <router-link to="configurations/local-domain">Configure Parameters</router-link> is needed, or directly
            <router-link to="upload">Upload your Spacial / Non Spacial files </router-link> and run the simulation.
          </a-typography-text>
        </template>
      </a-alert>
      <a-alert v-if="!!error_message" message="Failed to Create New Simulation" type="error" show-icon>
        <template #description>
          <a-typography-text>
            {{ error_message }}
          </a-typography-text>
        </template>
      </a-alert>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import StepperStatic from '@/components/Stepper/StepperStatic.vue'
import { notification } from 'ant-design-vue'
import { useStore } from 'vuex'

export default {
  name: 'GCBMLanding',
  components: { StepperStatic },
  setup() {
    const simulation_title = ref('')
    const created_simulation_title = ref('')
    const error_message = ref('')
    const create_success = ref(false)

    const store = useStore()

    function sendToAPI() {
      if (!simulation_title.value.trim()) {
        notification.error({
          message: 'Error',
          description: 'Please enter a simulation title.',
          duration: 5
        })
        return
      }
      store.dispatch('title_setter', simulation_title.value)
      console.log('from set new title')
      console.log(store.state.gcbm.config.title)
      //function to send the title to API
      store.dispatch('send_new_gcbm_job_title', { onCreateRunSuccess, onCreateRunError })
    }

    function onCreateRunSuccess(msg) {
      if (msg.data.data.startsWith('Simulation already exists.')) {
        create_success.value = false
        error_message.value = msg.data.data
        return
      }

      create_success.value = true
      error_message.value = ''
      created_simulation_title.value = simulation_title.value
      simulation_title.value = ''
    }

    function onCreateRunError(err) {
      error_message.value = err
      create_success.value = false
    }

    function check_status() {
      store.dispatch('check_gcbm_run_status')
    }

    return {
      error_message,
      create_success,
      simulation_title,
      created_simulation_title,
      sendToAPI,
      check_status,
      onCreateRunSuccess
    }
  }
}
</script>
