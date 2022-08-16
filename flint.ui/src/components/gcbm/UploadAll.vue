<template>
  <div>
    <a-modal
      :visible="visible"
      title="Upload Simulation Data Folder"
      @cancel="handleCancel"
      @ok="handleOk"
      okText="Upload"
      :okLoading="uploading"
      :loading="uploading"
    >
      <a-upload-dragger
        directory
        name="file"
        style="padding: 14px"
        :file-list="fileList"
        :before-upload="beforeUpload"
        @remove="handleRemove"
      >
        <p class="ant-upload-drag-icon">
          <UploadOutlined />
        </p>
        <p class="ant-upload-text">Click or drag a folder to this area to upload</p>
        <p class="ant-upload-hint">Create separate folders for each file type!</p>
      </a-upload-dragger>
      <div v-show="!fileList.length">
        <a-typography-title :level="4" class="my-4">
          <span class="font-normal"> Sample Folder Structure: </span>
        </a-typography-title>
        <div class="flex justify-center bg-gray-200 py-2 mb-2 rounded-sm">
          <a-image :src="folderStructureImage" />
        </div>
        <a-typography-text>
          Keep your simulation files in appropriate folders. Some simulations do not require all the folders. <br />
          You can omit the folders which are not required for the simulation.
        </a-typography-text>
      </div>
    </a-modal>
  </div>
</template>

<script>
import folderStructureImage from '@/assets/gcbm-upload-folder-structure.png'
import { UploadOutlined } from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'
import { ref } from 'vue'

export default {
  name: 'UploadAll',
  emits: ['cancel', 'ok'],
  components: {
    UploadOutlined
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const uploaded = ref(false)
    const fileList = ref([])
    const uploading = ref(false)

    const handleRemove = (file) => {
      const index = fileList.value.indexOf(file)
      const newFileList = fileList.value.slice()
      newFileList.splice(index, 1)
      fileList.value = newFileList
    }

    const beforeUpload = (file) => {
      fileList.value = [...fileList.value, file]
      console.log(file)
      return false
    }

    const handleUpload = () => {
      const formData = new FormData()
      fileList.value.forEach((file) => {
        formData.append('files[]', file)
      })
      uploading.value = true

      // TODO: Parse relative path of each file and upload them of the appropriate endpoint.

      fetch('https://www.mocky.io/v2/5cc8019d300000980a055e76', {
        method: 'post',
        data: formData
      })
        .then(() => {
          fileList.value = []
          uploading.value = false
          message.success('upload successfully.')
        })
        .catch(() => {
          uploading.value = false
          message.error('upload failed.')
        })
    }

    const handleCancel = () => {
      emit('cancel')
    }

    const handleOk = () => {
      handleUpload()
    }

    return {
      uploaded,
      uploading,
      fileList,
      folderStructureImage,
      handleOk,
      handleCancel,
      handleUpload,
      handleRemove,
      beforeUpload
    }
  }
}
</script>
