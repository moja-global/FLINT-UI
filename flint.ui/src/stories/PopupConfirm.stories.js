import BasePopconfirm from '@/components/PopupConfirm.vue'

export default {
  title: 'Popconfirm',
  component: BasePopconfirm
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BasePopconfirm },
  template: `
  <div>
 <base-popconfirm
    title="Are you sure delete this task?"
    ok-text="Yes"
    cancel-text="No"
  >
    <a>Delete</a>
  </base-popconfirm>
      </div>
  `
})

export const Variants = Template.bind({})
