<template>
  <a-upload-dragger
    v-model:fileList="fileList"
    name="file"
    :multiple="true"
    :before-upload="beforeUpload"
    @remove="handleRemove"
    @change="handleChange"
    @drop="handleDrop"
    style="padding: 14px; margin-bottom: 28px"
  >
    <p class="ant-upload-drag-icon">
      <UploadOutlined />
    </p>
    <p class="ant-upload-text">Click or drag file to this area to upload</p>
    <p class="ant-upload-hint">Support for a single or bulk upload.</p>
    <template #itemRender="{ file }">
      <div
        :class="`my-4 transition-all relative
                 duration-100 p-2 rounded-sm flex flex-col
                 gap-2 border-dashed hover:border-gray-400`"
        style="border-width: 1px"
        @mouseover="() => onFileMouseOver(file)"
        @mouseout="() => onFileMouseOut(file)"
      >
        <div class="flex justify-between">
          <a-typography-title
            :level="5"
            :style="[file.status === 'error' ? { color: 'red', margin: 0 } : { margin: 0 }]"
          >
            {{ file.uid }}
          </a-typography-title>
          <a-button v-show="fileHoveredUid === file.uid" type="text" class="right-0 top-0" style="position: absolute">
            <template #icon>
              <DeleteOutlined />
            </template>
          </a-button>
        </div>
        <div class="flex justify-between">
          <a-typography-text type="secondary"> {{ bytesToKB(file.size) }}</a-typography-text>
          <a-button type="primary">Preview Config</a-button>
        </div>
      </div>
    </template>
  </a-upload-dragger>
</template>

<script>
import { ref } from 'vue'
import { UploadOutlined, DeleteOutlined } from '@ant-design/icons-vue'
import useFunctions from '@/utils/useFunctions'

export default {
  name: 'UploadAndEditFiles',
  props: {
    fileType: {
      type: String
    }
  },
  components: {
    UploadOutlined,
    DeleteOutlined
  },
  setup() {
    const fileList = ref([])
    const fileHoveredUid = ref(null)

    const { bytesToKB } = useFunctions()

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

    const onFileMouseOver = (file) => {
      fileHoveredUid.value = file.uid
      console.log(fileHoveredUid.value)
    }

    const onFileMouseOut = () => {
      fileHoveredUid.value = null
    }

    return {
      fileList,
      bytesToKB,
      fileHoveredUid,
      handleChange,
      handleDrop,
      handleRemove,
      beforeUpload,
      onFileMouseOver,
      onFileMouseOut
    }
  }
}
</script>
