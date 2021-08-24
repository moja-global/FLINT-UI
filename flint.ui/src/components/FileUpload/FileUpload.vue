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
      @vdropzone-sending="sendingEvent"
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
        autoQueue: true,
        autoProcessQueue: false,
        addRemoveLinks: true,
        thumbnailWidth: 15,
        maxFilesize: 1024,
        uploadMultiple: true,
        parallelUploads: 100,
        maxFiles: 100,
        createImageThumbnails: false
      }
    }
  },
  methods: {
    listFiles: function () {
      console.log(this.$refs.myVueDropzone.getAcceptedFiles())
    },
    uploadSuccess: function (file, response) {
      console.log('File Successfully Uploaded with file name: ' + response.file)
      this.fileName = response.file
    },
    uploadFailure: function (file, message) {
      console.log('An Error Occurred')
      console.log(file, message)
    },
    triggerSend: function () {
      this.$refs.myVueDropzone.processQueue()
    },
    sendingEvent: function (file, xhr, formData) {
      console.log('file name')
      if (file.name.includes('.db')) {
        formData.append('db=@', file)
        formData.append('input=@', file)
      }
      if (file.name.includes('.tiff')) {
        formData.append('input=@', file)
      }
      if (file.name.includes('.json')) {
        formData.append('input=@', file)
      }
      if (file.name.includes('.db')) {
        formData.append('db=@', file)
        formData.append('input=@', file)
      }

      //formData.append('_token', token)
      console.log(formData)
      formData.append('description', file)
    },
    fileRemoved: function () {}
  }
}
</script>
