<template>
  <a-alert style="margin-top: 0.5rem; margin-bottom: 0.5rem" v-bind="$attrs" v-on="$listeners" />
</template>
<script>
import { Alert } from '@moja-global/mojaglobal-ui'

export default {
  name: 'Alert', // optional
  components: {
    'a-alert': Alert
  },
  inheritAttrs: false
}
</script>
