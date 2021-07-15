<template>
  <div>
    <div class="flex flex-wrap">
    </div>
    <div class="flex flex-wrap mt-4">
      <ExampleCardsConfig/>
    </div>
  </div>
</template>
<script>
import ExampleCardsConfig from "@/components/Headers/ExampleCardsConfig.vue";

export default {
  name: "dashboard-page",
  components: {
    ExampleCardsConfig,
  },
};
</script>