<template>
  <div>
    <div class="flex flex-wrap" />
    <div class="flex flex-wrap mt-4">
      <ExampleCardsRun />
    </div>
  </div>
</template>

<script>
import ExampleCardsRun from '@/components/Headers/ExampleCardsRun.vue'

export default {
  name: 'DashboardPage',
  components: {
    ExampleCardsRun
  }
}
</script>
