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
          <button
            class="w-full mt-4 block align-middle flex-initial bg-white hover:bg-black hover:text-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            @click="showConfirmRunModal()"
          >
            <i class="far fa-play-circle"></i> {{ cardFunctionRun }}
          </button>

          <confirm-run
            v-show="isConfirmRunModalVisible"
            run-message="Are you sure you want to run this?"
            @close="closeConfirmRunModal"
            @startApicalls="startApiCalls({ cardMethodName })"
          ></confirm-run>

          <button
            class="w-full mt-4 block align-middle flex-initial bg-white hover:bg-black hover:text-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            @click="showConfirmConfigModal()"
          >
            <i class="far fa-edit"></i> {{ cardFunctionConfig }}
          </button>

          <confirm-config
            v-show="isConfirmConfigModalVisible"
            config-message="Are you sure you want to change the configuration?"
            @close="closeConfirmConfigModal"
            @startApicalls="configSim({ cardMethodName })"
          ></confirm-config>
        </div>
        <p class="text-sm text-blueGray-400 mt-4">
          <span class="whitespace-nowrap">{{ cardDescription }}</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import ConfirmRun from "@/components/Prompts/ConfirmRun";
import ConfirmConfig from "@/components/Prompts/ConfirmConfig";

export default {
  name: "CardInfoConfig",
  components: {
    ConfirmRun,
    ConfirmConfig
  },
  props: {
    cardSubtitle: {
      type: String,
      default: "Example route"
    },
    cardTitle: {
      type: String,
      default: "EXAMPLE"
    },
    cardDescription: {
      type: String,
      default: "info about the card"
    },
    cardFunctionRun: {
      type: String,
      default: "Run"
    },
    cardFunctionConfig: {
      type: String,
      default: "Configure"
    },
    cardMethodName: {
      type: String,
      default: "spec"
    }
  },
  data() {
    return {
      isConfirmRunModalVisible: false,
      isConfirmConfigModalVisible: false
    };
  },
  methods: {
    showConfirmConfigModal() {
      this.isConfirmConfigModalVisible = true;
    },
    closeConfirmConfigModal() {
      this.isConfirmConfigModalVisible = false;
    },
    showConfirmRunModal() {
      this.isConfirmRunModalVisible = true;
    },
    closeConfirmRunModal() {
      this.isConfirmRunModalVisible = false;
    },
    configSim({ cardMethodName }) {
      let config_model = { cardMethodName }.cardMethodName;
      if (config_model == "point") {
        console.log("POINT CONFIG REQ");
        this.$router.push("/flint/configurations/point");
      } else if (config_model == "rothc") {
        console.log("ROTHC CONFIG REQ");
        this.$router.push("/flint/configurations/rothc");
      }
    },
    startApiCalls({ cardMethodName }) {
      this.isConfirmRunModalVisible = false;
      let api_route = { cardMethodName }.cardMethodName;

      if (api_route == "point") {
        this.apiRoute_point();
      } else if (api_route == "rothc") {
        this.apiRoute_rothc();
      } else this.apiRoute_nonexistent();
    },

    apiRoute_point() {
      //sending the new point config
      console.log("POINT route invoked with new configs");
    },
    apiRoute_rothc() {
      // sending the new rothc config
      console.log("ROTHC route invoked with new configs");
      this.$store.dispatch("send_rothcConfig");
    },
    apiRoute_nonexistent() {
      console.log("No such route exists!");
    }
  }
};
</script>
