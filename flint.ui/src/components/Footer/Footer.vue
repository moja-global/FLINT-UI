<template>
  <div class="footer-container py-4 px-8 pb-6 sm:px-16 md:px-24">
    <a-row :gutter="[48, 48]">
      <a-col :xs="24" :md="9">
        <a href="/"> <img src="/moja_global_logo.png" alt="moja global logo" class="logo" /></a>
      </a-col>

      <a-col :xs="24" :md="5">
        <h2 class="title">Get In Touch</h2>
        <div class="email">
          <i class="fas fa-envelope" />
          <a href="mailto:info@moja.global"> info@moja.global</a>
        </div>

        <div class="socials">
          <a-button type="text" shape="circle" href="https://twitter.com/mojaglobal" class="social-icons">
            <i class="fab fa-twitter fa-2x icon"></i>
          </a-button>

          <a-button
            type="text"
            shape="circle"
            href="https://www.linkedin.com/company/moja-global/"
            class="social-icons"
          >
            <i class="fab fa-linkedin fa-2x icon"></i>
          </a-button>
        </div>
      </a-col>

      <a-col :xs="24" :md="5">
        <h2 class="title">Docs</h2>
        <ol>
          <li>
            <a href="https://docs.moja.global/projects/flint-ui/en/latest/" target="_blank" class="links">FLINT UI</a>
          </li>
          <li>
            <a href="https://docs.moja.global/projects/flint-reporting/en/latest/" target="_blank" class="links"
              >FLINT Reporting Tool</a
            >
          </li>
          <li>
            <a href="https://github.com/moja-global/taswira/" target="_blank" class="links">Taswira</a>
          </li>
          <li>
            <a href="https://github.com/moja-global/FLINT.JSON_Interface/" target="_blank" class="links"
              >FLINT JSON Editor</a
            >
          </li>
          <li>
            <a href="https://docs.moja.global/projects/flintcloud/en/latest/" target="_blank" class="links"
              >FLINT Cloud</a
            >
          </li>
        </ol>
      </a-col>

      <a-col :xs="24" :md="5">
        <h2 class="title">Site Links</h2>
        <ol>
          <li>
            <a href="https://moja.global/about/" target="_blank" class="links">About</a>
          </li>
          <li>
            <a href="https://moja.global/what-we-do/" target="_blank" class="links">What We Do</a>
          </li>
          <li>
            <a href="https://moja.global/flint/" target="_blank" class="links">FLINT</a>
          </li>
          <li>
            <a href="https://moja.global/get-involved/" target="_blank" class="links">Get Involved</a>
          </li>
          <li>
            <a href="https://moja.global/resources/" target="_blank" class="links">Resources</a>
          </li>
          <li>
            <a href="https://moja.global/news/" target="_blank" class="links">News</a>
          </li>
        </ol>
      </a-col>
    </a-row>

    <p class="copyright">Copyright © {{ new Date().getFullYear() }} moja global.</p>
  </div>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
.footer-container {
  padding-top: 3.5rem;
  padding-bottom: 2rem;
  background-color: #2f382a;
}

.logo {
  display: block;
  margin: 0 auto;
  height: 120px;
  width: 160px;
}
.title {
  color: white;
  font-weight: 800;
  font-size: 1.2rem;
}
.email i {
  color: #ddd;
  margin-bottom: 20px;
  margin-right: 5px;
}

.email a:link {
  color: #ddd !important;
}

.email:hover i,
.email:hover a:link {
  color: #7a7a7a !important;
  text-decoration: none !important;
  cursor: pointer;
}

.socials {
  display: flex;
}

.social-icons {
  background-color: white;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 7px;
}
.social-icons:hover {
  transform: scale(1.1);
  background-color: white;
}

.social-icons .icon {
  color: #2f382a;
}

.md-theme-default a:not(.md-button) {
  color: transparent;
}
ol > li > a.links {
  text-decoration: none;
  color: #ddd !important;
}

ol > li > a.links:hover {
  color: #7a7a7a !important;
  text-decoration: none !important;
  cursor: pointer;
}

.copyright {
  margin-top: 2rem;
  color: white;
  text-align: center;
}
</style>
