<template>
  <div class="pt-4 px-8">
    <router-link :to="{ name: 'gcbmconfigurations', params: { showBackToHome: false } }">
      <a-typography-link class="flex items-center">
        <arrow-left-outlined class="mr-2" />
        Back to Home Page
      </a-typography-link>
    </router-link>
  </div>

  <!-- This router view is for rendering the configuration routes like /gcbm/local-domain, 
       /gcbm/modules, etc. -->
  <router-view></router-view>
</template>

<script>
import { ref } from 'vue'
import { ArrowLeftOutlined } from '@ant-design/icons-vue'
import { useRoute } from 'vue-router'
import StepperGCBM from '../Stepper/StepperGCBM.vue'

export default {
  name: 'GCBMLanding',
  components: { ArrowLeftOutlined, StepperGCBM },
  setup() {
    const simulation_title = ref('')

    const route = useRoute()
    const path = trimSlashes(route.path)
    console.log(route.params)
    const showBackToHome = path === 'gcbm/configurations' || route.params.showBackToHome

    function checkforSimtitle() {
      if (simulation_title.value === '') return false
      else {
        console.log(simulation_title.value)
        return true
      }
    }

    function isTitle() {
      if (this.checkforSimtitle()) {
        return false
      } else {
        return true
      }
    }

    function sendToAPI() {
      console.log(simulation_title.value, ' goto /gcbm/new')
      console.log('simulation_title')
      console.log(simulation_title.value)

      this.$store.dispatch('title_setter', simulation_title.value)
      console.log('from set new title')
      console.log(this.$store.state.gcbm.config.title)
      //function to send the title to API
      this.$store.dispatch('send_new_gcbm_job_title')
    }

    function check_status() {
      this.$store.dispatch('check_gcbm_run_status')
    }

    function trimSlashes(str) {
      return str.replace(/^\/+|\/+$/g, '')
    }

    return {
      path,
      showBackToHome,
      isTitle,
      sendToAPI,
      check_status,
      checkforSimtitle
    }
  }
}
</script>
