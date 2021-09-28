<template>
  <p class="mt-3">Copyright © 2021 moja global</p>
</template>

<script>
import './footer.css'
export default {
  name: 'Card',

  methods: {
    onClick() {
      this.$emit('onClick')
    }
  }
}
</script>
