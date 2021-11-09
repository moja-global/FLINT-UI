<template>
  <div>
    <LandingPageNavbar />
    <div class="flex flex-wrap">
      <div class="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75 w-5/12">
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style="background-image: url('https://pbs.twimg.com/profile_banners/3438377559/1616958449/1500x500')"
        >
          <span id="blackOverlay" class="w-full h-full absolute opacity-75 bg-black" />
        </div>
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-1/4 lg:w-1/2 px-4 ml-auto mr-auto text-center">
              <div class="pr-12">
                <h1 class="text-white font-semibold text-5xl">FLINT UI</h1>
                <!-- <p class="mt-4 text-lg text-white">
                This project provides an intuitive way for new to explore some preconfigured FLINT modules, including
                the Generic Budget Carbon Model (GCBM), in order to better understand how the FLINT system works. Our
                client is written as a Web application and can be used in a local or remote environment.
              </p> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-black w-7/12 text-white flex items-center">
        <p class="text-lg text-white px-36 text-xl py-36">
          This project provides an intuitive way for new to explore some preconfigured FLINT modules, including the
          Generic Budget Carbon Model (GCBM), in order to better understand how the FLINT system works. Our client is
          written as a Web application and can be used in a local or remote environment.
        </p>
      </div>
    </div>

    <div class="container relative mx-auto">
      <div class="items-start md:flex flex-wrap w-full md:justify-center space-x-16 my-10">
        <LandingPageCard
          title="Point"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
              eaque, exercitationem praesentium nihil."
          link="/flint/configurations/point"
        />
        <LandingPageCard
          title="Point"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
              eaque, exercitationem praesentium nihil."
          link="/flint/configurations/point"
        />
        <LandingPageCard
          title="Point"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
              eaque, exercitationem praesentium nihil."
          link="/flint/configurations/point"
        />
      </div>
    </div>
  </div>
</template>

<script>
import LandingPageNavbar from './../components/Navbars/LandingPageNavbar.vue'
import LandingPageCard from './../components/Cards/LandingPageCard.vue'
export default {
  components: {
    LandingPageNavbar,
    LandingPageCard
  }
}
</script>
