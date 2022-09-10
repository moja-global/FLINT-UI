<template>
  <a-modal
    :footer="null"
    width="650px"
    :visible="modalVisible"
    title="Welcome to the GCBM Simulation Editor!"
    @cancel="onModalClose"
    wrap-class-name="gcbm-tour-modal"
  >
    <div class="steps-content mb-4">
      <a-typography-title :level="2">
        <PlusOutlined v-if="current === 0" />
        <UploadOutlined v-else-if="current === 1" />
        <ToolOutlined v-else-if="current === 2" />
        <PlayCircleOutlined v-else-if="current === 3" />
        {{ steps[current].modalTitle }}
      </a-typography-title>
      <div class="scroll-wrapper" :style="styles">
        <div ref="scrollDivRef" @scroll="onScroll" class="scroll">
          <div class="flex justify-center items-center" style="height: 300px; border: 1px solid #e8e8e8">
            <a-image :src="steps[current].img" alt="GCBM" style="" />
          </div>
          <div v-if="current === 0">
            <Create />
          </div>
          <div v-if="current === 1">
            <Upload />
          </div>
          <div v-if="current === 2">
            <Configure />
          </div>
          <div v-if="current === 3">
            <RunAndDownload />
          </div>
        </div>
      </div>
    </div>
    <a-steps size="small" v-model:current="current">
      <a-step v-for="item in steps" :key="item.title" :title="item.title" />
    </a-steps>
    <div class="flex justify-end mt-4">
      <a-button v-if="current > 0" style="margin-right: 8px" @click="prev">Previous</a-button>
      <a-button v-if="current == steps.length - 1" type="primary" @click="onModalClose"> Done </a-button>
      <a-button v-if="current < steps.length - 1" type="primary" @click="next">Next</a-button>
    </div>
  </a-modal>
</template>

<script>
import { ref, computed, toRef, watchEffect } from 'vue'
import { message } from 'ant-design-vue'
import { PlusOutlined, UploadOutlined, ToolOutlined, PlayCircleOutlined } from '@ant-design/icons-vue'
import Create from '@/components/gcbm/SimulationTourDescriptions/Create.vue'
import Upload from '@/components/gcbm/SimulationTourDescriptions/Upload.vue'
import Configure from '@/components/gcbm/SimulationTourDescriptions/Configure.vue'
import RunAndDownload from '@/components/gcbm/SimulationTourDescriptions/RunAndDownload.vue'

import CreateSimulationImg from '@/assets/simulation-tour/create-simulation.png'
import UploadFilesImg from '@/assets/simulation-tour/upload-files.png'
import ConfigureParametersImg from '@/assets/simulation-tour/configure-parameters.png'
import RunDownloadSimulationImg from '@/assets/simulation-tour/run-download-simulation.png'

export default {
  name: 'SimulationTour',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Create,
    Upload,
    Configure,
    RunAndDownload,
    PlusOutlined,
    UploadOutlined,
    ToolOutlined,
    PlayCircleOutlined
  },
  setup(props, { emit }) {
    const current = ref(0)
    const showGradientScroll = ref(true)
    const modalVisible = toRef(props, 'visible')
    const scrollDivRef = ref(null)

    watchEffect(() => {
      if ((modalVisible.value, scrollDivRef.value)) {
        scrollDivRef.value.scrollTop = 0
      }
      current.value
    })

    const onScroll = (e) => {
      const div = e.target
      if (div.scrollHeight - div.scrollTop === div.clientHeight) {
        showGradientScroll.value = false
      } else {
        showGradientScroll.value = true
      }
    }

    const onModalClose = () => {
      emit('close')
      current.value = 0
    }

    const styles = computed(() => {
      return {
        '--gradient': showGradientScroll.value ? 'linear-gradient(transparent, rgb(231, 231, 231))' : 'none'
      }
    })

    const next = () => {
      current.value++
    }

    const prev = () => {
      current.value--
    }

    const steps = [
      {
        title: 'Create',
        content: 'First-content',
        img: CreateSimulationImg,
        modalTitle: 'Create Simulation'
      },
      {
        title: 'Upload',
        content: 'Second-content',
        img: UploadFilesImg,
        modalTitle: 'Upload Files'
      },
      // {
      //   title: 'Review',
      //   content: 'Last-content',
      //   img: PreviewConfigImg,
      //   modalTitle: 'Review Configs'
      // },
      {
        title: 'Configure',
        content: 'Last-content',
        img: ConfigureParametersImg,
        modalTitle: 'Configure Parameters'
      },
      {
        title: 'Run',
        content: 'Last-content',
        img: RunDownloadSimulationImg,
        modalTitle: 'Run & Download Simulation'
      }
    ]

    return {
      steps,
      styles,
      message,
      current,
      scrollDivRef,
      modalVisible,
      next,
      prev,
      onScroll,
      onModalClose
    }
  }
}
</script>

<style>
:deep(.gcbm-tour-modal) {
  top: 0px !important;
  background-color: red;
}
.scroll-wrapper {
  position: relative;
}
.scroll {
  position: relative;
  max-height: 370px;
  overflow: auto;
  padding-bottom: 30px;
}
.scroll-wrapper::after {
  content: ' ';
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 1111;
  background-image: var(--gradient);
  height: 50px;
}
</style>
