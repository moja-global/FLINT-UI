<template>
  <div class="py-4 px-8 text-earth">
    <a-typography-title><span class="font-normal text-earth"> Modules </span></a-typography-title>
    <!-- <div class="flex">
      <span class="text-xl mr-2">Number of Threads:</span>
      <a-input-number v-model:value="num_of_threads" min="1" max="10" step="1" style="width: 100px" />
    </div> -->
    <span class="text-earth"> Choose the modules that you want to include in the run. </span>
    <a-collapse accordion>
      <a-collapse v-model:activeKey="activeKey" :bordered="false">
        <a-collapse-panel key="1" header="This is panel header 1">
          <p>test</p>
        </a-collapse-panel>
        <a-collapse-panel key="2" header="This is panel header 2">
          <p>test</p>
        </a-collapse-panel>
        <a-collapse-panel key="3" header="This is panel header 3">
          <p>test</p>
        </a-collapse-panel>
      </a-collapse>
    </a-collapse>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'LocalDomain',
  setup() {
    const num_of_threads = ref(10)
    const activeKey = ref('1')

    const store = useStore()
    console.log(Object.keys(store.state.gcbm.config.modules_cbm.Modules))

    return {
      num_of_threads,
      activeKey
    }
  }
}
</script>
