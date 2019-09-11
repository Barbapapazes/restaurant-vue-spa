import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import store from './store'
import i18n from './i18n'

Vue.component('MenuMenus', () =>
  import(/* webpackChunkName: "Menus" */ '@/views/menu/MenuMenus')
)
Vue.component('MenuWines', () =>
  import(/* webpackChunkName: "Wines" */ '@/views/menu/MenuWines')
)
Vue.component('MenuDishes', () =>
  import(/* webpackChunkName: "Dishes" */ '@/views/menu/MenuDishes')
)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

// Hot updates
if (module.hot) {
  module.hot.accept(['@/locales/en', '@/locales/fr'], function () {
    i18n.setLocaleMessage('en', require('@/locales/en').default)
    i18n.setLocaleMessage('fr', require('@/locales/fr').default)
  })
}
