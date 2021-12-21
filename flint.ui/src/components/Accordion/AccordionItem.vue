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
export default {
  inject: ['Accordion'],
  props: {},
  data() {
    return {
      index: null
    }
  },
  computed: {
    visible() {
      return this.index == this.Accordion.active
    }
  },
  created() {
    this.index = this.Accordion.count++
  },
  methods: {
    open() {
      if (this.visible) {
        this.Accordion.active = null
      } else {
        this.Accordion.active = this.index
      }
    },
    start(el) {
      el.style.height = el.scrollHeight + 'px'
    },
    end(el) {
      el.style.height = ''
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
