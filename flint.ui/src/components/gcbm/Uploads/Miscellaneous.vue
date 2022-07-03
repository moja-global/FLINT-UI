<template>
  <div class="py-4 px-8 text-earth">
    <a-typography-title :level="2">
      <span class="font-normal text-earth"> Miscellaneous </span>
    </a-typography-title>
    <a-typography-text>
      <span class="text-earth mb-6 block"> Upload your miscellaneous files. </span>
    </a-typography-text>
    <UploadAndEditFiles fileType="miscellaneous" />
  </div>
</template>

<script>
import UploadAndEditFiles from '@/components/gcbm/UploadAndEditFiles.vue'
export default {
  name: 'Miscellaneous',
  components: {
    UploadAndEditFiles
  },
  setup() {
    return {}
  }
}
</script>
