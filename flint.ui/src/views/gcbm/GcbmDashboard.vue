<template>
  <div>
    <div class="flex flex-wrap">
    </div>
    <div class="flex flex-wrap mt-4">
      <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
      
      </div>
    </div>
  </div>

    <!---
    <file-upload
    ref="upload"
    v-model="files"
    post-action="/post.method"
    put-action="/put.method"

    chunk-enabled
    :chunk="{
      action: '/upload/chunk',
      minSize: 1048576,
      maxActive: 3,
      maxRetries: 5,

      // Example in the case your backend also needs the user id to operate
      startBody: {
        user_id: user.id
      }
    }"

    @input-file="inputFile"
    @input-filter="inputFilter"
  >
  Upload file
  </file-upload> -->


  
  
</template>
<script>
// import VueUploadComponent from 'vue-upload-component'
// app.component('file-upload', VueUploadComponent)


// import FileUpload from 'vue-upload-component/dist/vue-upload-component.part.js'
export default {
  components: {
    // FileUpload,
  },
  data() {
    return {
      files: []
    }
  },
}
</script>

<style>
.file-uploads {
  overflow: hidden;
  position: relative;
  text-align: center;
  display: inline-block;
}
.file-uploads.file-uploads-html4 input[type="file"] {
  opacity: 0;
  font-size: 20em;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  width: 100%;
  height: 100%;
}
.file-uploads.file-uploads-html5 input[type="file"] {
  overflow: hidden;
  position: fixed;
  width: 1px;
  height: 1px;
  z-index: -1;
  opacity: 0;
}
</style>