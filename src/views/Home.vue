<template lang="pug">
  .home
    h1.display-1.secondary--text.text-capitalize.font-weight-light.ma-0.pt-3 {{ $t('title') }}
    v-container(fluid)
      v-row(justify="center" align="start")
        v-col(cols="12" md="4")
          v-card(elevation="6").secondary.pa-2
            v-carousel(cycle="cycle", interval=3500, show-arrows-on-hover, height="100%")
              v-carousel-item(v-for="url in urls", :key="url.url")
                v-img(:src="url.url", aspect-ratio=1.3333, :alt="url.alt")
                  template(v-slot:placeholder)
                    v-row(align="center", justify="center").fill-height
                      v-progress-circular(indeterminate, x-large).primary--text
        v-col(cols="12" md="8")
          v-card(elevation="6").secondary.pa-2
            v-card-title.primary.text-capitalize.secondary--text {{ $t('home.presentation.title') }}
            v-card-text.primary.white--text.text-justify.body-1
              div(v-html="$t('home.presentation.content')").text-presentation
</template>

<i18n>
{
  "en": {
    "title": "home"
  },
  "fr": {
    "title": "acceuil"
  }
}
</i18n>

<script>
export default {
  name: 'Home',
  computed: {
    urls() {
      return this.$store.getters.urlsPictures('home')
    }
  }
}
</script>

<style scoped>
.text-presentation {
  text-indent: 20px;
}
</style>
