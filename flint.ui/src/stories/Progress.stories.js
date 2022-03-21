import BaseProgress from '@/components/Progress/Progress.vue'

export default {
  title: 'Progress',
  component: BaseProgress,
  argTypes: {
    type: { options: ['line', 'circle', 'dashboard'], control: { type: 'radio' } },
    percent: { control: 'number' },
    showInfo: { control: 'boolean' },
    strokeColor: { control: 'color' },
    successPercent: { control: 'number' },
    status: { options: ['normal', 'exception', 'success', 'active'], control: { type: 'radio' } },
    strokeLinecap: { options: ['round', 'square'], control: { type: 'radio' } }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseProgress },
  template: `
  <div>
  <base-progress v-bind='$props' />
    </div>
  `
})

export const Variants = Template.bind({})
Variants.args = {
  percent: 50,
  showInfo: false,
  strokeColor: 'red',
  successPercent: 30
}
