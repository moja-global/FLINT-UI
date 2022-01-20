<template>
  <a-divider v-bind="$attrs" v-on="$listeners" />
</template>
<script>
import { Divider } from 'ant-design-vue'
export default {
  name: 'Divider', // optional
  components: {
    'a-divider': Divider
  },
  inheritAttrs: false
}
</script>
