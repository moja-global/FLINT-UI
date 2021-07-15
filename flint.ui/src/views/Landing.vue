<template>
  <div>
      <div
        class="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75"
      >
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style="
            background-image: url('https://pbs.twimg.com/profile_banners/3438377559/1616958449/1500x500');
          "
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div class="pr-12">
                <h1 class="text-white font-semibold text-5xl">
                  About the FLINT UI.
                </h1>
                <p class="mt-4 text-lg text-blueGray-200">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus consectetur vero molestias ab doloremque quia id debitis nemo illum expedita. Quia cumque aut ipsam id dolores est temporibus fugit blanditiis.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
          style="transform: translateZ(0);"
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
            <polygon
              class="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
    
      <div class="container relative mx-auto">
        <div class="items-center flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center mt-10"> 
          <router-link to="/flint">             
            <button class="bg-white text-gray-800 hover:bg-green-200 font-semibold py-2 px-4 border border-gray-400 hover:border-green-600 rounded shadow">
             Take me to FLINT UI
            </button>
           </router-link>
          </div>
        </div>
      </div>
    <footer-component />
  </div>
</template>
<script>

export default {
  components: {
  },
};
</script>
