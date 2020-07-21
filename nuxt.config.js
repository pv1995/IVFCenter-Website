const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Dr Rama IVF for Best IVF & other Infertility treatments in India',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      { hid: 'description', name: 'description', content: pkg.description },
      { property:'og:type', content: "website"},
      { name: 'author', content: 'Dr Rama IVF'},
      { name: 'keywords', content: 'Infertility Treatment,IVF center, Dr Rama IVF fertility centre, Dr Rama IVF fertility'},

    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:400,700|Montserrat:600' }
    ]

  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'swiper/dist/css/swiper.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-number-animation',
    '~/plugins/font-awesome',
    // '~/plugins/vue-fab',
   
    { src: '~/plugins/vue-awesome-swiper.js', ssr: false },
    { src: '~/plugins/vue-scroll-reveal.js', ssr: false },
   

  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    'vue-sweetalert2/nuxt',
    ['@nuxtjs/google-analytics', {
      id: 'UA-136146047-1'
    }]
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
 serverMiddleware: [ '~/server/api/index.js'],
//  serverMiddleware: [ 
//  { path: '/api/', handler: '~/server/api/index.js' },
// ],

  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  },
  // generate: {
  //   minify: {
  //     collapseWhitespace: false
  //   }
  // }
}
