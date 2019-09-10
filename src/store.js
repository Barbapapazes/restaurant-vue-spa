import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import language from '@/store/modules/language'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    language
  },
  state: {
    urlsPictures: [

      /**
       * menu: Number(position) if the picture is for the menu tab at '/menu'
       */
      {
        url: require('@/assets/img/insideRestaurant.png?vuetify-preloader'),
        alt: 'interior of the restaurant',
        pages: ['home', 'menu'],
        menu: 0
      },
      {
        url: require('@/assets/img/dishes.png?vuetify-preloader'),
        alt: 'summer plates of the restaurant',
        pages: ['home', 'menu'],
        menu: 2
      },
      {
        url: require('@/assets/img/wines.png?vuetify-preloader'),
        alt: 'bottle of wine',
        pages: ['home', 'menu'],
        menu: 1
      },

      {
        url: require('@/assets/img/home.png?vuetify-preloader'),
        alt: 'summer vegetables and pasta',
        pages: ['menu'],
        menu: 3
      },
      {
        url: require('@/assets/img/insideRestaurant2.jpg?vuetify-preloader'),
        alt: 'summer vegetables and pasta',
        pages: ['home'],
        name: 'restaurant'
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    urlsPictures(state) {
      return desiredPage =>
        state.urlsPictures.filter(
          url => url.pages.findIndex(page => page == desiredPage) >= 0
        )
    }
  }
})
