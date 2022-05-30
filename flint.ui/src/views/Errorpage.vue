<template>
  <div>
    <LandingPageNavbar />
    <div class="flex-row pl-0 flex-wrap mt-6">
      <div class="p-6 innerdiv">
        <h1 class="mb mt-7 py-4 text-2xl text-earth my-4">Page Not Found</h1>
        <p class="text-earth text-2xl my-2">We could not find what you were looking for.</p>
        <p class="text-xl font-normal text-earth text-base my-2">
          Please contact the owner of the site that linked you to the original URL and let them know their link is
          broken.
        </p>
        <div class="my-4">
          <a href="/"
            ><Button :btn-size="'auto'" class="flex mt-6"
              >Go to Home Page <span class="ml-1" style="margin-top: -2px"> →</span></Button
            ></a
          >
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import LandingPageNavbar from '../components/Navbars/LandingPageNavbar.vue'
import Footer from '../components/Footer/Footer.vue'
import Button from '../components/Button/Button.vue'

export default {
  name: 'NotFound',
  components: {
    LandingPageNavbar,
    Footer,
    Button
  }
}
</script>

<style scoped>
a:hover {
  text-decoration: none !important;
}

@media only screen and (min-width: 978px) {
  .innerdiv {
    width: 50%;
    margin-left: 26%;
  }
}
</style>
