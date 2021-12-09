<template>
  <div>
    <md-button class="md-primary">Start Date</md-button>
    <input type="date" 
      class="datepicker-input" 
      :class="[datepickerWidth]"
      v-model="selectedstartDate" 
    />
    
    <md-button class="md-primary">End Date</md-button>
    <input type="date" 
      class="datepicker-input" 
      :class="[datepickerWidth]"
      v-modal="selectedendDate" 
    />

    <h3 class="text-xl font-bold mb-2 text-gray-600 justify-center">
      Simulation length is
      <span class="text-red-600">{{ date_diff > 0 ? date_diff.toFixed(2) + ' years' : 'invalid' }}</span>
    </h3>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    datepickerWidth: String
  },
  computed: {
    date_diff() {
      let start_date = this.$store.state.point.config.LocalDomain.start_date.split('/')
      console.log(start_date)
      let end_date = this.$store.state.point.config.LocalDomain.end_date.split('/')
      console.log(end_date)
      //moment requires months to be zero indexed, hence subtracting 1
      let start_year_month = moment([+start_date[0], +start_date[1] - 1])
      let end_year_month = moment([+end_date[0], +end_date[1] - 1])

      let date_difference = end_year_month.diff(start_year_month, 'years', true)
      return date_difference
    },
    selectedstartDate: {
      get() {
        return this.$store.state.point.config.LocalDomain.start_date.split('/').join('-')
      },
      set(newValue) {
        this.$store.commit('setNew_point_startDate', newValue.split('-').join('/'))

        if (this.date_diff < 0) {
          this.$toast.error('Start date should be less than end date', {
            timeout: 5000
          })
        }
      }
    },

    selectedendDate: {
      get() {
        return this.$store.state.point.config.LocalDomain.end_date.split('/').join('-')
      },
      set(newValue) {
        this.$store.commit('setNew_point_endDate', newValue.split('-').join('/'))

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

<style lang="scss">
  input[type="date"].datepicker-input {
    padding: 1em;
    font-family: inherit;
    font-weight: 700;
    font-size: 16px;
    border: 1px solid #828282;
    border-radius: 12px;
    &:hover {
      background-color: rgba(0, 0, 255, 0.13);
      border: 1px solid #a2a2a2;
    }
    &:focus {
      outline: none;
    }
  }
  .small {
    width: 30%;
  }
  .medium {
    width: 60%;
  }
  .large {
    width: 100%;
  }
</style>