// vue.config.js
module.exports = {
  devServer: {
    port: 8000
  },
  runtimeCompiler: true
  // chainWebpack: (config) => {
  //   config.resolve.alias.set('vue', '@vue/compat')

  //   config.module
  //     .rule('vue')
  //     .use('vue-loader')
  //     .tap((options) => {
  //       return {
  //         ...options,
  //         compilerOptions: {
  //           compatConfig: {
  //             MODE: 2,
  //             COMPONENT_ASYNC: false
  //           }
  //         }
  //       }
  //     })
  // }
}
