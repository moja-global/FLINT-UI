<template>
  <div>
    <sidebar />
    <div class="relative md:ml-64 bg-blueGray-100">
      <main-navbar />
      <!-- <example-cards /> -->
      <div class="px-4 md:px-10 mx-auto w-full -m-24 max-h-screen">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
// import MainNavbar from "@/components/Navbars/MainNavbar.vue";
import Sidebar from "@/components/Sidebar/Sidebar.vue";
// import ExampleCards from "@/components/Headers/ExampleCards.vue";

export default {
  name: "GcbmLayout",
  components: {
    Sidebar
    // ExampleCards,
  }
};
</script>
