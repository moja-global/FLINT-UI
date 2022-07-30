<template>
  <div class="flex mb-2 justify-end">
    <a-button @click="onCancelClick" :type="enableColumnNameEditing ? 'default' : 'primary'">
      <template #icon>
        <EditOutlined v-if="!enableColumnNameEditing" />
        <CloseOutlined v-else />
      </template>
      <span v-if="!enableColumnNameEditing">Edit</span>
      <span v-else>Cancel</span>
    </a-button>
  </div>
  <a-table
    :loading="dbDataSource === null"
    :data-source="dbDataSource"
    :columns="tableColumns"
    :scroll="{ x: 'max-content', y: 400 }"
    :pagination="false"
  >
    <template #bodyCell="{ column, text, record }">
      <div v-if="enableColumnNameEditing">
        <a-input
          v-if="text !== ''"
          v-model:value="modifiedDbSource[record.key][column.dataIndex]"
          @pressEnter="save(record.key)"
          @change="onInputChange"
          :class="{
            editedCell: modifiedDbSource[record.key][column.dataIndex] !== dbDataSource[record.key][column.dataIndex]
          }"
        />
      </div>
      <div v-else :style="{ minHeight: '24px' }" class="text-left px-2">
        {{ text }}
      </div>
    </template>
  </a-table>
  <div v-show="unsavedChanges" class="unsaved-changes-div flex">
    <a-typography-text>{{
      emptyColumnNameError ? 'You cannot keep a column name empty!' : 'You have unsaved changes!'
    }}</a-typography-text>
    <a-button type="primary" :disabled="emptyColumnNameError" @click="onSaveClick">Save</a-button>
  </div>
</template>

<script>
import { message } from 'ant-design-vue'
import { cloneDeep } from 'lodash'
import { ref, watchEffect } from 'vue'
import { useStore } from 'vuex'
import { EditOutlined, CloseOutlined } from '@ant-design/icons-vue'

export default {
  name: 'DBEditor',
  components: { EditOutlined, CloseOutlined },
  props: {
    tableNames: {
      type: Object
    }
  },
  setup(props) {
    const modifiedDbSource = ref(null)
    const tableColumns = ref(null)
    const dbDataSource = ref(null)
    const unsavedChanges = ref(false)
    const emptyColumnNameError = ref(false)
    const enableColumnNameEditing = ref(false)

    const store = useStore()

    watchEffect(() => {
      let data = props.tableNames
      if (!props.tableNames) {
        data = store.state.gcbm.fileConfigs.inputDB
        if (Object.keys(data).length === 0) {
          console.error('inputDB table and column names are empty!')
        }
      }

      const keys = Object.keys(data)

      // create columns array according to ant design table's API.
      tableColumns.value = keys.map((tableName) => {
        return {
          title: tableName,
          dataIndex: tableName,
          width: 100
        }
      })

      // find the table with maximum columns
      const maxColumns = Math.max(...Object.values(data).map((table) => Object.keys(table).length))

      // create data source array according to ant design table's API.
      const dataSource = []
      for (let i = 0; i < maxColumns; ++i) {
        dataSource.push({ key: i })
        for (let j = 0; j < keys.length; ++j) {
          // Some tables can have lesser number of columns than others.
          // Add an empty string to the data source for those tables.
          dataSource[i][keys[j]] = data[keys[j]][i] ?? ''
        }
      }
      dbDataSource.value = dataSource
      modifiedDbSource.value = cloneDeep(dataSource)
    })

    function onInputChange() {
      unsavedChanges.value = true
      let foundEmpty = false
      // check if any input is empty in the modifiedDbSource
      for (let i = 0; i < modifiedDbSource.value.length; ++i) {
        for (let column in modifiedDbSource.value[i]) {
          if (dbDataSource.value[i][column] !== '' && modifiedDbSource.value[i][column] === '') {
            emptyColumnNameError.value = true
            foundEmpty = true
          }
        }
      }
      if (!foundEmpty) {
        emptyColumnNameError.value = false
      }
    }

    function onSaveClick() {
      // TODO: send new column, table names to the backend.
      unsavedChanges.value = false
      enableColumnNameEditing.value = false
      dbDataSource.value = cloneDeep(modifiedDbSource.value)
      message.success('Your changes are saved successfully!')
    }

    function onCancelClick() {
      if (enableColumnNameEditing.value) {
        // cancel click
        unsavedChanges.value = false
        modifiedDbSource.value = cloneDeep(dbDataSource.value)
      }
      enableColumnNameEditing.value = !enableColumnNameEditing.value
    }

    return {
      tableColumns,
      dbDataSource,
      unsavedChanges,
      modifiedDbSource,
      emptyColumnNameError,
      enableColumnNameEditing,
      onSaveClick,
      onInputChange,
      onCancelClick
    }
  }
}
</script>

<style scoped>
:deep(tbody .ant-table-cell) {
  padding: 4px !important;
}

.unsaved-changes-div {
  z-index: 20;
  position: fixed !important;
  bottom: 70px !important;
  right: 40px !important;
  background-color: theme('colors.blue.200');
  padding: 8px 16px;
  gap: 24px;
  border-radius: 4px;
  align-items: center;
}

.editedCell {
  border: 1px solid theme('colors.yellow.500') !important;
}
</style>
