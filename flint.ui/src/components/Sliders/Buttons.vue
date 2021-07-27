<template>
<div class="p-4 flex">
    <div class="w-1/2 flex justify-start">
     <button class="bg-white border shadow-sm p-2 rounded text-gray-700 flex items-center focus:outline-none focus:shadow-outline" @click="goPrevious">
       <i class="fas fa-chevron-left"></i>
        <span class="mx-2">Previous</span>
      </button>
    </div>
    <div class="w-1/2 flex justify-end">
        
        <button class="bg-white border shadow-sm p-2 rounded text-gray-700 flex items-center focus:outline-none focus:shadow-outline" @click="goNext">
        <span class="mx-2">Next</span>
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
</div>
</template>

<script>

export default {
    methods: {
    goNext () {
      return this.$router.go(this.$router.go(-1));
    },
    goPrevious () {
       return this.$router.go(this.$router.go(1));
    }
  }
}

</script>