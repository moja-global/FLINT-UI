<template>
  <div
    class="
      relative
      bg-gradient-to-r
      from-green-400
      to-blue-500
      md:pt-32
      pt-12
      w-full
      h-full
    "
  >
    <div class="px-4 md:px-10 mx-auto w-full h-auto">
      <div>
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h2 class="text-2xl font-bold mb-2 text-gray-800">
            Point example data visualisation table
          </h2>
        </div>
      </div>
    </div>

    <v-grid theme="compact" :source="rows" :columns="columns"></v-grid>
  </div>
</template>

<script>
import VGrid from '@revolist/vue-datagrid'
export default {
  components: {
    VGrid
  },
  data() {
    return {
      columns: [
        {
          prop: 'name',
          name: 'First'
        },
        {
          prop: 'details',
          name: 'Second'
        }
      ],
      rows: [
        {
          name: '1',
          details: 'Item 1'
        },
        {
          name: '2',
          details: 'Item 2'
        }
      ]
    }
  }
}
</script>

<style>
revo-grid {
  height: 50%;
}
</style>
