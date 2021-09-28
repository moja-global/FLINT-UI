import MyButton from './Button.vue'

export default {
  title: 'Button',
  component: MyButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    borderRadius: { control: 'border-radius' },
    // eslint-disable-next-line no-dupe-keys
    borderRadius: {
      control: {
        type: 'select',
        options: ['2px', '30px', '25% 10%', '10% 30% 50% 70%', '10% / 50%', '10px 100px / 120px', '50% 20% / 10% 40%']
      }
    },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] }
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template: '<my-button @onClick="onClick" v-bind="$props" />'
})

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Button'
}

export const Secondary = Template.bind({})
Secondary.args = {
  secondary: true,
  label: 'Button'
}

export const Success = Template.bind({})
Success.args = {
  success: true,
  label: 'Button'
}

export const Danger = Template.bind({})
Danger.args = {
  danger: true,
  label: 'Button'
}
