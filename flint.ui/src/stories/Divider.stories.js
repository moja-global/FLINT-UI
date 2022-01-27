import BaseDivider from '@/components/Divider.vue'

export default {
  title: 'Divider',
  component: BaseDivider
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseDivider },
  template: `

<div>
    Text
    <base-divider type="vertical" />
    <a href="#">Link</a>
    <base-divider type="vertical" />
    <a href="#">Link</a>
  </div>

  `
})

export const Variants = Template.bind({})
