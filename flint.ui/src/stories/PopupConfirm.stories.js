import BasePopconfirm from '../components/PopupConfirm/PopupConfirm.vue'

export default {
  title: 'Popconfirm',
  component: BasePopconfirm,
  argTypes: {
    cancelText: { control: 'text' },
    title: { control: 'text' },

    okType: { control: 'text' },
    okText: { control: 'text' }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BasePopconfirm },
  template: `
  <div>
    <base-popconfirm v-bind="$props" v-on="$props">
      <a>Delete</a>
    </base-popconfirm>
  </div>
  `
})

export const Variants = Template.bind({})
Variants.args = {
  cancelText: 'No',
  title: 'Are you sure you want to delete this?',
  okText: 'Yes',
  okType: 'primary'
}
