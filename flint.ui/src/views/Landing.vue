<template>
  <div class="parent">
    <div class="flex flex-row flex-wrap">
      <div class="relative flex content-center justify-center w-full min-h-screen-75 lg:w-5/12">
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style="background-image: url('https://pbs.twimg.com/profile_banners/3438377559/1616958449/1500x500')"
        >
          <span id="blackOverlay" class="w-full h-full absolute opacity-75 bg-black" />
        </div>
        <div class="relative py-32 lg:pt-28 lg:w-1/2 lg:ml-auto">
          <h1 class="text-white whitespace-nowrap text-6xl">Flint UI</h1>
        </div>
      </div>
      <div class="bg-earth w-full lg:w-7/12 py-14 md:py-20 px-8 sm:px-16 md:px-24">
        <p class="text-white text-base leading-7 md:leading-9 md:text-xl">
          FLINT-UI provides an intuitive way to explore preconfigured FLINT modules, including the Generic Budget Carbon
          Model (GCBM). Through the FLINT-UI, you can provide relevant datasets from custom or public data providers,
          dispatch the job to the FLINT engine for processing, through our user-interface on a local or remote
          environment.
        </p>
      </div>
    </div>

    <a-row
      :gutter="[24, 48]"
      class="w-full py-14 md:py-20 px-8 sm:px-16 md:px-24 landing-cards"
      type="flex"
      justify="space-between"
    >
      <LandingPageCard
        title="Point"
        description="Point is a basic model in the FLINT that allows a person to enter three pool values, date, location. This is a good model to practice and a good starting point."
        link="/flint/configurations/point"
        docLink="https://docs.moja.global/en/master/FLINT/index.html"
      />
      <LandingPageCard
        title="RothC"
        description="RothC is a model for the turnover of organic carbon in non-waterlogged topsoil that allows for the effects of soil type, temperature, soil moisture and plant cover on the turnover process."
        link="/flint/configurations/rothc"
        docLink="https://docs.moja.global/en/master/FLINT/index.html"
      />
      <LandingPageCard
        title="GCBM"
        description="The Generic Carbon Budget Model (GCBM) which uses the Carbon Budget Model science modules from the Canadian Forest Service on top of the FLINT platform, was used to generate forest sector based climate change mitigation analyses for British Columbia, Canada."
        link="/gcbm/"
        docLink="https://docs.moja.global/en/master/GCBM/index.html"
      />
    </a-row>
  </div>
</template>

<script>
import LandingPageCard from './../components/Cards/LandingPageCard.vue'

export default {
  name: 'Landing',
  components: {
    LandingPageCard
  }
}
</script>

<style scoped>
@media screen and (min-width: 1400px) {
  .landing-cards {
    display: flex;
    justify-content: space-between;
    flex: 1;
  }
}
</style>
