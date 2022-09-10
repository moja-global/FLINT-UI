<template>
  <div></div>
</template>

<script>
import { ref, watchEffect } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'LiveLogs',
  setup() {
    const store = useStore()
    const simulation_title = ref(store.state.gcbm.config.title)

    watchEffect(() => {
      simulation_title.value = store.state.gcbm.config.title
    })

    return {}
  }
}
</script>

<style></style>
