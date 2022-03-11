<template>
  <Footer style="padding-top: 3.5rem; padding-bottom: 5rem; background-color: #a6adb4">
    <a-row style="justify-content: center">
      <a-col :xm="24" :sm="24" :md="15" :lg="15" :xl="15"
        ><a-space
          direction="horizontal"
          size="middle"
          style="display: flex; align-items: center; justify-content: center"
        >
          <img
            style="width: 9rem"
            src="https://i0.wp.com/moja.global/wp-content/uploads/2021/03/our-contributors-graphic-300x300.png"
          />
          <a-space direction="vertical" size="middle" style="color: white">
            <a-typography-text style="color: white; font-size: 1.2rem">Get In Touch</a-typography-text>
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
          ></a-space> </a-space
      ></a-col>
      <a-col :xm="10" :sm="10" :md="0" :lg="0" :xl="0"></a-col>
      <a-col :xm="14" :sm="14" :md="9" :lg="9" :xl="9">
        <a-space direction="vertical" size="middle" style="display: flex">
          <a-typography-title style="color: white; font-size: 1.2rem">Site Links</a-typography-title>
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
      style="display: flex; align-items: center; justify-content: center; margin-top: 1rem; color: #7a7a7a"
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
