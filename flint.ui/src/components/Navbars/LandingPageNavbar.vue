<template>
  <nav class="flex items-center justify-between flex-wrap px-24 py-4">
    <div class="flex items-center flex-shrink-0 text-white">
      <router-link to="/" exact>
        <span class="font-semibold text-xl text-earth">
          <img src="/moja_global_logo.png" alt="moja global logo" height="40" width="57" />
        </span>
      </router-link>
    </div>
    <div class="block lg:hidden">
      <button
        class="
          flex
          items-center
          px-3
          py-2
          border
          rounded
          text-teal-200
          border-teal-400
          hover:text-white hover:border-white
        "
        @click="toggleNavbar()"
      >
        <svg v-if="!showMenu" class="h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
        <svg
          v-if="showMenu"
          class="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          overflow="visible"
          stroke="black"
          stroke-width="10"
          stroke-linecap="round"
        >
          <title>Close Button</title>
          <line x2="50" y2="50" />
          <line x1="50" y2="50" />
        </svg>
      </button>
    </div>
    <div
      :class="{ hidden: !showMenu, flex: showMenu }"
      class="w-full block flex-grow lg:flex lg:items-center lg:w-auto"
    >
      <div class="lg:flex-grow"></div>
      <div>
        <a class="block mt-4 text-lg px-0 lg:px-8 lg:inline-block lg:mt-0">
          <button class="text-earth">
            <a href="https://docs.moja.global/projects/flint-ui/en/latest/"> Documentation </a>
          </button>
        </a>

        <a class="block mt-4 text-lg px-0 lg:px-8 lg:inline-block lg:mt-0">
          <button class="text-earth">
            <a href="https://github.com/moja-global/FLINT-UI"> GitHub </a>
          </button>
        </a>

        <a class="block mt-4 text-lg px-0 lg:px-8 lg:inline-block lg:mt-0">
          <button class="text-earth">
            <a href="mailto:info@moja.global"> Contact Us </a>
          </button>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'LandingPageNavbar',
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleNavbar: function () {
      this.showMenu = !this.showMenu
    }
  }
}
</script>

<style scoped>
.md-theme-default a {
  color: #475447 !important;
}
.md-theme-default a:hover {
  text-decoration: none;
}
</style>
