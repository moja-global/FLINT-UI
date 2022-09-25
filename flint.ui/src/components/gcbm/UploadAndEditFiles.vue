<template>
  <a-upload-dragger
    v-if="!uploadingVars.uploaded"
    :showUploadList="false"
    :disabled="fileList.length >= 1"
    name="file"
    :multiple="fileType !== 'inputDB'"
    :before-upload="beforeUpload"
    @remove="handleRemove"
    style="padding: 14px"
  >
    <p class="ant-upload-drag-icon">
      <UploadOutlined />
    </p>
    <p class="ant-upload-text">Click or drag file to this area to upload</p>
    <p class="ant-upload-hint">
      {{
        fileType === 'inputDB' ? 'You can only upload a single input database.' : 'Support for a single or bulk upload.'
      }}
    </p>
  </a-upload-dragger>

  <div v-if="!uploadingVars.uploaded" class="flex justify-center">
    <a-button
      type="primary"
      :disabled="fileList.length === 0"
      :loading="uploadingVars.uploading"
      style="margin-top: 16px"
      @click="handleUpload"
    >
      {{ uploadingVars.uploading ? 'Uploading' : 'Start Upload' }}
    </a-button>
  </div>

  <a-alert v-else message="Done Uploading!" showIcon type="success">
    <template #description>
      Your files have been uploaded.
      {{
        fileType === 'inputDB'
          ? 'You can edit the table and column names from your database in the table below, if needed.'
          : 'You can click on "Preview Config" button of any file to view or change it\'s generated configurations if needed.'
      }}
      <div>
        <a-typography-link @click="onUploadAgainClick"> Start another upload? </a-typography-link>
      </div>
    </template>
  </a-alert>

  <div
    v-for="file in fileList"
    :key="file.uid"
    :class="`my-4 transition-all relative
             duration-100 p-2 rounded-sm flex flex-col
             gap-2 border-dashed hover:border-gray-400`"
    style="border-width: 1px"
    @mouseover="() => onFileMouseOver(file)"
    @mouseout="() => onFileMouseOut(file)"
  >
    <div class="flex justify-between">
      <a-typography-title :level="5" :style="[file.status === 'error' ? { color: 'red', margin: 0 } : { margin: 0 }]">
        {{ file.name }}
      </a-typography-title>
      <!-- TODO: When clicked after uploading, should send a request to the backend to delete the file. -->
      <a-tooltip v-if="!uploadingVars.uploaded" title="Remove File">
        <a-button
          v-show="fileHoveredUid === file.uid"
          type="text"
          class="right-0 top-0"
          style="position: absolute"
          @click="() => handleRemove(file)"
        >
          <template #icon>
            <DeleteOutlined />
          </template>
        </a-button>
      </a-tooltip>
    </div>
    <div class="flex justify-between">
      <a-typography-text type="secondary"> {{ bytesToKB(file.size) }}</a-typography-text>
      <a-button
        v-if="fileType !== 'inputDB'"
        :loading="previewFileLoadingUid === file.uid"
        :disabled="!uploadingVars.uploaded"
        type="primary"
        @click="() => onPreviewConfigClick(file)"
      >
        Preview Config
      </a-button>
    </div>
  </div>
  <div v-if="fileType === 'inputDB' && uploadingVars.uploaded">
    <DBEditor :tableNames="tableNames" />
  </div>

  <ConfigEditor
    :fileConfig="selectedFile.config['attributes']"
    :fileName="selectedFile.name"
    @hideModal="() => (configModalVisible = false)"
    :configModalVisible="configModalVisible"
  />
</template>

<script>
import { ref } from 'vue'
import { UploadOutlined, DeleteOutlined } from '@ant-design/icons-vue'
import useFunctions from '@/utils/useFunctions'
import { message, Modal } from 'ant-design-vue'
import { useStore } from 'vuex'

import ConfigEditor from '@/components/gcbm/ConfigEditor.vue'
import DBEditor from '@/components/gcbm/DBEditor.vue'
import { cloneDeep } from 'lodash'

export default {
  name: 'UploadAndEditFiles',
  props: {
    fileType: {
      type: String
    },
    acceptedFileExtension: {
      type: String,
      default: 'tiff'
    }
  },
  components: {
    ConfigEditor,
    UploadOutlined,
    DeleteOutlined,
    DBEditor
  },
  setup(props) {
    const fileList = ref([])
    const fileHoveredUid = ref(null)
    const uploadingVars = ref({
      uploading: false,
      uploaded: false
    })
    const configModalVisible = ref(false)
    const previewFileLoadingUid = ref(null)

    // caching file configs, so that we won't need to
    // fetch them again when we open the config editor
    const fileConfigs = ref({})

    const selectedFile = ref({
      name: null,
      config: {}
    })

    // Table, column names received from the backend, in case of Input DB upload section.
    const tableNames = ref(null)

    const store = useStore()

    fileList.value = [...store.state.gcbm.filesUploaded[props.fileType]]
    uploadingVars.value.uploaded = fileList.value.length > 0

    const backendFileTypeName = props.fileType === 'inputDB' ? 'db' : props.fileType

    const { bytesToKB } = useFunctions()

    const handleRemove = (file) => {
      const newFileList = fileList.value.filter((f) => f.uid !== file.uid)
      fileList.value = newFileList
    }

    const beforeUpload = (file) => {
      const isValid = file.name.endsWith(props.acceptedFileExtension)

      if (!isValid) {
        message.error({
          content: `${file.name} is not a valid file type. You can only upload ${props.acceptedFileExtension} files.`,
          duration: 5
        })
        return false
      }

      fileList.value = [...fileList.value, file]
      return false
    }

    const handleUpload = () => {
      const formData = new FormData()
      formData.append('title', store.state.gcbm.config.title)

      fileList.value.forEach((file) => {
        formData.append(backendFileTypeName, file)
      })

      uploadingVars.value.uploading = true

      fetch(`${process.env.VUE_APP_REST_API_GCBM}/gcbm/upload/${backendFileTypeName}`, {
        method: 'POST',
        body: formData
      })
        .then((res) => res.text())
        .then(() => {
          if (props.fileType === 'inputDB') {
            const dbFormData = new FormData()
            dbFormData.append('title', store.state.gcbm.config.title)

            fetch(`${process.env.VUE_APP_REST_API_GCBM}/upload/db/tables`, {
              method: 'POST',
              body: dbFormData
            })
              .then((res) => res.json())
              .then((resJson) => {
                tableNames.value = resJson
                console.log(tableNames.value)
                store.commit('setGCBMInputDBConfigState', { newState: tableNames })
                uploadingVars.value.uploading = false
                uploadingVars.value.uploaded = true
                message.success('Upload Successful!')
              })
          } else {
            uploadingVars.value.uploading = false
            uploadingVars.value.uploaded = true
            message.success('Upload Successful!')
          }

          const modifiedFileList = fileList.value.map((file) => ({
            name: file.name,
            uid: file.uid,
            status: 'success',
            size: file.size
          }))
          store.commit('setGCBMUploadFilesState', { fileType: props.fileType, fileList: modifiedFileList })
        })
        .catch((err) => {
          uploadingVars.value.uploading = false
          message.error('Upload Failed. Please try again later.')
          console.error(err)
          // TODO: Send some logs to the backend for error resolution.
        })
    }

    const onFileMouseOver = (file) => {
      fileHoveredUid.value = file.uid
    }

    const onFileMouseOut = () => {
      fileHoveredUid.value = null
    }

    const onPreviewConfigClick = (file) => {
      const simulationTitle = store.state.gcbm.config.title
      const fileConfig = store.state.gcbm.fileConfigs[props.fileType][file.name]

      selectedFile.value.name = file.name
      previewFileLoadingUid.value = file.uid

      if (fileConfig) {
        fileConfigs.value[file.name] = fileConfig
        selectedFile.value.config = fileConfig
        configModalVisible.value = true
        previewFileLoadingUid.value = null
      } else {
        // TODO: Add appropriate backend endpoint when ready.
        fetch('https://run.mocky.io/v3/76a21629-87df-477f-bd78-633e0e48dc1c', {
          method: 'POST',
          body: {
            simulationTitle,
            fileName: file.name
          }
        })
          .then((res) => res.json())
          .then((res) => {
            const tempRes = cloneDeep(res)
            // make sure that the 'attributes' key exists
            if (!tempRes['attributes']) {
              tempRes['attributes'] = {}
            }
            fileConfigs.value[file.name] = tempRes
            selectedFile.value.config = tempRes
            configModalVisible.value = true
            previewFileLoadingUid.value = null
            store.commit('setGCBMFileConfig', { fileType: props.fileType, fileName: file.name, fileConfig: tempRes })
          })
          .catch((err) => {
            console.log(err)
            message.error('Failed to fetch config.')
          })
      }
    }

    const handleModalOk = () => {
      configModalVisible.value = false
    }

    const onUploadAgainClick = () => {
      Modal.confirm({
        title: 'Are you sure you want to upload files again?',
        content: 'This will erase all your previously uploaded files in this section.',
        type: 'warning',
        onOk: () => {
          // TODO: Call backend endpoint to delete previously uploaded files.
          uploadingVars.value.uploaded = false
          uploadingVars.value.uploading = false
          fileList.value = []
          store.commit('setGCBMUploadFilesState', { fileType: props.fileType, fileList: [] })
        }
      })
    }

    return {
      fileList,
      bytesToKB,
      tableNames,
      selectedFile,
      uploadingVars,
      fileHoveredUid,
      configModalVisible,
      previewFileLoadingUid,
      handleRemove,
      beforeUpload,
      handleUpload,
      handleModalOk,
      onFileMouseOut,
      onFileMouseOver,
      onUploadAgainClick,
      onPreviewConfigClick
    }
  }
}
</script>
