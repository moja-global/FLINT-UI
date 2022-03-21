<template>
  <a-progress v-bind="$attrs" v-on="$listeners" />
</template>
<script>
import { Progress } from 'ant-design-vue'
export default {
  name: 'Progress', // optional
  components: {
    'a-progress': Progress
  },
  inheritAttrs: false
}
</script>
