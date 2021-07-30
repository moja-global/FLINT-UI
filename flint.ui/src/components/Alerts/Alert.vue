<template>
  <div v-if="alertOpen" class="text-white text-sm px-6 py-4 border-0 rounded relative mb-4 bg-gradient-to-r from-pink-500 to-yellow-500">
    <span class="inline-block align-middle mr-8">
      {{alertText}}
    </span>
    <button class="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none" v-on:click="closeAlert()">
      <span>×</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "alert",
  data() {
    return {
      alertOpen: true
    }
  },
  methods: {
    closeAlert: function(){
      this.alertOpen = false;
    },
  },
  props: {
    alertText: {
      type: String, 
      default: "No such route exists!",
    },
  },
}
</script>