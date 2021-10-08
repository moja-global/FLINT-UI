import Footer from './Footer.vue'

export default {
  title: 'Footer',
  component: Footer
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Footer },
  template: '<Footer />'
})

export const CardComponent = Template.bind({})
CardComponent.args = {
  label: 'Footer'
}
