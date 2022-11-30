<template>
  <div>
    <div class="nav-menu">
      <div class="nav-content" :class="this.showMenu ? 'open-menu' : 'closed-menu'">
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
            <a
              href="mailto:info@moja.global"
              style="color: white; padding-left: 1%"
              target="_blank"
              rel="noreferrer noopener"
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
      </div>
    </div>
  </div>
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

    return { showMenu }
  }
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 768px) {
  .nav-menu {
    padding-top: 0px;
    position: absolute;
    width: 100%;
  }
  .open-menu {
    opacity: 1;
    height: 100px;
  }
  .closed-menu {
    opacity: 1;
    height: 0;
    padding: 0;
  }
  .nav-content {
    flex-direction: column;
    z-index: 100;
    position: relative;
  }
}
</style>
