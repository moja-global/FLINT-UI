<template>
  <div>
    <p>Upload files here</p>
    <vue-dropzone
      id="dropzone"
      ref="myVueDropzone"
      :options="dropzoneOptions"
      :use-custom-slot="true"
      @vdropzone-success="uploadSuccess"
      @vdropzone-error="uploadError"
      @vdropzone-removed-file="fileRemoved"
    ></vue-dropzone>
    <br />
    <br />
    <button @click="listFiles">
      List uploaded files in console by clicking here
    </button>
    <br />
    <br />
    <br />

    <button @click="triggerSend">Click here to submit files</button>
    <br />
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
        autoQueue: false,
        method: 'POST',
        addRemoveLinks: true,
        thumbnailWidth: 15,
        maxFilesize: 1024
      }
    }
  },
  methods: {
    listFiles: function () {
      console.log(this.$refs.myVueDropzone.getAcceptedFiles())
    },
    uploadSuccess(file, response) {
      console.log('File Successfully Uploaded with file name: ' + response.file)
      this.fileName = response.file
    },
    uploadError(file, message) {
      console.log('An Error Occurred')
      console.log(file, message)
    },
    triggerSend() {
      if (this.$refs.myVueDropzone.getQueuedFiles().length) {
        this.$refs.myVueDropzone.processQueue()
      }
    },
    sendingEvent(file, xhr, formData) {
      console.log('file')
      console.log(file)
      //formData.append('_token', token)
      console.log(formData)
    },

    fileRemoved() {}
  }
}
</script>
