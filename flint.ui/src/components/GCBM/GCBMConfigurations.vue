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
// This component is a parent for all the configuration components like LocalDomain, Modules, etc.
// It renders a "Back to Home Page" link and a router view for the configuration components.
import { ArrowLeftOutlined } from '@ant-design/icons-vue'
import { useRoute } from 'vue-router'

export default {
  name: 'GCBMLanding',
  components: { ArrowLeftOutlined },
  setup() {
    const route = useRoute()
    const path = trimSlashes(route.path)
    const showBackToHome = path === 'gcbm/configurations' || route.params.showBackToHome

    function trimSlashes(str) {
      return str.replace(/^\/+|\/+$/g, '')
    }

    return {
      path,
      showBackToHome
    }
  }
}
</script>
