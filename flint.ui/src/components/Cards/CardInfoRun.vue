<template>
  <div
    class="
      relative
      flex flex-col
      min-w-0
      break-words
      bg-white
      rounded
      mb-6
      xl:mb-0
      shadow-lg
    "
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
            class="
              w-full
              mt-4
              block
              align-middle
              flex-initial
              bg-white
              hover:bg-black hover:text-white
              text-gray-800
              font-semibold
              py-2
              px-4
              border border-gray-400
              rounded
              shadow
            "
            @click="showConfirmRunModal()"
          >
            <i class="far fa-play-circle" /> {{ cardFunctionRun }}
          </button>

          <confirm-run
            v-show="isConfirmRunModalVisible"
            run-message="Are you sure you want to run this?"
            @close="closeConfirmRunModal"
            @startApicalls="startApiCalls({ cardMethodName })"
          />
        </div>
        <p class="text-sm text-blueGray-400 mt-4">
          <span class="whitespace-nowrap">{{ cardDescription }}</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import ConfirmRun from "@/components/Prompts/ConfirmRun";

export default {
  name: "CardInfoRun",
  components: {
    ConfirmRun
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
    cardMethodName: {
      type: String,
      default: "spec"
    }
  },
  data() {
    return {
      isConfirmRunModalVisible: false
    };
  },
  methods: {
    showConfirmRunModal() {
      this.isConfirmRunModalVisible = true;
    },
    closeConfirmRunModal() {
      this.isConfirmRunModalVisible = false;
    },
    startApiCalls({ cardMethodName }) {
      this.isConfirmRunModalVisible = false;
      let api_route = { cardMethodName }.cardMethodName;
      if (api_route == "spec") {
        this.apiRoute_spec();
      } else if (api_route == "help") {
        this.apiRoute_help();
      } else if (api_route == "version") {
        this.apiRoute_version();
      } else if (api_route == "point") {
        this.apiRoute_point();
      } else if (api_route == "rothc") {
        this.apiRoute_rothc();
      } else this.apiRoute_nonexistent();
    },
    // button linking to api end-points
    apiRoute_spec() {
      console.log("SPEC route invoked");
      axios
        .get("http://127.0.0.1:8080/spec")
        .then((response) => {
          this.$toast.success(`${response}`, { timeout: 2000 });
          console.log(response);
        })
        .catch((error) => {
          this.$toast.error(`${error}`, { timeout: 2000 });
          console.log(error);
        });
    },
    apiRoute_help() {
      console.log("HELP route invoked");
      axios
        .get("http://127.0.0.1:8080/help/all")
        .then((response) => {
          this.$toast.success(`${response}`, { timeout: 2000 });
          console.log(response);
        })
        .catch((error) => {
          this.$toast.error(`${error}`, { timeout: 2000 });
          console.log(error);
        });
    },
    apiRoute_version() {
      console.log("VERSION route invoked");
      axios
        .get("http://127.0.0.1:8080/version")
        .then((response) => {
          this.$toast.success(`${response}`, { timeout: 2000 });
          console.log(response);
        })
        .catch((error) => {
          this.$toast.error(`${error}`, { timeout: 2000 });
          console.log(error);
        });
    },
    apiRoute_point() {
      console.log("POINT route invoked");
      axios
        .post("http://127.0.0.1:8080/point")
        .then((response) => {
          this.$toast.success(`${response}`, { timeout: 2000 });
          console.log(response);
        })
        .catch((error) => {
          this.$toast.error(`${error}`, { timeout: 2000 });
          console.log(error);
        });
    },
    apiRoute_rothc() {
      console.log("ROTHC route invoked");
      axios
        .post("http://127.0.0.1:8080/rothc")
        .then((response) => {
          this.$toast.success(`${response}`, { timeout: 2000 });
          console.log(response);
        })
        .catch((error) => {
          this.$toast.error(`${error}`, { timeout: 2000 });
          console.log(error);
        });
    },
    apiRoute_nonexistent() {
      this.$toast.warning("No such route exists!", { timeout: 2000 });
      console.log("No such route exists!");
    }
  }
};
</script>
