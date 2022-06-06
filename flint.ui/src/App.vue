<template>
  <LandingPageNavbar />
  <router-view />
  <FooterComponent />
</template>

<script>
import LandingPageNavbar from './components/Navbars/LandingPageNavbar.vue'
import FooterComponent from './components/Footer/Footer.vue'

export default {
  components: {
    LandingPageNavbar,
    FooterComponent
  }
}
</script>
