<template>
  <div class="py-4 px-8 text-earth">
    <a-typography-title :level="2">
      <span class="font-normal text-earth"> Disturbances </span>
    </a-typography-title>
    <a-typography-text>
      <span class="text-earth mb-6 block"> Upload your disturbances files. </span>
    </a-typography-text>
    <UploadAndEditFiles fileType="disturbances" />
  </div>
</template>

<script>
import UploadAndEditFiles from '@/components/gcbm/UploadAndEditFiles.vue'
export default {
  name: 'Disturbances',
  components: {
    UploadAndEditFiles
  },
  setup() {
    return {}
  }
}
</script>
