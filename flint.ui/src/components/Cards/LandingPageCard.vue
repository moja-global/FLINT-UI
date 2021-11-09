<template>
  <div class="w-72 rounded overflow-hidden">
    <div class="px-6 py-4">
      <div class="py-2 font-bold text-2xl">
        {{ title }}
      </div>
      <p class="text-gray-700 text-base">
        {{ description }}
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <router-link :to="link">
        <span class="inline-block bg-gray-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >Explore</span
        >
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true }
  },
  data: function () {
    return {}
  }
}
</script>
