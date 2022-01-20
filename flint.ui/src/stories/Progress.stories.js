import BaseProgress from '@/components/Progress.vue'

export default {
  title: 'Progress',
  component: BaseProgress
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseProgress },
  template: `
  <div>
  <base-progress v-bind='$props' />
      <base-progress :percent="30" />
      <base-progress :percent="50" status="active" />
      <base-progress :percent="70" status="exception" />
      <base-progress :percent="100" />
      <base-progress :percent="50" :show-info="false" />
      </div>
  `
})

export const Variants = Template.bind({})
