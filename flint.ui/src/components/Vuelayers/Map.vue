<template>
  <vl-map data-projection="EPSG:4326" style="height: 300px; width: 600px">
    // eslint-disable-next-line vue/no-v-model-argument
    <vl-view v-model:zoom="zoom" />

    <vl-layer-tile>
      <vl-source-osm />
    </vl-layer-tile>

    <vl-feature>
      <vl-geom-point :coordinates="[getdata1(data1), getdata2(data2)]" />
    </vl-feature>
  </vl-map>
</template>

<script>
import { ref } from 'vue'

export default { 

  script() {
    const zoom = ref(15)
    const center = ref([-89.347015, 43.65107])
    const rotation = ref(0) 
    
    function getdata1(data1 = center.value[0]) { 
      return data1
    } 

    function getdata2(data2 = center.value[1]) { 
      return data2
    }

    return {
      zoom,
      center,
      rotation,
      getdata1,
      getdata2
    }
  } 
}
</script>
