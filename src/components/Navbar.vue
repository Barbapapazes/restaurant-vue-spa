<template lang="pug">
nav
  v-app-bar(app elevate-on-scroll).primary
    v-toolbar-title.secondary--text.headline.font-weight-light Restaurant
    v-spacer
    v-btn(v-for="(lang, index) in languages", :key="`lang${index}`", v-on:click="changeLanguage(lang)", text).white--text.ma-2 {{ lang.title }}
    v-app-bar-nav-icon(color="secondary" x-large @click.stop="drawer = !drawer")
  v-navigation-drawer(app, right, v-model="drawer")
    v-list(nav)
      v-list-item-group(color="yellow darken-3")
        v-list-item(v-for="(link, index) in links", :key="link.text", :to="link.path").mx-2.my-4
          v-list-item-icon
            v-icon(right, color="primary", large) mdi-{{link.icon}}
          v-list-item-content
            v-list-item-title.primary--text.text-capitalize.font-weight-bold.subtitle-1 {{ $t(`links[${index}].text`) }}
</template>

<i18n>
{
  "en": {
    "links": [
      {
        "text": "home",
        "name": "Home"
      },
      {
        "text": "menu",
        "name": "MenuPage"
      },
      {
        "text": "contact",
        "name": "Contact"
      }
    ]
  },
  "fr": {
    "links": [
      {
        "text": "acceuil",
        "name": "Home"
      },
      {
        "text": "menu",
        "name": "MenuPage"
      },
      {
        "text": "nous contacter",
        "name": "Contact"
      }
    ]
  }
}
</i18n>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      drawer: false,
      links: [
        { icon: 'home', name: 'Home', path: '/' },
        {
          icon: 'silverware',
          name: 'MenuPage',
          path: '/menu'
        },
        {
          icon: 'contact-mail',
          name: 'Contact',
          path: '/contact'
        }
      ],
      languages: [
        {
          title: 'en',
          value: 'en'
        },
        {
          title: 'fr',
          value: 'fr'
        }
      ]
    }
  },
  methods: {
    changeLanguage(lang) {
      this.$root.$i18n.locale = lang.value
      this.$store.dispatch('language/setLanguage', lang.value)
    }
  }
}
</script>
