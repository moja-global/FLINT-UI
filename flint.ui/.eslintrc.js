// enable vue in eslint
module.exports = {
  root: true,
  rules: {
    'vue/multi-word-component-names': 0,
    'vue/no-reserved-component-names': 0,
    'vue/no-deprecated-dollar-listeners-api': 0
  },
  env: {
    node: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint'
  },
  plugins: ['vue'],
  extends: ['eslint:recommended', 'plugin:vue/vue3-essential', '@vue/prettier', 'plugin:storybook/recommended']
}
