<template>
  <a-popconfirm v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </a-popconfirm>
</template>
<script>
import { Popconfirm } from 'ant-design-vue'
export default {
  name: 'BasePopconfirm', // optional
  components: {
    'a-popconfirm': Popconfirm
  },
  inheritAttrs: false
}
</script>
