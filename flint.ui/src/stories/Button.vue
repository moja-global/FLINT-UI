<template>
  <button type="button" :class="classes" :style="style" @click="onClick">
    {{ label }}
  </button>
</template>

<script>
import './button.css'
export default {
  name: 'MyButton',

  props: {
    label: {
      type: String,
      required: true
    },
    primary: {
      type: Boolean,
      default: false
    },
    secondary: {
      type: Boolean,
    },
    success: {
      type: Boolean,
      default: false
    },
    danger: {
      type: Boolean,
      default: false
    },
    size: {
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1
      }
    },
    // eslint-disable-next-line vue/require-default-prop
    backgroundColor: {
      type: String
    },
    // eslint-disable-next-line vue/require-default-prop
    borderRadius: {
      type: String
    }
  },

  computed: {
    classes() {
      return {
        'storybook-button': true,
        'storybook-button--primary': this.primary,
        'storybook-button--secondary': this.secondary,
        'storybook-button--success': this.success,
        'storybook-button--danger': this.danger,
        [`storybook-button--${this.size}`]: true
      }
    },
    style() {
      return {
        backgroundColor: this.backgroundColor,
        borderRadius: this.borderRadius
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
