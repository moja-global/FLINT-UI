<template>
  <div class="pt-4 pb-12 px-8">
    <div class="flex gap-4 items-center">
      <a-typography-title style="margin-bottom: 0">
        <span class="font-normal text-earth"> Generic Carbon Budgeting Model </span>
      </a-typography-title>
      <QuestionCircleOutlined
        style="color: #1890ff"
        class="cursor-pointer text-xl"
        @click="() => (tourModalVisible = true)"
      />
    </div>
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

      <a-alert
        v-if="create_success && created_simulation_title"
        message="Successfully Created New Simulation"
        type="success"
        show-icon
      >
        <template #description>
          <a-typography-text>
            A new simulation with the title '{{ created_simulation_title }}' has been created. You can head over to the
            <router-link to="upload">Upload Files</router-link> section to upload the required files, then
            <router-link to="configure">Configure Parameters </router-link> if needed and finally, run the simulation.
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
    <div class="mt-6">
      <a-typography-text class="w-1"> The GCBM Simulation Run consists of 4 main steps: </a-typography-text>
      <StepperStatic />
    </div>
    <ToastComponent />
  </div>
  <SimulationTour :visible="tourModalVisible" @close="() => (tourModalVisible = false)" />
</template>

<script>
import { createVNode, ref, watchEffect } from 'vue'
import { Modal } from 'ant-design-vue'
import { useToast, ToastComponent } from '@moja-global/mojaglobal-ui'
import { useStore } from 'vuex'
import { ExclamationCircleOutlined, QuestionCircleOutlined } from '@ant-design/icons-vue'

import StepperStatic from '@/components/Stepper/StepperStatic.vue'
import SimulationTour from '@/components/gcbm/SimulationTour.vue'

export default {
  name: 'GCBMLanding',
  components: { StepperStatic, SimulationTour, QuestionCircleOutlined, ToastComponent },
  setup() {
    const simulation_title_input = ref('')
    const error_message = ref('')
    const create_success = ref(false)
    const tourModalVisible = ref(false)

    const store = useStore()
    const created_simulation_title = ref(store.state.gcbm.config.title)

    watchEffect(() => {
      created_simulation_title.value = store.state.gcbm.config.title
    })

    function sendToAPI() {
      if (!simulation_title_input.value.trim()) {
        useToast({
          type: 'error',
          title: 'Error',
          message: 'Please enter a valid simulation title!',
          time: 5000
        })
        return
      }

      if (store.state.gcbm.config.title) {
        Modal.confirm({
          title: 'Create a new simulation?',
          icon: createVNode(ExclamationCircleOutlined, { style: { color: 'red' } }),
          content: "Creating a new simulation will clear all the previous simulation's data and configurations.",
          onOk() {
            create_success.value = true
            //function to send the title to API
            store.dispatch('send_new_gcbm_job_title', {
              title: simulation_title_input.value,
              onCreateRunSuccess,
              onCreateRunError
            })
          },
          okText: 'Create',
          onCancel() {
            console.log('Cancel')
          },
          class: 'test'
        })
      } else {
        store.dispatch('send_new_gcbm_job_title', {
          title: simulation_title_input.value,
          onCreateRunSuccess,
          onCreateRunError
        })
      }
    }

    function onCreateRunSuccess(msg) {
      if (msg.startsWith('Simulation already exists.')) {
        create_success.value = false
        error_message.value = msg
        useToast({
          type: 'error',
          title: 'Error',
          message: `${msg}`,
          time: 5000
        })
        return
      }

      create_success.value = true
      error_message.value = ''
      created_simulation_title.value = simulation_title_input.value
      simulation_title_input.value = ''
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
      tourModalVisible,
      simulation_title: simulation_title_input,
      created_simulation_title,
      sendToAPI,
      check_status,
      onCreateRunSuccess
    }
  }
}
</script>
