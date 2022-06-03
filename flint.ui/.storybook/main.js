const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: '@storybook/vue3',
  staticDirs: [path.resolve(__dirname, '../public')],
  core: {
    builder: '@storybook/builder-webpack5'
  },
  webpackFinal: async (config, { configType }) => {
    // config.module.rules[1].use[1] = {
    //   loader: 'css-loader',
    //   options: {
    //     importLoaders: 1,
    //     modules: true,
    //     localIdentName: '[name]__[local]___[hash:base64:5]'
    //   }
    // }

    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../')
    })

    // Return the altered config
    return config
  }
}
