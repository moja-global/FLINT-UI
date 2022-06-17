<template>
  <a-layout>
    <a-layout-sider width="260" style="background: #fff" class="pb-16">
      <div class="px-5">
        <a-typography-title style="margin-bottom: 0px">
          <span class="font-normal mb-2 text-earth">GCBM</span>
        </a-typography-title>
        <a-typography-text class="text-lg block">
          <span class="flex items-center mb-2">
            <setting-outlined class="mr-2" />
            <span>Simulation Editor</span>
          </span>
        </a-typography-text>
        <a-typography-text>
          <span>
            <span>Already have a configuration ready? </span>
            <a href="#">Import</a>
          </span>
        </a-typography-text>
      </div>
      <a-divider />
      <a-menu mode="inline" :style="{ borderRight: 0 }">
        <a-sub-menu key="sub1">
          <template #title>
            <span> Local Domain </span>
          </template>
          <a-menu-item key="1">Start and End date</a-menu-item>
          <a-menu-item key="2">Number of Threads</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="sub2">
          <span>Modules</span>
        </a-menu-item>
        <a-menu-item key="sub3">
          <span>Variables</span>
        </a-menu-item>
        <a-menu-item key="sub4">
          <span>Pools</span>
        </a-menu-item>
        <a-menu-item key="sub5">
          <span>Spinup Parameters</span>
        </a-menu-item>
        <a-menu-item key="sub6">
          <span>Upload Files</span>
        </a-menu-item>
        <a-menu-item key="sub7">
          <span>Libraries</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout class="bg-gray-50" style="padding: 0 24px 24px"><LocalDomain /> </a-layout>
  </a-layout>
</template>

<script>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { SettingOutlined } from '@ant-design/icons-vue'
import LocalDomain from '../../components/GCBM/LocalDomain.vue'

export default {
  name: 'DashboardPage',
  components: {
    SettingOutlined,
    LocalDomain
  },

  setup() {
    const multiple = ref(null)
    const simulation_title = ref('')

    const path = useRoute().path
    console.log(path)

    return {
      multiple,
      simulation_title
    }

    return {
      multiple,
      simulation_title,
      checkforSimtitle,
      isTitle,
      sendToAPI,
      check_status
    }
  }
}
</script>
