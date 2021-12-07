<template>
  <div>
    <div class="relative md:ml-64 bg-blueGray-100">
      <div class="px-4 md:px-10 mx-auto w-full -m-24 h-screen">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FLINTLayout'
}
</script>
