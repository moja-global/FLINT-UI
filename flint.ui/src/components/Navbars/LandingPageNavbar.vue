<template>
  <nav class="flex items-center justify-between flex-wrap px-16 py-6">
    <div class="flex items-center flex-shrink-0 text-white">
      <span class="font-semibold text-xl text-blue-900 tracking-tight">moja global</span>
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
      >
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="lg:flex-grow"></div>
      <div>
        <a href="#responsive-header" class="block mt-4 text-lg px-0 lg:px-8 lg:inline-block lg:mt-0"> Documentation </a>
        <a href="#responsive-header" class="block mt-4 text-lg px-0 lg:px-8 lg:inline-block lg:mt-0"> About </a>

        <a href="#responsive-header" class="block mt-4 text-lg px-0 lg:px-8 lg:inline-block lg:mt-0"> Contact </a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.md-theme-default a {
  color: black !important;
}
.md-theme-default a:hover {
  text-decoration: none;
}
</style>
