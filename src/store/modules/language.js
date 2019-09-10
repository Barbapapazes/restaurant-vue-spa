import Vue from 'vue'
import VueLocalStorage from 'vue-localstorage'

Vue.use(VueLocalStorage)

function loadLocaleMessages() {
  const locales = require.context(
    '@/locales',
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  )
  const languages = []
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      languages.push(locale)
    }
  })
  return languages
}

const supportedLanguages = loadLocaleMessages()

export default {
  namespaced: true,
  state: {
    language: Vue.localStorage.get('language')
  },
  mutations: {
    SET_LANGUAGE(state, lang) {
      Vue.localStorage.set('language', lang)
      state.language = lang
    }
  },
  actions: {
    setLanguage({ commit }, languages) {
      if (typeof languages === 'string') {
        commit('SET_LANGUAGE', languages)
      } else {
        const language = supportedLanguages.find(sl =>
          languages.find(l =>
            l.split(new RegExp(sl, 'gi')).length - 1 > 0 ? sl : null
          )
        )
        commit('SET_LANGUAGE', language)
      }
    }
  }
}
