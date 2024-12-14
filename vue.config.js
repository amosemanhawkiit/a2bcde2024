const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    output: {
      module: true, // Use ES Module output format
    },
    experiments: {
      outputModule: true, // Enables Webpack support for ES Modules
    },},
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith('swiper-'),
    },
})
