<template>
  <div class="pt-4 px-8 w-full">
    <a-typography-title><span class="font-normal text-earth"> Upload Files </span></a-typography-title>
    <!-- This router view is for rendering the upload routes like /gcbm/upload/classifiers, 
       /gcbm/upload/disturbances, etc. -->
    <router-view></router-view>
  </div>
</template>

<script>
// This component is a parent for all the upload components like Classifiers, Disturbances, etc.

export default {
  name: 'GCBMUpload',
  setup() {
    return {}
  }
}
</script>
