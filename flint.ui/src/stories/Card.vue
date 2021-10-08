<template>
  <div class="card">
    <h3 class="card-title">{{ cardTitle }}</h3>
    <p class="card-description">{{ cardDescription }}</p>
    <div className="card-body-content">
      {{ CardBodyContent }}
    </div>
  </div>
</template>

<script>
import './card.css'
export default {
  name: 'Card',

  props: {
    cardTitle: {
      type: String,
      default: 'This is a title'
    },
    cardDescription: {
      type: String,
      default: 'This is the description of the card'
    }
  },

  methods: {
    onClick() {
      this.$emit('onClick')
    }
  }
}
</script>

