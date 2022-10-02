<template>
  <NavbarComponent imageSrc="https://community.moja.global/img/logo-light.png">
    <li>
      <a
        href="https://docs.moja.global/en/master/"
        style="color: white; padding-left: 1%"
        target="_blank"
        rel="noreferrer noopener"
        >Documentation</a
      >
    </li>
    <li>
      <a href="mailto:info@moja.global" style="color: white; padding-left: 1%" target="_blank" rel="noreferrer noopener"
        >Contact Us</a
      >
    </li>
    <li>
      <a
        href="https://github.com/moja-global/FLINT-UI"
        style="color: white; padding-left: 1%"
        target="_blank"
        rel="noreferrer noopener"
        >GitHub</a
      >
    </li>
  </NavbarComponent>
</template>

<script>
import { NavbarComponent } from '@moja-global/mojaglobal-ui'
import { ref } from 'vue'

export default {
  name: 'LandingPageNavbar',
  components: {
    NavbarComponent
  },
  setup() {
    const showMenu = ref(false)

    function toggleNavbar() {
      showMenu.value = !showMenu.value
    }

    return { showMenu, toggleNavbar }
  }
}
</script>

<style scoped></style>
