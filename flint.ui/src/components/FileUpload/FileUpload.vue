<template>
  <div class="w-full">
    <md-field>
      <label>Multiple</label>
      <md-file v-model="multiple" multiple />
    </md-field>
  </div>
</template>

<script>
  export default {
    name: 'FileField',
    data: () => ({
      multiple: null
    })
  }
</script>
