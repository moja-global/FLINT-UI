import BaseAlert from '../components/Alerts/Alert.vue'

export default {
  title: 'Alert',
  component: BaseAlert,
  argTypes: {
    message: { control: 'text' },
    type: { options: ['info', 'warning', 'success', 'error'], control: { type: 'radio' } },
    closable: { control: 'boolean' },
    showIcon: { control: 'boolean' },
    description: { control: 'text' },
    closeText: { control: 'text' }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseAlert },
  template: `<base-alert v-bind="$props" v-on="$props" />`
})

export const Success = Template.bind({})

Success.args = {
  message: 'Success Text',
  type: 'success',
  closable: true
}

export const Error = Template.bind({})

Error.args = {
  message: 'Error Occured',
  type: 'error',
  closable: true,
  showIcon: true
}

export const Info = Template.bind({})

Info.args = {
  message: 'Informational Text',
  type: 'info',
  closable: true
}

export const Warning = Template.bind({})

Warning.args = {
  message: 'Warning Text',
  type: 'warning',
  closable: true,
  showIcon: true
}
