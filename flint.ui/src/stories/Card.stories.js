import Card from './Card.vue'

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    content: {
      control: {
        CardTitle: 'This is a title',
        CardDescription: 'This is the description of the card'
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Card },
  template: '<card v-bind="$props" />'
})

export const CardComponent = Template.bind({})
CardComponent.args = {
  label: 'Card'
}
