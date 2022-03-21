import BaseDivider from '@/components/Divider/Divider.vue'

export default {
  title: 'Divider',
  component: BaseDivider,
  argTypes: {
    orientation: { options: ['left', 'right', 'center'], control: { type: 'radio' } },
    dashed: { control: 'boolean' },
    type: { options: ['horizontal', 'vertical'], control: { type: 'radio' } }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseDivider },
  template: `<base-divider v-bind="$props" v-on="$props" />`
})

export const Variants = Template.bind({})

Variants.args = {
  orientation: 'center',
  type: 'horizontal',
  dashed: false
}
