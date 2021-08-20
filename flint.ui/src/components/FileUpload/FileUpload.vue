<template>
  <div>
    <file-pond
      ref="pond"
      name="test"
      label-idle="Drop files here..."
      :allow-multiple="true"
      acceipted-file-types="application/zip"
      server="/api"
      :files="myFiles"
      @init="handleFilePondInit"
    />
  </div>
</template>

<script>
// accepted-file-types="image/tiff, image/x-tiff, application/json, application/x-geotiff, application/gml+xml, application/x-wms, text/xml"

// Import Vue FilePond
import vueFilePond from 'vue-filepond'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'

// Import FilePond plugins
// Please note that you need to install these plugins separately

// Import image preview plugin styles
// import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

// Import image preview and file type validation plugins
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
// import FilePondPluginImagePreview from 'filepond-plugin-image-preview'

// Create component
const FilePond = vueFilePond(
  FilePondPluginFileValidateType
  // FilePondPluginImagePreview
)

export default {
  components: {
    FilePond
  },
  data: function () {
    return { myFiles: [] }
  },
  methods: {
    handleFilePondInit: function () {
      console.log('FilePond has initialized')

      // FilePond instance methods are available on `this.$refs.pond`
    }
  }
}
</script>
