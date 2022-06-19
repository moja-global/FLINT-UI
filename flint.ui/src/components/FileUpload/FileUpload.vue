<template>
  <a-row :gutter="[24, 24]" class="pt-4 pb-6">
    <a-col :md="12" :lg="8" :span="24">
      <div class="text-2xl text-center mb-2">Config Files</div>
      <div
        v-if="!files.config.length"
        id="dropzoneConfig"
        :class="`dropzone-gcbm ${resultConfig.isDragActive.value && 'drag-active'}`"
        ref="dropzoneConfig"
        v-bind="resultConfig.getRootProps()"
      >
        <div class="dropzone-custom-content">
          <input v-bind="resultConfig.getInputProps()" />
          <span class="font-semibold text-xl text-blueGray-700">Drag and drop to upload</span><br />
          <span>CONFIG FILES</span>
        </div>
      </div>
      <div v-else class="files-container">
        <div v-for="(file, index) in files.config" :key="'file-gcbm-config-' + index" class="file-container">
          <span class="text-lg text-blueGray-700">
            {{ file.name }}
          </span>
          <br />
          <span>{{ bytesToKB(file.size) }}</span>
        </div>
      </div>
    </a-col>

    <a-col :md="12" :lg="8" :span="24">
      <div class="text-2xl text-center mb-2">Database</div>
      <div
        v-if="!files.db.length"
        id="dropzoneDB"
        :class="`dropzone-gcbm ${resultDB.isDragActive.value && 'drag-active'}`"
        ref="dropzoneDB"
        v-bind="resultDB.getRootProps()"
      >
        <div class="dropzone-custom-content">
          <input v-bind="resultDB.getInputProps()" />
          <span class="font-semibold text-xl text-blueGray-700">Drag and drop to upload</span><br />
          <span>DB FILES</span>
        </div>
      </div>
      <div v-else class="files-container">
        <div v-for="(file, index) in files.db" :key="'file-gcbm-db-' + index" class="file-container">
          <span class="text-lg text-blueGray-700">
            {{ file.name }}
          </span>
          <br />
          <span>{{ bytesToKB(file.size) }}</span>
        </div>
      </div>
    </a-col>

    <a-col :md="12" :lg="8" :span="24">
      <div class="text-2xl text-center mb-2">Input Files</div>
      <div
        v-if="!files.input.length"
        id="dropzoneInput"
        :class="`dropzone-gcbm ${resultInput.isDragActive.value && 'drag-active'}`"
        ref="dropzoneInput"
        v-bind="resultInput.getRootProps()"
      >
        <div class="dropzone-custom-content">
          <input v-bind="resultInput.getInputProps()" />
          <span class="font-semibold text-xl text-blueGray-700">Drag and drop to upload</span><br />
          <span>INPUT FILES</span>
        </div>
      </div>
      <div v-else class="files-container">
        <div v-for="(file, index) in files.input" :key="'file-gcbm-input-' + index" class="file-container">
          <span class="text-lg text-blueGray-700">
            {{ file.name }}
          </span>
          <br />
          <span>{{ bytesToKB(file.size) }}</span>
        </div>
      </div>
    </a-col>

    <!-- <button @click="listFiles"> 
      List uploaded files in console by clicking here
    </button> -->
    <!--
    <button>
      Log FormData in console by clicking here
    </button> -->

    <!-- <button @click="triggerSend">Click here to submit files</button> -->
  </a-row>
</template>

<script>
import { ref } from 'vue'
import { useDropzone } from 'vue3-dropzone'

import axios from 'axios'
import { useToast } from 'vue-toastification'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    const formData = new FormData()
    const files = ref({
      config: [],
      db: [],
      input: []
    })

    const dropzoneConfig = {
      maxSize: 5e6,
      multiple: true,
      maxFiles: 100
    }

    function onConfigDrop(acceptFiles) {
      acceptFiles.forEach((file) => {
        formData.append('config_files', file)
      })
      files.value.config = acceptFiles
      console.log(acceptFiles)
    }

    function onDBDrop(acceptFiles) {
      acceptFiles.forEach((file) => {
        formData.append('db', file)
      })
      console.log(acceptFiles)
      files.value.db = acceptFiles
    }

    function onInputDrop(acceptFiles) {
      acceptFiles.forEach((file) => {
        formData.append('input', file)
      })
      console.log(acceptFiles)
      files.value.input = acceptFiles
    }

    const resultConfig = useDropzone({ onDrop: onConfigDrop, ...dropzoneConfig })

    const resultDB = useDropzone({ onDrop: onDBDrop, ...dropzoneConfig })

    const resultInput = useDropzone({ onDrop: onInputDrop, ...dropzoneConfig })

    function bytesToKB(bytes) {
      return parseFloat((bytes / 1000).toFixed(2)) + ' KB'
    }

    function add_title_to_formdata() {
      //if (this.formData.entries().next().done === true) {
      this.formData.append('title', store.state.gcbm.DropdownSelectedSim)
      // }
      console.log([...this.formData])
    }

    function triggerSend() {
      console.log('list of config files')
      console.log(this.$refs.dropzoneConfig.getAcceptedFiles())
      console.log('list of db files')
      console.log(this.$refs.myVueDropzoneDB.getAcceptedFiles())
      console.log('list of input files')
      console.log(this.$refs.myVueDropzoneInput.getAcceptedFiles())
      const toast = useToast()

      if (store.state.gcbm.DropdownSelectedSim == '') {
        toast.error('Title cannot be empty, Select a valid simulation title from the dropdown', { timeout: 5000 })
      } else {
        this.add_title_to_formdata()
        console.log([...this.formData])

        axios
          .post(`${process.env.VUE_APP_REST_API_GCBM}/gcbm/upload`, this.formData)
          .then((response) => {
            toast.success(`${response.data.data}`, { timeout: 3000 })
            console.log(response)
            console.log(response.data)
          })
          .catch((error) => {
            toast.error(`${error}`, { timeout: 2000 })
            console.log(error)
          })
      }
    }
    return {
      files,
      formData,
      resultConfig,
      resultDB,
      resultInput,
      bytesToKB,
      add_title_to_formdata,
      triggerSend
    }
  }
}
</script>

<style scoped>
.dropzone-custom-content {
  text-align: center;
  margin: 2em 0;
  text-overflow: clip;
}

.dropzone-gcbm:hover {
  cursor: pointer;
  background-color: #f5f5f5;
}

.dropzone-gcbm {
  border: 2px solid #e5e5e5;
  font-family: Arial, sans-serif;
  letter-spacing: 0.2px;
  color: #777;
  -webkit-transition: 0.2s linear;
  transition: 0.2s linear;
  min-height: 190px;
  background: #fff;
  padding: 20px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.files-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #e5e5e5;
  gap: 10px;
  max-height: 200px;
  overflow-y: scroll;
  overflow-x: hidden;
}

.drag-active {
  border: 2px dashed #0087ff;
  background-color: #f5f5f5;
}

.file-container {
  padding: 2em 1em;
  width: 100%;
  color: #eee;
  background-color: theme('colors.earth');
  text-overflow: ellipsis;
}
</style>
