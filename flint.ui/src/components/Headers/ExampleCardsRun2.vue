<template>
  <div
    class="
      relative
      bg-gradient-to-tl
      from-green-300
      via-blue-500
      to-purple-600
      md:pt-32
      pb-32
      pt-12
      w-full
      h-screen
    "
  >
    <div class="px-4 md:px-10 mx-auto w-full">
      <div>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4 content-center">
            <card-info-run
              card-subtitle="SPEC route"
              card-title="SPECIFICATION"
              card-description="Specifications"
              card-function-run="Run"
              card-method-name="spec"
            />
          </div>

          <div class="w-full lg:w-6/12 xl:w-3/12 px-4 content-center">
            <card-info-run
              card-subtitle="HELP route"
              card-title="HELP"
              card-description="Show all possible options"
              card-function-run="Run"
              card-method-name="help"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4 content-center">
            <card-info-run
              card-subtitle="VERSION route"
              card-title="VERSION"
              card-description="Version check"
              card-function-run="Run"
              card-method-name="version"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4 content-center">
            <card-info-run
              card-subtitle="POINT route"
              card-title="POINT"
              card-description="Point example"
              card-function-run="Run"
              card-method-name="point"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4 pt-8 content-center">
            <card-info-run
              card-subtitle="ROTHC route"
              card-title="ROTHC"
              card-description="RothC example"
              card-function-run="Run"
              card-method-name="rothc"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardInfoRun from "@/components/Cards/CardInfoRun.vue";

export default {
  components: {
    CardInfoRun
  }
};
</script>
