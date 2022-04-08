<template>
  <Footer class="footer-container">
    <a-row class="justify-center">
      <a-col :xm="20" :sm="20" :md="10" :lg="10" :xl="10">
        <a-space direction="horizontal" size="middle" class="fc">
          <img src="/moja_global_logo.png" alt="moja global logo" height="120" width="160" />
        </a-space>
      </a-col>
      <a-space direction="vertical" size="middle" class="white">
        <a-typography-text class="white extra-bold">Get In Touch</a-typography-text>
        <a-space direction="horizontal" size="small">
          <i class="fas fa-envelope" />
          <a-typography-title class="white">info@moja.global</a-typography-title>
        </a-space>
        <a-space direction="horizontal" size="small">
          <a-button type="text" shape="circle" href="https://twitter.com/mojaglobal" class="social-icons">
            <i class="fab fa-twitter fa-2x icon-clr"></i>
          </a-button>
          <a-button
            type="text"
            shape="circle"
            href="https://www.linkedin.com/company/moja-global/"
            class="social-icons"
          >
            <i class="fab fa-linkedin fa-2x icon-clr"></i>
          </a-button>
        </a-space>
      </a-space>
      <a-col :xm="7" :sm="7" :md="3" :lg="3" :xl="3">
        <a-space direction="vertical" size="middle" style="display: flex">
          <a-typography-title class="white extra-bold">Docs</a-typography-title>
          <a-typography-title>
            <a href="https://docs.moja.global/projects/flint-ui/en/latest/" target="_blank" class="links">FLINT UI</a>
          </a-typography-title>
          <a-typography-title>
            <a href="https://docs.moja.global/projects/flint-reporting/en/latest/" target="_blank" class="links"
              >FLINT Reporting Tool</a
            >
          </a-typography-title>
          <a-typography-title>
            <a href="https://github.com/moja-global/taswira/" target="_blank" class="links">Taswira</a>
          </a-typography-title>
          <a-typography-title>
            <a href="https://github.com/moja-global/FLINT.JSON_Interface/" target="_blank" class="links"
              >FLINT JSON Editor</a
            >
          </a-typography-title>
          <a-typography-title>
            <a href="https://docs.moja.global/projects/flintcloud/en/latest/" target="_blank" class="links"
              >FLINT Cloud</a
            >
          </a-typography-title>
        </a-space>
      </a-col>

      <a-col :xm="7" :sm="7" :md="3" :lg="3" :xl="3">
        <a-space direction="vertical" size="middle" class="df">
          <a-typography-title class="white extra-bold">Site Links</a-typography-title>
          <a-typography-title>
            <a href="https://moja.global/about/" target="_blank" class="links">About</a>
          </a-typography-title>
          <a-typography-title>
            <a href="https://moja.global/what-we-do/" target="_blank" class="links">What We Do</a>
          </a-typography-title>
          <a-typography-title>
            <a href="https://moja.global/flint/" target="_blank" class="links">FLINT</a>
          </a-typography-title>
          <a-typography-title>
            <a href="https://moja.global/get-involved/" target="_blank" class="links">Get Involved</a>
          </a-typography-title>
          <a-typography-title>
            <a href="https://moja.global/resources/" target="_blank" class="links">Resources</a>
          </a-typography-title>
          <a-typography-title>
            <a href="https://moja.global/news/" target="_blank" class="links">News</a>
          </a-typography-title>
        </a-space>
      </a-col>
    </a-row>
    <a-typography-title class="fc copyright"> Copyright © 2022 moja global. </a-typography-title>
  </Footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
.footer-container {
  padding-top: 3.5rem;
  padding-bottom: 1rem;
  background-color: #2f382a;
}

.justify-center {
  justify-content: center;
}

.fc {
  display: flex;
  align-items: center;
  justify-content: center;
}

.white {
  color: white;
}

.extra-bold {
  font-weight: 800;
  font-size: 1.2rem;
}

.social-icons {
  background-color: white;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.social-icons:hover {
  transform: scale(1.1);
}

.footer-container .icon-clr {
  color: #a6adb4;
}

a.links {
  text-decoration: none;
  color: white !important;
}

a.links:hover {
  color: #7a7a7a !important;
  text-decoration: none !important;
  cursor: pointer;
}

.df {
  display: flex;
}

.copyright {
  margin-top: 2rem;
  color: #7a7a7a;
}
</style>
