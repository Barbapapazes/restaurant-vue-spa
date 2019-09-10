<template lang="pug">
  v-card(elevation="6").secondary.pa-2
    v-card-title(v-if="data.title === 'wine list'").pa-0
      v-btn(:href="wineList", depressed, target="_blank", width="100%", large).primary.secondary--text.title {{data.title}}
    v-card-title(v-else-if="data.title !== undefined").primary.secondary--text.text-uppercase.font-weight-light {{data.title}}
    v-card-text(v-if="data.content").primary.text-justify.white--text.body-1
      div(v-for="(element, index) in data.content") {{element}}
        v-divider(v-if="index < data.content.length - 1").secondary.my-2
</template>

<script>
export default {
  name: 'CardMenu',
  data() {
    return {
      wineList:
        'http://www.restaurant-lecercle.fr/wp-content/uploads/2018/05/carte-vins-restaurant-Cercle.pdf'
    }
  },
  props: {
    data: Object
  }
}
</script>
