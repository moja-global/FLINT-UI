<template>
  <div>
    <div class="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
      <div
        class="absolute top-0 w-full h-full bg-center bg-cover"
        style="background-image: url('https://pbs.twimg.com/profile_banners/3438377559/1616958449/1500x500')"
      >
        <span id="blackOverlay" class="w-full h-full absolute opacity-75 bg-black" />
      </div>
      <div class="container relative mx-auto">
        <div class="items-center flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div class="pr-12">
              <h1 class="text-white font-semibold text-5xl">FLINT UI</h1>
              <p class="mt-4 text-lg text-white">
                This project provides an intuitive way for new to explore some preconfigured FLINT modules, including
                the Generic Budget Carbon Model (GCBM), in order to better understand how the FLINT system works. Our
                client is written as a Web application and can be used in a local or remote environment.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
        style="transform: translateZ(0)"
      >
        <svg
          class="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon class="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100" />
        </svg>
      </div>
    </div>

    <div class="container relative mx-auto">
      <div class="items-center flex flex-wrap justify-center">
        <div>
          <br />
          <br />
          <br />
          <div class="p-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-8">
            <!-- <router-link to="/flint">
              <button
                class="
                  bg-white
                  text-lg text-gray-800
                  hover:bg-green-200
                  font-semibold
                  py-10
                  px-20
                  border border-gray-400
                  hover:border-green-600
                  rounded
                  shadow
                "
              >
                Take me to FLINT UI
              </button>
            </router-link> -->

            <router-link to="/flint/configurations/point">
              <button
                class="
                  bg-white
                  text-lg text-gray-800
                  hover:bg-green-200
                  font-semibold
                  py-10
                  px-20
                  border border-gray-400
                  hover:border-green-600
                  rounded
                  shadow
                "
              >
                <div data-v-step="4">
                  <div data-v-step="1">POINT</div>
                </div>
              </button>
            </router-link>

            <router-link to="/flint/configurations/rothc">
              <button
                class="
                  bg-white
                  text-lg text-gray-800
                  hover:bg-green-200
                  font-semibold
                  py-10
                  px-20
                  border border-gray-400
                  hover:border-green-600
                  rounded
                  shadow
                "
              >
                <div data-v-step="2">ROTHC</div>
              </button>
            </router-link>

            <router-link to="/gcbm/dashboard">
              <button
                class="
                  bg-white
                  text-lg text-gray-800
                  hover:bg-green-200
                  font-semibold
                  py-10
                  px-20
                  border border-gray-400
                  hover:border-green-600
                  rounded
                  shadow
                "
              >
                <div data-v-step="3">GCBM</div>
              </button>
            </router-link>
          </div>
          <v-tour name="MyTour" :steps="steps" :options="myOptions"></v-tour>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<script>
export default {
  name: 'MyTour',
  data() {
    return {
      myOptions: {
        useKeyboardNavigation: true,
        labels: {
          buttonSkip: 'Skip tour',
          buttonPrevious: 'Previous',
          buttonNext: 'Next',
          buttonStop: 'Finish'
        }
      },
      steps: [
        {
          target: '[data-v-step="1"]',
          content: 'Point is a simple three-pool example of a stock and flow model running in FLINT.',
          params: {
            placement: 'top'
          }
        },
        {
          target: '[data-v-step="2"]',
          content: 'Click on this button to run RothC simulation.',
          params: {
            placement: 'top'
          }
        },
        {
          target: '[data-v-step="3"]',
          content: 'Click on this button to run The Generic Carbon Budget Model (GCBM) simulation.',
          params: {
            placement: 'top'
          }
        },
        {
          target: '[data-v-step="4"]',
          content: 'Follow the tour by clicking here to learn how to run a simulation using the FLINT UI.',
          params: {
            placement: 'top'
          }
        }
      ]
    }
  },
  mounted: function () {
    this.$tours['MyTour'].start()
  }
}
</script>
