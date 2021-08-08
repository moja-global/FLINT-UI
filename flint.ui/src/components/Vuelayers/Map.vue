<template>
  <vl-map data-projection="EPSG:4326" style="height: 300px; width: 600px">
    <vl-view
      :zoom.sync="zoom"
      :center.sync="center"
      :rotation.sync="rotation"
    />

    <vl-layer-tile>
      <vl-source-osm />
    </vl-layer-tile>

    <vl-feature>
      <vl-geom-point :coordinates="[getdata1(data1), getdata2(data2)]" />
    </vl-feature>
  </vl-map>
</template>

<script>
export default {
  data() {
    return {
      zoom: 15,
      center: [-89.347015, 43.65107],
      rotation: 0
    }
  },

  methods: {
    getdata1(data1 = this.center[0]) {
      return data1
    },
    getdata2(data2 = this.center[1]) {
      return data2
    }
  }
}
</script>
