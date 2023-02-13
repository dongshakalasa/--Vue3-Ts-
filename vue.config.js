const { defineConfig } = require('@vue/cli-service')
const ComponentsPlugin = require('unplugin-vue-components/webpack');
const { VantResolver } = require('unplugin-vue-components/resolvers');
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
  },
})
