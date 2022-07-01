<template>
  <a-upload-dragger
    v-model:fileList="fileList"
    name="file"
    :multiple="true"
    :before-upload="beforeUpload"
    @remove="handleRemove"
    @change="handleChange"
    @drop="handleDrop"
    style="padding: 14px"
  >
    <p class="ant-upload-drag-icon">
      <UploadOutlined />
    </p>
    <p class="ant-upload-text">Click or drag file to this area to upload</p>
    <p class="ant-upload-hint">Support for a single or bulk upload.</p>
  </a-upload-dragger>
</template>

<script>
import { ref } from 'vue'
import { UploadOutlined } from '@ant-design/icons-vue'
export default {
  name: 'UploadAndEditFiles',
  props: {
    fileType: {
      type: String
    }
  },
  components: {
    UploadOutlined
  },
  setup() {
    const fileList = ref([])
    const handleChange = (info) => {
      const status = info.file.status
      if (status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (status === 'done') {
        console.log(info)
        // message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        console.log(info)

        // message.error(`${info.file.name} file upload failed.`);
      }
    }
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
    const handleDrop = (e) => {
      e.preventDefault()
      console.log(e)
      console.log(fileList)
    }

    return { fileList, handleChange, handleDrop, handleRemove, beforeUpload }
  }
}
</script>
