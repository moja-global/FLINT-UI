import { action } from '@storybook/addon-actions'
import Slider from '@/components/Sliders/Slider.vue'

export default {
  title: 'Slider',
  component: Slider
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Slider },
  template: '<Slider v-bind="$props" />'
})

export const Default = Template.bind({})
Default.args = {}

export const WithListener = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Slider },
  template: '<Slider v-bind="$props" @change="action" />',
  methods: { action: action('@change') }
})
