<template>
  <a-col :span="24" :md="{ span: 12 }" :xl="{ span: 8 }">
    <div>
      <h2 class="text-earth text-2xl mb-2">
        {{ title }}
      </h2>
      <p class="text-earth text-base leading-7">
        {{ description }}
      </p>
      <Button class="mt-4" :btn-size="'auto'" @click.native="onClick">Explore <span> →</span></Button>
    </div>
  </a-col>
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
