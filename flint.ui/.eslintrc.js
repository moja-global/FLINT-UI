// enable vue in eslint
module.exports = {
  root: true,
  env: {
    node: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint'
  },
  plugins: ['vue'],
  extends: ["eslint:recommended", "plugin:vue/recommended", "@vue/prettier", "plugin:storybook/recommended"]
};