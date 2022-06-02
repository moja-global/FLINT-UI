// enable vue in eslint
module.exports = {
  root: true,
  env: {
    node: true
  },
  parser: '@babel/eslint-parser',
  // parserOptions: {
  //   parser: 'babel-eslint'
  // },
  plugins: ['vue'],
  extends: ['plugin:vue/vue3-recommended', '@vue/prettier', 'plugin:storybook/recommended']
}
