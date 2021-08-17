<template>
  <div>
    <md-button class="md-primary">Start Date</md-button>
    <md-datepicker v-model="selectedstartDate" :md-model-type="String" />

    <md-button class="md-primary">End Date</md-button>
    <md-datepicker v-model="selectedendDate" :md-model-type="String" />

    <h3 class="text-xl font-bold mb-2 text-gray-600 justify-center">
      Simulation length is
      <span class="text-red-600">{{
        date_diff > 0 ? date_diff.toFixed(2) + ' years' : 'invalid'
      }}</span>
    </h3>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  computed: {
    date_diff() {
      let start_date =
        this.$store.state.rothc.config.LocalDomain.start_date.split('/')
      console.log(start_date)
      let end_date =
        this.$store.state.rothc.config.LocalDomain.end_date.split('/')
      console.log(end_date)
      //moment requires months to be zero indexed, hence subtracting 1
      let start_year_month = moment([+start_date[0], +start_date[1] - 1])
      let end_year_month = moment([+end_date[0], +end_date[1] - 1])

      let date_difference = end_year_month.diff(start_year_month, 'years', true)
      return date_difference
    },
    selectedstartDate: {
      get() {
        return this.$store.state.rothc.config.LocalDomain.start_date
          .split('/')
          .join('-')
      },
      set(newValue) {
        this.$store.commit(
          'setNew_rothc_startDate',
          newValue.split('-').join('/')
        )

        if (this.date_diff < 0) {
          this.$toast.error('Start date should be less than end date', {
            timeout: 5000
          })
        }
      }
    },

    selectedendDate: {
      get() {
        return this.$store.state.rothc.config.LocalDomain.end_date
          .split('/')
          .join('-')
      },
      set(newValue) {
        this.$store.commit(
          'setNew_rothc_endDate',
          newValue.split('-').join('/')
        )

        if (this.date_diff < 0) {
          this.$toast.error('End date should be greater than start date', {
            timeout: 5000
          })
        }
      }
    }
  }
}
</script>
