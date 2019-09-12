<template lang="pug">
  .menu
    h1.display-1.secondary--text.text-capitalize.font-weight-light.ma-0.pt-3 {{ $t('title') }}
    v-container(fluid)
      v-row(justify="center" align-content="center", align="start")
        v-col(cols="12" md="5", align="center", v-if="$vuetify.breakpoint.smAndUp")
          v-card(elevation="6")
            v-toolbar(flat).primary.pa-0
              v-row(align="center", justify="space-around").ma-0
                  v-col(v-for="(tab, index) in tabs", :key="tab.text", align="center").pa-0
                    v-btn(depressed, large, @click="onboarding=index, menuComponent=tab.name").primary.text--uppercase.font-weight-light.px-3
                      v-icon(left) mdi-{{tab.icon}}
                      span {{ $t(`tabs[${index}].text`) }}
        v-col(cols="12" md="5", align="end", v-if="$vuetify.breakpoint.xsOnly")
          v-menu(offset-y)
            template(v-slot:activator="{on}")
              v-btn(v-on="on").primary.secondary--text.font-weight-light
                v-icon(left) mdi-cards
                span {{ $t('card') }}
            v-card
              v-card-actions(v-for="(tab, index) in tabs", :key="tab.text")
                  v-btn(text, large, @click="onboarding=index, menuComponent=tab.text").primary--text.text--uppercase.font-weight-light.px-3
                        v-icon(left) mdi-{{tab.icon}}
                        span {{ $t(`tabs[${index}].text`) }}
      v-row(justify="center" align-content="center", align="start")
        v-col(cols="12", md="4")
          v-card(elevation="6").secondary.pa-2
                v-window(v-model="onboarding")
                  v-window-item(v-for="(url, index) in urls", :key="index")
                    v-card(flat)
                      v-img(:src="url.url", aspect-ratio=1.3333, :alt="url.alt")
                        template(v-slot:placeholder)
                          v-row(align="center", justify="center").fill-height
                            v-progress-circular(indeterminate, x-large).primary--text
        v-col(cols="12", md="8")
          keep-alive
            component(:is="menuComponent")
</template>

<i18n>
{
  "en": {
    "title": "menu",
    "tabs": [
      {
        "text": "menus",
        "name": "MenuMenus"
      },
      {
        "text": "wines",
        "name": "MenuWines"
      },
      {
        "text": "dishes",
        "name": "MenuDishes"
      }
    ],
    "card": "card"
  },
  "fr": {
    "title": "menu",
    "tabs": [
      {
        "text": "menus",
        "name": "MenuMenus"
      },
      {
        "text": "vins",
        "name": "MenuWines"
      },
      {
        "text": "plats",
        "name": "MenuDishes"
      }
    ],
    "card": "carte"
  }
}
</i18n>

<script>
export default {
  name: 'MenuPage',
  data: () => ({
    menuComponent: '',
    onboarding: 3,
    tabs: [
      {
        icon: 'map-legend',
        name: 'MenuMenus'
      },
      {
        icon: 'bottle-wine',
        name: 'MenuWines'
      },
      {
        icon: 'silverware',
        name: 'MenuDishes'
      }
    ],
    locale: null
  }),
  computed: {
    urls() {
      return this.$store.getters
        .urlsPictures('menu')
        .sort((a, b) => a.menu - b.menu)
    }
  },
  methods: {
    forceUpdate() {
      this.$forceUpdate()
    }
  }
}
</script>
