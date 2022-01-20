import BaseAlert from '@//components/Alerts/Alert.vue'

export default {
  title: 'Alert',
  component: BaseAlert
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseAlert },
  template: `
  <div>
  <base-alert
  message="WARNING"
  type="warning"
  closable
  v-bind='$props'
  />
  <base-alert
  message="SUCCESS"
  type="success"
  closable
  />
  <base-alert
  message="INFO"
  type="info"
  closable
  />
  <base-alert
  message="ERROR"
  type="error"
  closable
  />
  </div>
  `
})

export const Variants = Template.bind({})
