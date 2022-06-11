<template>
  <div class="accordion">
    <slot></slot>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  provide() {
    return { Accordion: this.Accordion }
  },
  props: {},
  setup() { 
      const count = ref(0)
      const active = ref(null) 

      const Accordion = ref({
        count,
        active
      })

    return { Accordion }
  } 
}
</script>
