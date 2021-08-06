<template>
<div class="relative">
    <div class="absolute left-0">
         <vl-map data-projection="EPSG:4326" style="height: 300px; width: 600px">
            <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>

            <vl-layer-tile>
            <vl-source-osm></vl-source-osm>
            </vl-layer-tile>

            <vl-feature>
            <vl-geom-point :coordinates="[this.$store.state.lat_long.coordinates[0], this.$store.state.lat_long.coordinates[1]]"></vl-geom-point>
            </vl-feature>
        </vl-map>
    </div> 
    <div class="absolute right-0">
                <div class="px-4 content-center rounded-md mb-5">
            <div class="text-gray-700 md:flex md:items-center">
                <div>
                    <input 
                    class="w-full h-10 px-3 text-base placeholder-gray-400 border rounded-lg focus:shadow-outline" 
                    type="text" 
                    placeholder=""
                    v-model="getlatitude"
                    />
                </div>
    
            </div>
        </div>

        <div class="px-4 content-center rounded-md mb-5">
            <div class="text-gray-700 md:flex md:items-center">
                <div>
                    <input 
                    class="w-full h-10 px-3 text-base placeholder-gray-400 border rounded-lg focus:shadow-outline" 
                    type="text" 
                    placeholder=""
                    v-model="getlongitude"
                    />
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>

  export default {
    data () {
      return {
        zoom: 15,
        center: [this.$store.state.lat_long.coordinates[0], this.$store.state.lat_long.coordinates[1]],
        rotation: 0,
      }
    },

    computed: {
        returnlat() {
            return this.$store.state.lat_long.coordinates[0];
        },
        returnlon() {
            return this.$store.state.lat_long.coordinates[1];
        },
        getlatitude: {
            get() {
                return parseFloat(this.$store.state.lat_long.coordinates[0])
                console.log(this.$store.state.lat_long.coordinates[0]);
            },
            set(newValue) {
                let tempval = newValue;
                this.$store.commit('setnewlat', tempval)
                console.log("newval", this.$store.state.lat_long.coordinates[0]);
            }
        },

        getlongitude: {
            get() {
                return this.$store.state.lat_long.coordinates[1]
            },
            set(newValue) {
                let tempval = newValue;
                this.$store.commit('setnewlong', tempval)
            }
        },
    },

    methods: {

    },  
  }
</script>
