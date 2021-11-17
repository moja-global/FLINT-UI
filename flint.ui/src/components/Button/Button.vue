<template>
  <button type="button" @click="onClick">
    {{ btnText }}
  </button>
</template>

<script>
export default {
  name: 'Button',

  props: {
    btnText: {
      type: String,
      required: true
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String
    },
    color: {
      type: String 
    }
  },
  methods: {
    onClick() {
      this.$emit('onClick')
    }
  }
}
</script>

<style scoped>
button {
  padding: 12px 24px 12px 24px;
  border: 1px solid #475447;
  border-radius: 5px;
  color: #475447;
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
}
button:hover {
  color: #fff;
  background-color: #475447;
  transition: all .5s;
}
</style>