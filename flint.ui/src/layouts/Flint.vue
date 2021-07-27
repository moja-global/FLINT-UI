<template>
  <div>
    <sidebar />
    <div class="relative md:ml-64 bg-blueGray-100">
      <!-- <example-cards /> -->
      <div class="px-4 md:px-10 mx-auto w-full -m-24 h-screen">
        <router-view />
        <footer-admin />
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from "@/components/Sidebar/Sidebar.vue";
// import ExampleCards from "@/components/Headers/ExampleCards.vue";

export default {
  name: "flint-layout",
  components: {
    Sidebar,
    // ExampleCards,
  },
};
</script>
