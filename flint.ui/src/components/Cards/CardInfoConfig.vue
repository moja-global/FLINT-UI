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
            @click="configSim({ cardMethodName })"
          >
            <i class="far fa-edit" /> {{ cardFunctionConfig }}
          </button>
          <p class="text-sm text-blueGray-400 mt-4">
            <span class="whitespace-nowrap">{{ cardDescription }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useRouter } from 'vue-router'

import { useStore } from 'vuex'

export default {
  name: 'CardInfoConfig',
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
    cardFunctionConfig: {
      type: String,
      default: 'Configure'
    },
    cardMethodName: {
      type: String,
      default: 'spec'
    }
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    function configSim({ cardMethodName }) {
      let config_model = { cardMethodName }.cardMethodName
      if (config_model == 'point') {
        console.log('POINT CONFIG REQ')
        router.push('/flint/configurations/point')
      } else if (config_model == 'rothc') {
        console.log('ROTHC CONFIG REQ')
        router.push('/flint/configurations/rothc')
      }
    }

    function startApiCalls({ cardMethodName }) {
      let api_route = { cardMethodName }.cardMethodName

      if (api_route == 'point') {
        this.apiRoute_point()
      } else if (api_route == 'rothc') {
        this.apiRoute_rothc()
      } else this.apiRoute_nonexistent()
    }

    function apiRoute_rothc() {
      console.log('ROTHC route invoked with new configs')
      store.dispatch('send_rothcConfig')
    }

    function apiRoute_nonexistent() {
      console.log('No such route exists!')
    }

    return {
      configSim,
      startApiCalls,
      apiRoute_rothc,
      apiRoute_nonexistent
    }
  }
}
</script>
