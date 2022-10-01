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
      :okButtonProps="{ disabled: !fileList.length }"
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
          <a-image :src="require('@/assets/gcbm-import-all-folder-structure.png')" />
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
import { UploadOutlined } from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'
import path from 'path'
import { ref } from 'vue'

import gcbmWhiteList from '@/utils/gcbmUploadAllWhitelist.json'
import { useStore } from 'vuex'

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
    const configs = ref({})

    const { ACCEPTED_FOLDER_NAMES, ACCEPTED_CONFIG_FILE_NAMES } = gcbmWhiteList

    const store = useStore()

    const handleRemove = (file) => {
      const index = fileList.value.indexOf(file)
      const newFileList = fileList.value.slice()
      newFileList.splice(index, 1)
      fileList.value = newFileList
    }

    const beforeUpload = (file) => {
      const pathList = file.webkitRelativePath.split('/')
      const subFolderName = pathList[1]

      if (!ACCEPTED_FOLDER_NAMES.includes(subFolderName)) {
        message.error(`'${subFolderName}' is not a valid folder name. Files from this folder will be ignored!`, 8)
        return false
      }

      if (pathList.length > 3) {
        message.error(
          `The '${subFolderName}' folder contains files from multiple subfolders. Files from the subfolders will be ignored!`,
          8
        )
        return false
      }

      const isWin = process.platform === 'win32'
      const fileName = isWin ? path.posix.basename(file.webkitRelativePath) : path.basename(file.webkitRelativePath)

      switch (subFolderName) {
        case 'config':
          if (!fileName.endsWith('.json') || !ACCEPTED_CONFIG_FILE_NAMES.includes(fileName)) {
            message.error(`'${fileName}' is not a valid config file. This file will be ignored!`, 8)
            return false
          }
          readConfigFileAndSaveInStore(file)
          break
      }

      fileList.value = [...fileList.value, file]

      return false
    }

    const handleUpload = () => {
      const formData = new FormData()
      fileList.value.forEach((file) => {
        formData.append('files[]', file)
      })
      uploading.value = true

      fetch('https://www.mocky.io/v2/5cc8019d300000980a055e76', {
        method: 'post',
        data: formData
      })
        .then(() => {
          fileList.value = []
          uploading.value = false
          message.success('upload successfully.')
          emit('ok')
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
      const configKeys = Object.keys(configs.value)
      const actionMapping = {
        'localdomain.json': 'setWholeGCBMLocalDomainState',
        'modules_cbm.json': 'setGCBMModulesState',
        'pools_cbm.json': 'setGCBMPoolsState',
        'spinup.json': 'setWholeGCBMSpinupState',
        'variables.json': 'setGCBMVariablesState',
        'internal_variables.json': 'setGCBMInternalVariablesState'
      }
      configKeys.forEach((key) => {
        if (!actionMapping[key]) {
          return
        }
        store.commit(actionMapping[key], { newState: configs.value[key] })
        console.log({ newState: configs.value[key] })
      })

      handleUpload()
    }

    const readConfigFileAndSaveInStore = (file) => {
      const reader = new FileReader()
      reader.onload = (e) => {
        const data = e.target.result
        const dataJSON = JSON.parse(data)
        switch (file.name) {
          case 'localdomain.json':
            configs.value[file.name] = dataJSON
            break

          case 'modules_cbm.json':
            if (!dataJSON.Modules) {
              message.error(`${file.name} is an invalid config file!`, 8)
              return
            }
            configs.value[file.name] = dataJSON['Modules']
            break

          case 'pools_cbm.json':
            if (!dataJSON.Pools) {
              message.error(`${file.name} is an invalid config file!`, 8)
              return
            }
            configs.value[file.name] = dataJSON['Pools']
            break

          case 'spinup.json':
            configs.value[file.name] = dataJSON
            console.log(configs.value[file.name])
            break

          case 'variables.json':
            if (!dataJSON.Variables) {
              message.error(`${file.name} is an invalid config file!`, 8)
              return
            }
            configs.value[file.name] = dataJSON['Variables']
            break

          case 'internal_variables.json':
            if (!dataJSON.Variables) {
              message.error(`${file.name} is an invalid config file!`, 8)
              return
            }
            configs.value[file.name] = dataJSON['Variables']
            break

          case 'modules_output.json':
            if (!dataJSON.Modules) {
              message.error(`${file.name} is an invalid config file!`, 8)
              return
            }
            configs.value[file.name] = dataJSON['Modules']
            break

          default:
            break
        }
      }
      reader.readAsText(file)
    }

    return {
      uploaded,
      uploading,
      fileList,
      handleOk,
      handleCancel,
      handleUpload,
      handleRemove,
      beforeUpload
    }
  }
}
</script>
