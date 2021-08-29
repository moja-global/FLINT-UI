<template>
  <div>
    <div class="flex flex-wrap my-5">
      <div class="w-4/12 px-4 content-center">
        <vue-dropzone
          id="dropzoneConfig"
          ref="myVueDropzoneConfig"
          :options="dropzoneOptionsConfig"
          :use-custom-slot="true"
          @vdropzone-removed-file="fileRemoved"
          @vdropzone-file-added="fileAddedConfig"
        >
          <div class="dropzone-custom-content">
            <h3 class="dropzone-custom-title">Drag and drop to upload</h3>
            <span>CONFIG FILES</span>
          </div>
        </vue-dropzone>
      </div>

      <div class="w-4/12 px-4 content-center">
        <vue-dropzone
          id="dropzoneDB"
          ref="myVueDropzoneDB"
          :options="dropzoneOptionsDB"
          :use-custom-slot="true"
          @vdropzone-removed-file="fileRemoved"
          @vdropzone-file-added="fileAddedDB"
        >
          <div class="dropzone-custom-content">
            <h3 class="dropzone-custom-title">Drag and drop to upload</h3>
            <span>DB FILES</span>
          </div>
        </vue-dropzone>
      </div>

      <div class="w-4/12 px-4 content-center">
        <vue-dropzone
          id="dropzoneInput"
          ref="myVueDropzoneInput"
          :options="dropzoneOptionsInput"
          :use-custom-slot="true"
          @vdropzone-removed-file="fileRemoved"
          @vdropzone-file-added="fileAddedInput"
        >
          <div class="dropzone-custom-content">
            <h3 class="dropzone-custom-title">Drag and drop to upload</h3>
            <span>INPUT FILES</span>
          </div>
        </vue-dropzone>
      </div>
    </div>

    <!--  <button @click="listFiles">
      List uploaded files in console by clicking here
    </button> -->
    <!--
    <button>
      Log FormData in console by clicking here
    </button> -->

    <!-- <button @click="triggerSend">Click here to submit files</button> -->
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
    // listFiles: function () {
    //   console.log('list of config files')
    //   console.log(this.$refs.myVueDropzoneConfig.getAcceptedFiles())
    //   console.log('list of db files')
    //   console.log(this.$refs.myVueDropzoneDB.getAcceptedFiles())
    //   console.log('list of input files')
    //   console.log(this.$refs.myVueDropzoneInput.getAcceptedFiles())
    // },
    add_title_to_formdata: function () {
      if (this.formData.entries().next().done === true) {
        this.formData.append(
          'title',
          this.$store.state.gcbm.DropdownSelectedSim
        )
      }
      console.log([...this.formData])
    },
    triggerSend: function () {
      console.log('list of config files')
      console.log(this.$refs.myVueDropzoneConfig.getAcceptedFiles())
      console.log('list of db files')
      console.log(this.$refs.myVueDropzoneDB.getAcceptedFiles())
      console.log('list of input files')
      console.log(this.$refs.myVueDropzoneInput.getAcceptedFiles())

      if (this.$store.state.gcbm.DropdownSelectedSim == '') {
        this.$toast.error(
          'Title cannot be empty, Select a valid simulation title from the dropdown',
          { timeout: 5000 }
        )
      } else {
        this.add_title_to_formdata()
        console.log([...this.formData])

        axios
          .post('http://localhost:8081/gcbm/upload', this.formData)
          .then((response) => {
            this.$toast.success(`${response.data.data}`, { timeout: 3000 })
            console.log(response)
            console.log(response.data)
          })
          .catch((error) => {
            this.$toast.error(`${error}`, { timeout: 2000 })
            console.log(error)
          })
      }
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

<style>
.dropzone-custom-content {
  text-align: center;
}

.dz-progress,
.dz-image {
  display: none;
}

.dropzone-custom-title {
  margin-top: 0;
  color: #4d1fb9;
  font-weight: 600;
}

.dropzone .dz-preview {
  height: 30%;
}
</style>
