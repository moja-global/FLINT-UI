<template>
  <div>
    <button @click="add_title_to_formdata">
      Add simulation title to formdata by clicking here
    </button>
    <br />
    <br />
    <p>Upload config files here</p>
    <vue-dropzone
      id="dropzoneConfig"
      ref="myVueDropzoneConfig"
      :options="dropzoneOptionsConfig"
      :use-custom-slot="true"
      @vdropzone-removed-file="fileRemoved"
      @vdropzone-file-added="fileAddedConfig"
    ></vue-dropzone>

    <br />
    <p>Upload db files here</p>
    <vue-dropzone
      id="dropzoneDB"
      ref="myVueDropzoneDB"
      :options="dropzoneOptionsDB"
      :use-custom-slot="true"
      @vdropzone-removed-file="fileRemoved"
      @vdropzone-file-added="fileAddedDB"
    ></vue-dropzone>
    <br />
    <p>Upload input files here</p>
    <vue-dropzone
      id="dropzoneInput"
      ref="myVueDropzoneInput"
      :options="dropzoneOptionsInput"
      :use-custom-slot="true"
      @vdropzone-removed-file="fileRemoved"
      @vdropzone-file-added="fileAddedInput"
    ></vue-dropzone>
    <br />
    <br />
    <button @click="listFiles">
      List uploaded files in console by clicking here
    </button>
    <br />
    <br />
    <br />

    <button @click="add_title_to_formdata">
      Log FormData in console by clicking here
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
import axios from 'axios'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
export default {
  components: {
    vueDropzone: vue2Dropzone
  },
  data: function () {
    return {
      formData: new FormData(),
      dropzoneOptionsConfig: {
        url: 'http://127.0.0.1/gcbm/upload',
        autoQueue: true,
        autoProcessQueue: false,
        addRemoveLinks: true,
        thumbnailWidth: 15,
        maxFilesize: 1024,
        uploadMultiple: true,
        parallelUploads: 100,
        maxFiles: 100,
        createImageThumbnails: false
      },
      dropzoneOptionsDB: {
        url: 'http://127.0.0.1/gcbm/upload',
        autoQueue: true,
        autoProcessQueue: false,
        addRemoveLinks: true,
        thumbnailWidth: 15,
        maxFilesize: 1024,
        uploadMultiple: true,
        parallelUploads: 100,
        maxFiles: 100,
        createImageThumbnails: false
      },
      dropzoneOptionsInput: {
        url: 'http://127.0.0.1/gcbm/upload',
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
      console.log('list of config files')
      console.log(this.$refs.myVueDropzoneConfig.getAcceptedFiles())
      console.log('list of db files')
      console.log(this.$refs.myVueDropzoneDB.getAcceptedFiles())
      console.log('list of input files')
      console.log(this.$refs.myVueDropzoneInput.getAcceptedFiles())
    },
    add_title_to_formdata: function () {
      if (this.formData.entries().next().done === true) {
        this.formData.append('title', this.$store.state.gcbm.title)
      }
      console.log([...this.formData])
    },
    triggerSend: function () {
      axios
        .post('http://localhost:8081/gcbm/upload', this.formData)
        .then((response) => {
          // this._vm.$toast.success(`${response}`, { timeout: 2000 })
          console.log(response)
          console.log(response.data)
        })
        .catch((error) => {
          // this._vm.$toast.error(`${error}`, { timeout: 2000 })
          console.log(error)
        })
    },
    fileAddedConfig(file) {
      this.formData.append('config_files', file)
    },
    fileAddedDB(file) {
      this.formData.append('db', file)
    },
    fileAddedInput(file) {
      this.formData.append('input', file)
    },
    fileRemoved: function () {}
  }
}
</script>
