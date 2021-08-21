<template>
  <div>
    <vue-dropzone
      id="dropzone"
      ref="myVueDropzone"
      :options="dropzoneOptions"
    ></vue-dropzone>
    <button @click="listFiles">
      List uploaded files in console by clicking here
    </button>
  </div>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
export default {
  components: {
    vueDropzone: vue2Dropzone
  },
  data: function () {
    return {
      dropzoneOptions: {
        url: 'https://httpbin.org/post',
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        headers: { 'My-Awesome-Header': 'header value' }
      }
    }
  },
  methods: {
    listFiles: function () {
      console.log(this.$refs.myVueDropzone.getAcceptedFiles())
    }
  }
}
</script>
