<template>
  <div
    class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg"
  >
    <div class="flex-auto p-4">
      <div class="flex flex-wrap">
        <div class="relative w-full max-w-full flex-grow flex-1">
          <h5 class="text-blueGray-400 uppercase font-bold text-xs">
            {{ cardSubtitle }}
          </h5>
          <span class="font-semibold text-xl text-blueGray-700">
            {{ cardTitle }}
          </span>
          <button @click="showConfirmRunModal()" class="w-full mt-4 block align-middle flex-initial bg-white hover:bg-black hover:text-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
           <i class="far fa-play-circle"></i> {{cardFunctionRun}}
          </button>

           <confirm-run
      v-show="isConfirmRunModalVisible"
      RunMessage="Are you sure you want to run this?"
      @close="closeConfirmRunModal" @startApicalls="startApiCalls({cardMethodName})"
    ></confirm-run>

          <button @click="showConfirmConfigModal()" class="w-full mt-4 block align-middle flex-initial bg-white hover:bg-black hover:text-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        <i class="far fa-edit"></i>  {{cardFunctionConfig}}
          </button>

           <confirm-config
      v-show="isConfirmConfigModalVisible"
      ConfigMessage="Are you sure you want to change the configuration?"
      @close="closeConfirmConfigModal" @startApicalls="configSim({cardMethodName})"
    ></confirm-config>
    
        </div>
        <p class="text-sm text-blueGray-400 mt-4">
        <span class="whitespace-nowrap">{{ cardDescription }}</span>
      </p>
      </div>
    </div>
    <Alert
    v-show="alertOpen"
    v-bind:alertText="{cardAlertConfirmation}.cardAlertConfirmation"
    ></Alert>
  </div>
</template>
<script>

const axios = require('axios')
import ConfirmRun from "@/components/Prompts/ConfirmRun";
import ConfirmConfig from "@/components/Prompts/ConfirmConfig";
import Alert from "@/components/Alerts/Alert";

export default {
  name: "card-info-config",
  props: {
    cardSubtitle: {
      type: String,
      default: "Example route",
    },
    cardTitle: {
      type: String,
      default: "EXAMPLE",
    },
    cardDescription: {
      type: String,
      default: "info about the card",
    },
    cardFunctionRun: {
      type: String,
      default: "Run",
    },
    cardFunctionConfig: {
      type: String, 
      default: "Configure",
    },
    cardMethodName: {
      type: String, 
      default: "spec",
    },
    cardAlertConfirmation: {
      type: String, 
      default: "___ route ran successfully",
    },
  },
  components: {
    ConfirmRun,
    ConfirmConfig,
    Alert,
  },
  data() {
    return {
      isConfirmRunModalVisible: false,
      alertOpen: false,
      isConfirmConfigModalVisible: false,
    };
  },
  methods: {
    showConfirmConfigModal() {
      this.isConfirmConfigModalVisible = true;
    },
    closeConfirmConfigModal() {
      this.isConfirmConfigModalVisible = false;
    },
    delayAlert() {
      this.alertOpen = true
      setTimeout(()=> {
        this.alertOpen = false
      }, 2500)
    },
    showConfirmRunModal() {
      this.isConfirmRunModalVisible = true;
    },
    closeConfirmRunModal() {
      this.isConfirmRunModalVisible = false;
    },
    configSim({cardMethodName}) {
      let config_model = {cardMethodName}.cardMethodName;
      if (config_model == "point") {
        console.log("POINT CONFIG REQ");
        this.$router.push('/flint/configurations/point');
      }
      else if (config_model == "rothc") {
        console.log("ROTHC CONFIG REQ");
        this.$router.push('/flint/configurations/rothc');
      }
    },
    startApiCalls({cardMethodName}) {
      this.isConfirmRunModalVisible = false;
      let api_route = {cardMethodName}.cardMethodName;
      // if (api_route == "spec") {
      //   this.apiRoute_spec() 
      //   this.delayAlert()
      // }
      // else if (api_route == "help") {
      //   this.apiRoute_help()
      //   this.delayAlert()
      // }
      // else if (api_route == "version") { 
      //   this.apiRoute_version()
      //   this.delayAlert()        
      // }
      if (api_route == "point") {
        this.apiRoute_point()
        this.delayAlert()
      }
      else if (api_route == "rothc") {
        this.apiRoute_rothc()
        this.delayAlert()
      }
      else 
        this.apiRoute_nonexistent()
    },
    // button linking to api end-points
    // apiRoute_spec() {
    //   // fetch('http://127.0.0.1:8080/spec')
    //   // .then(response => response.json())
    //   // .then(json => console.log(json))
    //   console.log('SPEC route invoked')
    //   axios.get('http://127.0.0.1:8080/spec')
    //     .then(response => console.log(response))
    //     .catch(error => console.log(error))
    //   // return this.title
    // },
    // apiRoute_help() {
    //   console.log('HELP route invoked')
    //   axios.get('http://127.0.0.1:8080/help/all')
    //     .then(response => console.log(response))
    //     .catch(error => console.log(error))
    //   // this.title = 'HELP route invoked'

    //   // return this.title
    // },
    // apiRoute_version() {
    //   console.log('VERSION route invoked')
    //   axios.get('http://127.0.0.1:8080/version')
    //     .then(response => console.log(response))
    //     .catch(error => console.log(error))
    //   // return this.title
    // },
    apiRoute_point() {
      //sending the new config
      console.log('POINT route invoked with new configs')      
      axios.post('http://127.0.0.1:8080/point')
        .then(response => console.log(response))
        .catch(error => console.log(error))
      // return this.title
    },
    apiRoute_rothc() {
      // sending the new config
      console.log('ROTHC route invoked with new configs')
      axios.post('http://127.0.0.1:8080/rothc')
        .then(response => console.log(response))
        .catch(error => console.log(error))
      // return this.title
    },
    apiRoute_nonexistent() {
      console.log("No such route exists!")
    },
  }
};
</script>
