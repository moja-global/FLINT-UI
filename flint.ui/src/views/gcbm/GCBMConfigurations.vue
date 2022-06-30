<template>
  <div class="pt-4 px-8 w-full">
    <a-typography-title><span class="font-normal text-earth"> Configure Parameters </span></a-typography-title>
    <!-- This router view is for rendering the configuration routes like /gcbm/configurations/local-domain, 
       /gcbm/configurations/modules, etc. -->
    <router-view></router-view>
  </div>
</template>

<script>
// This component is a parent for all the configuration components like LocalDomain, Modules, etc.

export default {
  name: 'GCBMConfigurations',
  setup() {
    return {}
  }
}
</script>
