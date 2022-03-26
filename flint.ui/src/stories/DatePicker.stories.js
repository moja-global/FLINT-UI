import { action } from '@storybook/addon-actions'
import Datepicker from '@/components/Datepicker/Datepicker.vue'

export default {
  title: 'Datepicker',
  component: Datepicker
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Datepicker },
  template: '<Datepicker v-bind="$props" />'
})

export const Default = Template.bind({})
Default.args = {}

export const WithListener = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Datepicker },
  template: '<Datepicker v-bind="$props" @change="action" />',
  methods: { action: action('@change') }
})
