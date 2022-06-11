<template>
  <div class="accordion__item cursor-pointer p-4 border-b-2">
    <div class="accoordion__trigger flex space-between" :class="{ accordion__trigger_active: visible }" @click="open">
      <!-- This slot will handle the title/header of the accordion and is the part you click on -->
      <slot name="accordion-trigger"></slot>
    </div>
    <transition name="accordion" @enter="start" @after-enter="end" @before-leave="start" @after-leave="end">
      <div v-show="visible" class="accordion__content">
        <!--This slot will handle all the content that is passed to the accordion -->
        <div>
          <slot name="accordion-content"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref, computed, inject } from 'vue'
export default { 
  props: {},

  setup() {
    const index = ref(null)
    const Accordion = inject['Accordion']

    const visible = computed(() => {
      return index.value == Accordion.active.value
    })
    
    function created() {
      index.value = Accordion.count.value++
    } 

    function open() {
      if (visible.value) {
        Accordion.active.value = null
      } else {
        Accordion.active.value = index.value
      }
    }

    function start(el) {
      el.style.height = el.scrollHeight + 'px'
    }

    function end(el) {
      el.style.height = ''
    }

    return {
      index,
      visible,
      created,
      open,
      start,
      end
    }
  } 
  } 

</script>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  will-change: height, opacity;
  transition: height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}
.accordion-enter,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}
</style>
