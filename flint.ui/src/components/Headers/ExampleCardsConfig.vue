<template>
  <div class="relative bg-gradient-to-r from-green-400 to-blue-500 md:pt-32 pb-32 pt-12 w-full h-screen">
    <div class="px-4 md:px-10 mx-auto w-full">
      <div>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4 content-center">
            <card-info-config
              cardSubtitle="POINT route"
              cardTitle="POINT"
              cardDescription="Point example"
              cardFunctionRun="Run"
              cardFunctionConfig="Configure"
              cardMethodName="point"
              cardAlertConfirmation="Point route ran successfully"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4 content-center">
            <card-info-config
              cardSubtitle="ROTHC route"
              cardTitle="ROTHC"
              cardDescription="RothC example"
              cardFunctionRun="Run"
              cardFunctionConfig="Configure"
              cardMethodName="rothc"
              cardAlertConfirmation="RothC route ran successfully"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardInfoConfig from "@/components/Cards/CardInfoConfig.vue";

export default {
  components: {
    CardInfoConfig,
  },
};
</script>
