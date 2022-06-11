<template>
  <div class="relative">
    <div class="absolute left-0">
      <ol-map :loadTilesWhileAnimating="true" :loadTilesWhileInteracting="true" style="height: 300px; width: 600px">
        <ol-view :zoom="zoom" :center="center" :rotation="rotation" :projection="'EPSG:4326'" />

        <ol-tile-layer>
          <ol-source-osm />
        </ol-tile-layer>
        <ol-vector-layer>
          <ol-source-vector>
            <ol-feature>
              <ol-geom-point
                :coordinates="[$store.state.vuelayers.coordinates[0], $store.state.vuelayers.coordinates[1]]"
              />
            </ol-feature>
          </ol-source-vector>
        </ol-vector-layer>
      </ol-map>
    </div>
    <div class="absolute right-0">
      <div class="px-4 content-center rounded-md mb-5">
        <div class="text-gray-700 md:flex md:items-center">
          <div>
            <input
              v-model="getlatitude"
              class="w-full h-10 px-3 text-base placeholder-gray-400 border rounded-lg focus:shadow-outline"
              type="text"
              placeholder=""
            />
          </div>
        </div>
      </div>

      <div class="px-4 content-center rounded-md mb-5">
        <div class="text-gray-700 md:flex md:items-center">
          <div>
            <input
              v-model="getlongitude"
              class="w-full h-10 px-3 text-base placeholder-gray-400 border rounded-lg focus:shadow-outline"
              type="text"
              placeholder=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { ref, computed } from 'vue'
export default { 
  setup() {

    const store = useStore()

    const zoom = ref(15)
    const center = ref([ store.state.vuelayers.coordinates[0], store.state.vuelayers.coordinates[1]])
    const rotation = ref(0)
    
    const returnlat = computed(() => {
        return store.state.vuelayers.coordinates[0]
    })

    const returnlon = computed(() => {
        return store.state.vuelayers.coordinates[1]
    })
    
    const getlatitude  = computed( {
      get: () => {
        return parseFloat(store.state.vuelayers.coordinates[0])
      },
      set: (newValue) => { 
        let tempval = newValue
        store.commit('setnewlat', tempval)
        console.log('newval', store.state.vuelayers.coordinates[0])
      }
 });

 const getlongitude  = computed( {
      get() {
        return store.state.vuelayers.coordinates[1]
      },
      set(newValue) {
        let tempval = newValue
        store.commit('setnewlong', tempval)
      }
 });

    return {
      zoom,
      center,
      rotation,
      returnlat,
      returnlon,
      getlatitude,
      getlongitude
    }
  }, 
}
</script>
