<template>
  <div>
    <md-button class="md-primary">Start Date</md-button>
    <md-datepicker v-model="selectedstartDate" :md-model-type="String" />

    <md-button class="md-primary">End Date</md-button>
    <md-datepicker v-model="selectedendDate" :md-model-type="String" />
  </div>
</template>

<script>
export default {
  computed: {
    selectedstartDate: {
      get() {
        return this.$store.state.point.Point_config.LocalDomain.start_date
          .split('/')
          .join('-')
      },
      set(newValue) {
        this.$store.commit(
          'setNew_point_startDate',
          newValue.split('-').join('/')
        )
      }
    },

    selectedendDate: {
      get() {
        return this.$store.state.point.Point_config.LocalDomain.end_date
          .split('/')
          .join('-')
      },
      set(newValue) {
        this.$store.commit(
          'setNew_point_endDate',
          newValue.split('-').join('/')
        )
      }
    }
  }
}
</script>
