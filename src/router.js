/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import routes from '@/router/routes'
import i18n from '@/i18n'

Vue.use(VueRouter)

const Router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

Router.beforeEach((to, from, next) => {
  if (
    store.state.language.language &&
    store.state.language.language !== i18n.locale
  ) {
    i18n.locale = store.state.language.language
    next()
  } else if (!store.state.language.language) {
    store.dispatch('language/setLanguage', navigator.languages).then(() => {
      i18n.locale = store.state.language.language
      next()
    })
  } else {
    next()
  }
})

export default Router
