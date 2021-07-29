<template>
  <div>
    <div class="flex flex-wrap">
    </div>
    <div class="flex flex-wrap mt-4">
      <ExampleCardsRun2/>
    </div>
  </div>
</template>

<script>
import ExampleCardsRun2 from "@/components/Headers/ExampleCardsRun2.vue";

export default {
  name: "dashboard-page",
  components: {
    ExampleCardsRun2,
  },
};
</script>
