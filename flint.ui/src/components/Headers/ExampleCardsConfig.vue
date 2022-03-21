<template>
  <div class="relative bg-gradient-to-r from-green-400 to-blue-500 md:pt-32 pb-32 pt-12 w-full h-screen">
    <div class="mx-auto w-full">
      <div>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4 content-center">
            <card-info-config
              card-subtitle="POINT route"
              card-title="POINT"
              card-description="Point example"
              card-function-run="Run"
              card-function-config="Configure"
              card-method-name="point"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4 content-center">
            <card-info-config
              card-subtitle="ROTHC route"
              card-title="ROTHC"
              card-description="RothC example"
              card-function-run="Run"
              card-function-config="Configure"
              card-method-name="rothc"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardInfoConfig from '@/components/Cards/CardInfoConfig.vue'

export default {
  components: {
    CardInfoConfig
  }
}
</script>
