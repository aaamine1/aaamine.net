export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'aaamine*',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },

  target: 'static', // default is 'server'
  router: {
      base: '/'
      // base: '/aaamine.net/'
  },

  // Global CSS: https ://go.nuxtjs.dev/config-css
  css: ['~/assets/global.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [  '~/plugins/fontawesome.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['nuxt-font-loader', '@nuxtjs/google-fonts', '@nuxtjs/fontawesome'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt'
  ],

  googleFonts: {
    families: {
      Roboto: true,
      Inter: true,
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  fontawesome: {
    component: 'Fa',
    suffix: false,
    icons: {
      solid: true,
      brands: true,
    },
  },

}
