<template>
  <Footer style="padding-top: 3.5rem; padding-bottom: 1rem; background-color: #2f382a">
    <a-row style="justify-content: center">
      <a-col :xm="20" :sm="20" :md="10" :lg="10" :xl="10"
        ><a-space
          direction="horizontal"
          size="middle"
          style="display: flex; align-items: center; justify-content: center"
        >
          <img src="/moja_global_logo.png" alt="moja global logo" height="120" width="160" /> </a-space
      ></a-col>
      <a-space direction="vertical" size="middle" style="color: white">
        <a-typography-text style="color: white; font-weight: 800; font-size: 1.2rem">Get In Touch</a-typography-text>
        <a-space direction="horizontal" size="small">
          <i class="fas fa-envelope" />
          <a-typography-title style="color: white">info@moja.global</a-typography-title>
        </a-space>
        <a-space direction="horizontal" size="small">
          <a-button
            type="text"
            shape="circle"
            href="https://twitter.com/mojaglobal"
            style="
              background-color: white;
              width: 3rem;
              height: 3rem;
              display: flex;
              align-items: center;
              justify-content: center;
            "
          >
            <i class="fab fa-twitter fa-2x" style="color: #a6adb4"></i>
          </a-button>
          <a-button
            type="text"
            shape="circle"
            href="https://www.linkedin.com/company/moja-global/"
            style="
              background-color: white;
              width: 3rem;
              height: 3rem;
              display: flex;
              align-items: center;
              justify-content: center;
            "
          >
            <i class="fab fa-linkedin fa-2x" style="color: #a6adb4"></i> </a-button></a-space
      ></a-space>
      <a-col :xm="7" :sm="7" :md="3" :lg="3" :xl="3">
        <a-space direction="vertical" size="middle" style="display: flex">
          <a-typography-title style="color: white; font-weight: 800; font-size: 1.2rem">Docs</a-typography-title>
          <a-typography-title>
            <a
              href="https://docs.moja.global/projects/flint-ui/en/latest/"
              target="_blank"
              style="text-decoration: none; color: white"
              >FLINT UI</a
            >
          </a-typography-title>
          <a-typography-title>
            <a
              href="https://docs.moja.global/projects/flint-reporting/en/latest/"
              target="_blank"
              style="text-decoration: none; color: white"
              >FLINT Reporting Tool</a
            >
          </a-typography-title>
          <a-typography-title>
            <a
              href="https://github.com/moja-global/taswira/"
              target="_blank"
              style="text-decoration: none; color: white"
              >Taswira</a
            >
          </a-typography-title>
          <a-typography-title>
            <a
              href="https://github.com/moja-global/FLINT.JSON_Interface/"
              target="_blank"
              style="text-decoration: none; color: white"
              >FLINT JSON Editor</a
            >
          </a-typography-title>
          <a-typography-title>
            <a
              href="https://docs.moja.global/projects/flintcloud/en/latest/"
              target="_blank"
              style="text-decoration: none; color: white"
              >FLINT Cloud</a
            >
          </a-typography-title>
        </a-space>
      </a-col>

      <a-col :xm="7" :sm="7" :md="3" :lg="3" :xl="3">
        <a-space direction="vertical" size="middle" style="display: flex">
          <a-typography-title style="color: white; font-weight: 800; font-size: 1.2rem">Site Links</a-typography-title>
          <a-typography-title>
            <a href="https://moja.global/about/" target="_blank" style="text-decoration: none; color: white">About</a>
          </a-typography-title>
          <a-typography-title>
            <a href="https://moja.global/what-we-do/" target="_blank" style="text-decoration: none; color: white"
              >What We Do</a
            >
          </a-typography-title>
          <a-typography-title>
            <a href="https://moja.global/flint/" target="_blank" style="text-decoration: none; color: white">FLINT</a>
          </a-typography-title>
          <a-typography-title>
            <a href="https://moja.global/get-involved/" target="_blank" style="text-decoration: none; color: white"
              >Get Involved</a
            >
          </a-typography-title>
          <a-typography-title>
            <a href="https://moja.global/resources/" target="_blank" style="text-decoration: none; color: white"
              >Resources</a
            >
          </a-typography-title>
          <a-typography-title>
            <a href="https://moja.global/news/" target="_blank" style="text-decoration: none; color: white">News</a>
          </a-typography-title>
        </a-space>
      </a-col>
    </a-row>
    <a-typography-title
      style="display: flex; align-items: center; justify-content: center; margin-top: 2rem; color: #7a7a7a"
    >
      Copyright © 2022 moja global.
    </a-typography-title>
  </Footer>
</template>

<script>
export default {
  name: 'LandingPageNavbar'
}
</script>
