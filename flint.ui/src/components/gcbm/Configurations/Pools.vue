<template>
  <div class="py-4 px-8 text-earth">
    <a-typography-title :level="2">
      <div style="display: flex; flex-direction: columns; flex-wrap: wrap">
        <span class="font-normal text-earth"> Pools </span>
        <div style="position: relative; margin-left: auto">
          <a-input-search
            v-model:value="searchValue"
            placeholder="Search for a pool"
            style="width: 250px; margin-top: 2px"
          />
        </div>
      </div>
    </a-typography-title>

    <a-typography-text>
      <span class="text-earth mb-2 block" style="margin-bottom: 20px">
        Configure the starting points for each pool.
      </span>
    </a-typography-text>
    <a-row :gutter="[16, 16]">
      <a-col v-for="(pool, poolKey) in filteredPools" :key="poolKey" :span="16" :lg="{ span: 12 }" :xl="{ span: 8 }">
        <div class="span items-center">
          <a-typography-title :level="5" style="margin: 0">
            <span class="mr-4">{{ poolKey }}:</span>
          </a-typography-title>
        </div>
        <div>
          <!-- <code> {{ pool.description }} </code> -->
        </div>
        <a-input-number
          v-model:value="pool.value"
          type="number"
          min="0"
          max="100"
          step="1"
          @change="(val) => onPoolChange(poolKey, val)"
          style="margin-top: 5px"
        />
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { computed, ref, watchEffect } from 'vue'
import { useStore } from 'vuex'
import poolsDescriptions from '@/utils/gcbmPoolsDescriptions'
import { cloneDeep } from 'lodash'

export default {
  name: 'Pools',
  setup() {
    const searchValue = ref('')

    const store = useStore()

    const pools = ref(
      Object.keys(store.state.gcbm.config.pools_cbm.Pools).reduce((acc, key) => {
        acc[key] = { value: store.state.gcbm.config.pools_cbm.Pools[key] }
        return acc
      }, {})
    )

    watchEffect(() => {
      const poolsToSave = Object.keys(pools.value).reduce((acc, key) => {
        acc[key] = pools.value[key].value
        return acc
      }, {})
      store.commit('setGCBMPoolsState', { newState: poolsToSave })
    })

    store.subscribe((mutation) => {
      if (mutation.type === 'setGCBMPoolsState') {
        const newPoolsState = cloneDeep(mutation.payload.newState)
        pools.value = Object.keys(newPoolsState).reduce((acc, key) => {
          acc[key] = { value: newPoolsState[key] }
          return acc
        }, {})
      }
    })

    const filteredPools = computed(() => {
      const search = searchValue.value.toLowerCase()
      return Object.keys(pools.value).reduce((acc, key) => {
        if (key.toLowerCase().includes(search.toLowerCase())) {
          acc[key] = pools.value[key]
          acc[key].description = poolsDescriptions[key]
        }
        return acc
      }, {})
    })

    function onPoolChange(pool, value) {
      pools.value[pool].value = value
    }

    return { filteredPools, searchValue, onPoolChange }
  }
}
</script>
