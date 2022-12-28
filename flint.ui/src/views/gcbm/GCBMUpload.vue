<template>
  <div class="pt-4 px-8 flex-grow" style="max-width: 100vw; overflow-x: hidden">
    <a-typography-title><span class="font-normal text-earth"> Upload Files </span></a-typography-title>
    <!-- This router view is for rendering the upload routes like /gcbm/upload/classifiers, 
       /gcbm/upload/disturbances, etc. -->
    <router-view></router-view>
    <ToastComponent />
  </div>
</template>

<script>
// This component is a parent for all the upload components like Classifiers, Disturbances, etc.

import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { ToastComponent } from '@moja-global/mojaglobal-ui'

export default {
  name: 'GCBMUpload',
  components: {
    ToastComponent
  },
  setup() {
    const store = useStore()
    const router = useRouter()

    if (!store.state.gcbm.config.title) {
      router.push('/gcbm/create')
    }

    return {}
  }
}
</script>
