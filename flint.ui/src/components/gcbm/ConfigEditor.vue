<template>
  <a-modal
    :visible="configModalVisible"
    :title="`Edit ${fileName} Config Attributes`"
    width="70%"
    wrap-class-name="file-config-modal"
    @ok="handleModalOk"
    @cancel="$emit('hide-modal')"
    okText="Save"
  >
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1" tab="GUI Editor">
        <Vue3JsonEditor
          v-model="json"
          mode="tree"
          :show-btns="false"
          :expandedOnStart="true"
          @json-change="onJsonChange"
        />
      </a-tab-pane>
      <a-tab-pane key="2" tab="JSON Editor">
        <Vue3JsonEditor
          v-model="json"
          mode="code"
          :show-btns="false"
          :expandedOnStart="true"
          @json-change="onJsonChange"
        />
      </a-tab-pane>
    </a-tabs>
  </a-modal>
</template>

<script>
import { ref, watchEffect } from 'vue'
import { Vue3JsonEditor } from 'vue3-json-editor'

export default {
  name: 'ConfigEditor',
  props: {
    fileName: {
      type: String
    },
    fileConfig: {
      type: Object
    },
    configModalVisible: {
      type: Boolean
    }
  },
  components: {
    Vue3JsonEditor
  },
  setup(props, { emit }) {
    const json = ref(props.fileConfig)

    watchEffect(() => {
      json.value = props.fileConfig
    })

    function onJsonChange(value) {
      console.log('value:', value)
      json.value = value
    }

    const handleModalOk = () => {
      console.log('handleModalOk')
      emit('hide-modal')
    }

    return { json, activeKey: ref('1'), handleModalOk, onJsonChange }
  }
}
</script>

<style>
.file-config-modal .ant-modal-title {
  text-align: center;
}
.file-config-modal .ant-modal-body {
  padding-top: 0;
}
.file-config-modal .ant-tabs-nav-list,
.file-config-modal .ant-tabs-tab {
  flex-grow: 1;
  justify-content: space-evenly;
}

.file-config-modal .ant-tabs-tab {
  max-width: 100px;
}
.ace_editor,
.ace_editor * {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Droid Sans Mono', 'Consolas', monospace !important;
  font-size: 12px !important;
  font-weight: 400 !important;
  letter-spacing: 0 !important;
}
</style>
