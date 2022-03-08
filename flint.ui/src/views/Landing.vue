<template>
  <div>
    <LandingPageNavbar />
    <div class="flex flex-col flex-wrap lg:flex-row">
      <div class="relative py-32 lg:pt-28 flex content-center justify-center w-full min-h-screen-75 lg:w-5/12">
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style="background-image: url('https://pbs.twimg.com/profile_banners/3438377559/1616958449/1500x500')"
        >
          <span id="blackOverlay" class="w-full h-full absolute opacity-75 bg-black" />
        </div>
        <div class="container relative mx-auto">
          <div class="items-center lg:items-end flex flex-wrap">
            <div class="lg:w-1/2 px-4 mx-auto lg:ml-auto lg:mr-2 text-center">
              <div class="">
                <h1 class="text-white whitespace-nowrap text-6xl">Flint UI</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-earth w-full lg:w-7/12 text-white flex items-center">
        <p class="text-white px-8 sm:px-16 text-base md:text-xl leading-7 md:leading-9 py-14 md:py-20">
          FLINT-UI provides an intuitive way to explore preconfigured FLINT modules, including the Generic Budget Carbon
          Model (GCBM). Through the FLINT-UI, you can provide relevant datasets from custom or public data providers,
          dispatch the job to the FLINT engine for processing, through our user-interface on a local or remote
          environment.
        </p>
      </div>
    </div>

    <div>
      <div class="md:flex flex-wrap w-full md:justify-center my-10 pb-20">
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
          link="/gcbm/dashboard"
        />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import LandingPageNavbar from './../components/Navbars/LandingPageNavbar.vue'
import LandingPageCard from './../components/Cards/LandingPageCard.vue'
import Footer from './../components/Footer/Footer.vue'

export default {
  name: 'MyTour',
  components: {
    LandingPageNavbar,
    LandingPageCard,
    Footer
  }
}
</script>
