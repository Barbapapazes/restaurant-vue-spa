const { VuetifyProgressiveModule } = require('vuetify-loader')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const PuppeteerRenderer = PrerenderSPAPlugin.PuppeteerRenderer
const path = require('path')

module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production' ? '/restaurant-vue-spa/' : '/',

  productionSourceMap: false,

  pwa: {
    name: 'Restaurant',
    themeColor: '#aa3300',
    msTileColor: '#aa3300',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#b68e00',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: './src/service-worker.js'
    }
  },

  chainWebpack: config => {
    config
      .plugin('webmanifest')
      .use(WebpackPwaManifest, [
        {
          name: 'Restaurant',
          short_name: 'Restaurant',
          description: 'My awesome Progressive Web App!',
          background_color: '#aa3300',
          crossorigin: 'use-credentials', // can be null, use-credentials or anonymous
          icons: [
            {
              src: path.resolve('src/assets/favicon.png'),
              sizes: [120, 152, 167, 180, 1024],
              destination: path.join('icons', 'ios'),
              ios: true
            },
            {
              src: path.resolve('src/assets/favicon.png'),
              size: 1024,
              destination: path.join('icons', 'ios'),
              ios: 'startup'
            },
            {
              src: path.resolve('src/assets/favicon.png'),
              sizes: [36, 48, 72, 96, 144, 192, 512],
              destination: path.join('icons', 'android')
            }
          ]
        }
      ])
      .before('preload-index')

    const imagesRule = config.module.rule('images')
    imagesRule.uses.clear()

    imagesRule
      .oneOf('vuetify')
      .resourceQuery(/lazy\?vuetify-preload/)
      .use('vuetify-loader/progressive-loader')
      .loader('vuetify-loader/progressive-loader')
      .end()
      .use('url-loader')
      .loader('url-loader')
      .options({
        limit: 8000
      })
      .end()
      .end()
      .oneOf('other')
      .use('url-loader')
      .loader('url-loader')
      .options(
        Object.assign({
          limit: 10240,
          fallback: {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        })
      )
      .end()
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options(
        Object.assign({
          mozjpeg: {
            progressive: true,
            quality: 65
          },
          pngquant: {
            quality: '40-60',
            speed: 10
          },
          gifsicle: {
            interlaced: false
          },
          webp: {
            quality: 75
          }
        })
      )
      .end()
      .end()

    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .options(
        Object.assign({
          compilerOptions: {
            modules: [VuetifyProgressiveModule]
          }
        })
      )
      .end()
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
}
