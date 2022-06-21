<template>
  <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
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
              hover:bg-earth hover:text-white
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
            <PlayCircleOutlined /> {{ cardFunctionRun }}
          </button>

          <confirm-run
            v-show="isConfirmRunModalVisible"
            run-message="Are you sure you want to run this?"
            @close="closeConfirmRunModal"
            @startApicalls="startApiCalls({ cardMethodName })"
          />
          <p class="text-sm text-blueGray-400 mt-4">
            <span class="whitespace-nowrap">{{ cardDescription }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { ref } from 'vue'
import ConfirmRun from '@/components/Prompts/ConfirmRun'
import { PlayCircleOutlined } from '@ant-design/icons-vue'
import { notification } from 'ant-design-vue'

export default {
  name: 'CardInfoRun',
  components: {
    ConfirmRun,
    PlayCircleOutlined
  },
  props: {
    cardSubtitle: {
      type: String,
      default: 'Example route'
    },
    cardTitle: {
      type: String,
      default: 'EXAMPLE'
    },
    cardDescription: {
      type: String,
      default: 'info about the card'
    },
    cardFunctionRun: {
      type: String,
      default: 'Run'
    },
    cardMethodName: {
      type: String,
      default: 'spec'
    }
  },
  setup() {
    const isConfirmRunModalVisible = ref(false)
    function showConfirmRunModal() {
      isConfirmRunModalVisible.value = true
    }

    function closeConfirmRunModal() {
      isConfirmRunModalVisible.value = false
    }

    function startApiCalls({ cardMethodName }) {
      isConfirmRunModalVisible.value = false
      let api_route = { cardMethodName }.cardMethodName
      if (api_route == 'spec') {
        this.apiRoute_spec()
      } else if (api_route == 'help') {
        this.apiRoute_help()
      } else if (api_route == 'version') {
        this.apiRoute_version()
      } else if (api_route == 'point') {
        this.apiRoute_point()
      } else if (api_route == 'rothc') {
        this.apiRoute_rothc()
      } else this.apiRoute_nonexistent()
    }

    function apiRoute_spec() {
      console.log('SPECIFICATION route invoked')
      axios
        .get(`${process.env.VUE_APP_REST_API_FLINT_EXAMPLE}/spec`)
        .then((response) => {
          notification.success({
            message: 'Specification route has been invoked',
            duration: 5
          })
          console.log(response)
        })
        .catch((error) => {
          notification.error({
            message: `${error}`,
            duration: 5
          })
          console.log(error)
        })
    }

    function apiRoute_help() {
      console.log('HELP route invoked')
      axios
        .get(`${process.env.VUE_APP_REST_API_FLINT_EXAMPLE}/help/all`)
        .then((response) => {
          notification.success({
            message: 'Help route has been invoked',
            duration: 5
          })
          console.log(response)
        })
        .catch((error) => {
          notification.error({
            message: `${error}`,
            duration: 5
          })
          console.log(error)
        })
    }

    function apiRoute_version() {
      console.log('VERSION route invoked')
      axios
        .get(`${process.env.VUE_APP_REST_API_FLINT_EXAMPLE}/version`)
        .then((response) => {
          notification.success({
            message: 'Version route has been invoked',
            duration: 5
          })
          console.log(response)
        })
        .catch((error) => {
          notification.error({
            message: `${error}`,
            duration: 5
          })
          console.log(error)
        })
    }

    function apiRoute_point() {
      console.log('POINT route invoked')
      axios
        .post(`${process.env.VUE_APP_REST_API_FLINT_EXAMPLE}/point`)
        .then((response) => {
          notification.success({
            message: 'Point route has been invoked',
            duration: 5
          })
          console.log(response)
        })
        .catch((error) => {
          notification.error({
            message: `${error}`,
            duration: 5
          })
          console.log(error)
        })
    }

    function apiRoute_rothc() {
      console.log('ROTHC route invoked')
      axios
        .post(`${process.env.VUE_APP_REST_API_FLINT_EXAMPLE}/rothc`)
        .then((response) => {
          notification.success({
            message: 'RothC route has been invoked. You can see the output in RothC Output Table.',
            duration: 5
          })
          console.log(response)
        })
        .catch((error) => {
          notification.error({
            message: `${error}`,
            duration: 5
          })
          console.log(error)
        })
    }

    function apiRoute_nonexistent() {
      notification.warning({
        message: 'No such route exists!',
        duration: 5
      })
      console.log('No such route exists!')
    }

    return {
      isConfirmRunModalVisible,
      showConfirmRunModal,
      closeConfirmRunModal,
      startApiCalls,
      apiRoute_spec,
      apiRoute_version,
      apiRoute_help,
      apiRoute_point,
      apiRoute_rothc,
      apiRoute_nonexistent
    }
  }
}
</script>
