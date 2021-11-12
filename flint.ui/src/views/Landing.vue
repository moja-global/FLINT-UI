<template>
  <div>
    <LandingPageNavbar />
    <div class="flex flex-col flex-wrap lg:flex-row">
      <div
        class="relative pt-16 pb-32 flex content-center items-center justify-center w-full min-h-screen-75 lg:w-5/12"
      >
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style="background-image: url('https://pbs.twimg.com/profile_banners/3438377559/1616958449/1500x500')"
        >
          <span id="blackOverlay" class="w-full h-full absolute opacity-75 bg-black" />
        </div>
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-1/4 lg:w-1/2 px-4 ml-auto mr-auto text-center">
              <div class="lg:pr-12">
                <h1 class="text-white font-semibold text-5xl">FLINT UI</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-earth w-full lg:w-7/12 text-white flex items-center">
        <p class="text-lg text-white px-36 text-xl py-36">
          This project provides an intuitive way for new to explore some preconfigured FLINT modules, including the
          Generic Budget Carbon Model (GCBM), in order to better understand how the FLINT system works. Our client is
          written as a Web application and can be used in a local or remote environment.
        </p>
      </div>
    </div>

    <div>
      <div class="items-start md:flex flex-wrap w-full md:justify-center space-x-10 my-10 pb-20">
        <LandingPageCard
          title="Point"
          description="Point is a basic model int the FLINT that allows a person to enter three pool values, date, location. This is a good model to practice and a good starting point."
          link="/flint/configurations/point"
        />
        <LandingPageCard
          title="RothC"
          description="RothC is a model for the turnover of organic carbon in non-waterlogged topsoil that allows for the effects of soil type, temperature, soil moisture and plant cover on the turnover process."
          link="/flint/configurations/rothc"
        />
        <LandingPageCard
          title="GCBM"
          description="The Generic Carbon Budget Model (GCBM) which uses the Carbon Budget Model science modules from the Canadian Forest Service on top of the FLINT platform, was used to generate forest sector based climate change mitigation analyses for British Columbia, Canada."
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
  name: 'MyTour',
  components: {
    LandingPageNavbar,
    LandingPageCard
  }
}
</script>
