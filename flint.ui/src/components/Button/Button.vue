<template>
  <button type="button" :style="btnStyles" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',

  props: {
    isDisabled: {
      type: Boolean,
      default: false
    },
    btnSize: {
      type: String,
      default: '100px'
    },
    btnColor: {
      type: String,
      default: '#475447'
    }
  },
  computed: {
    btnStyles() {
      return {
        '--color': this.btnColor,
        '--width': this.btnSize
      }
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
  padding: 0.75rem 1.5rem;
  border: 1px solid #475447;
  border-radius: 5px;
  color: var(--btnColor);
  width: var(--width);
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
}
button:hover {
  color: #fff;
  background-color: var(--color);
  transition: all 0.5s;
}
</style>
