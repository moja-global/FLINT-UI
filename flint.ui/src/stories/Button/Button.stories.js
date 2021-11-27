import Button from '../../components/Button/Button.vue'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    btnColor: { control: 'color' },
    btnSize: { control: 'width' }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  template: '<button @onClick="onClick" v-bind="$props" />'
})

export const ButtonComponent = Template.bind({})
ButtonComponent.args = {
  label: 'Button'
}