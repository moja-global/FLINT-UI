<template>
  <button type="button" @click="onClick" :style="btnStyles">
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
    btnSize: {
      type: String,
      default: '100px'
    },
    btnColor: {
      type: String,
      default: '#475447'
    }
  },
  methods: {
    onClick() {
      this.$emit('onClick')
    }
  },
  computed: {
    btnStyles() {
      return {
        '--color': this.btnColor,
        '--width': this.btnSize
      }
    }
  }
}
</script>

<style scoped>
button {
  padding: 12px 24px 12px 24px;
  border: 1px solid #475447;
  border-radius: 5px;
  color: var(--btnColor);
  width: var(--btnSize);
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
}
button:hover {
  color: #fff;
  background-color: var(--color);
  transition: all .5s;
}
</style>