<template>
  <a-upload-dragger
    :showUploadList="false"
    v-model:fileList="fileList"
    name="file"
    :multiple="true"
    :before-upload="beforeUpload"
    @remove="handleRemove"
    style="padding: 14px"
  >
    <p class="ant-upload-drag-icon">
      <UploadOutlined />
    </p>
    <p class="ant-upload-text">Click or drag file to this area to upload</p>
    <p class="ant-upload-hint">Support for a single or bulk upload.</p>
  </a-upload-dragger>

  <div class="flex justify-center">
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
      <a-tooltip title="Remove File">
        <a-button
          v-show="fileHoveredUid === file.uid"
          type="text"
          class="right-0 top-0"
          style="position: absolute"
          @click="handleRemove"
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
        :loading="previewFileLoadingUid === file.uid"
        :disabled="!uploadingVars.uploaded"
        type="primary"
        @click="() => onPreviewConfigClick(file)"
      >
        Preview Config
      </a-button>
    </div>
  </div>

  <ConfigEditor
    :fileConfig="selectedFile.config"
    :fileName="selectedFile.name"
    @hideModal="() => (configModalVisible = false)"
    :configModalVisible="configModalVisible"
  />
</template>

<script>
import { ref } from 'vue'
import { UploadOutlined, DeleteOutlined } from '@ant-design/icons-vue'
import useFunctions from '@/utils/useFunctions'
import { message } from 'ant-design-vue'
import { useStore } from 'vuex'

import ConfigEditor from '@/components/gcbm/ConfigEditor.vue'

export default {
  name: 'UploadAndEditFiles',
  props: {
    fileType: {
      type: String
    }
  },
  components: {
    ConfigEditor,
    UploadOutlined,
    DeleteOutlined
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

    const store = useStore()

    const { bytesToKB } = useFunctions()

    const handleRemove = (file) => {
      const index = fileList.value.indexOf(file)
      const newFileList = fileList.value.slice()
      newFileList.splice(index, 1)
      fileList.value = newFileList
    }

    const beforeUpload = (file) => {
      fileList.value = [...fileList.value, file]
      return false
    }

    const handleUpload = () => {
      const formData = new FormData()
      fileList.value.forEach((file) => {
        formData.append('files[]', file)
      })

      uploadingVars.value.uploading = true

      fetch('https://www.mocky.io/v2/5cc8019d300000980a055e76', {
        method: 'POST',
        data: formData
      })
        .then(() => {
          uploadingVars.value.uploading = false
          uploadingVars.value.uploaded = true
          message.success('Upload Successful!')
        })
        .catch(() => {
          uploadingVars.value.uploading = false
          message.error('upload failed.')
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
      } else {
        fetch('https://run.mocky.io/v3/76a21629-87df-477f-bd78-633e0e48dc1c', {
          method: 'POST',
          body: {
            simulationTitle,
            fileName: file.name
          }
        })
          .then((res) => res.json())
          .then((res) => {
            fileConfigs.value[file.name] = res
            selectedFile.value.config = res
            configModalVisible.value = true
            previewFileLoadingUid.value = null
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

    return {
      fileList,
      bytesToKB,
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
      onPreviewConfigClick
    }
  }
}
</script>
