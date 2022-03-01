<template>
  <div class="w-96 mx-auto md:mx-0 flex flex-col justify-between">
    <div class="px-6 py-4">
      <div class="py-2 text-earth text-2xl">
        {{ title }}
      </div>
      <p class="text-earth leading-7 text-base">
        {{ description }}
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <Button :btn-size="'auto'" class="flex" @click.native="onClick"
        >Explore <span class="ml-1" style="margin-top: -2px"> →</span></Button
      >
    </div>
  </div>
</template>

<script>
import Button from '../Button/Button.vue'

export default {
  components: {
    Button
  },
  props: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true }
  },
  data: function () {
    return {}
  },
  methods: {
    onClick: function () {
      this.$router.push(this.link)
    }
  }
}
</script>
