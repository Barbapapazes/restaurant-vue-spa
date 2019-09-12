<template lang="pug">
  .menus
    h1.title.primary--text.font-weight-light.mt-O.text-capitalize menus
    v-progress-circular(v-if="loading", indeterminate, x-large).primary--text
    v-col(cols='12', v-else, v-for="element in $t('menu.menus.data')", :key="element.title")
      CardMenu(:data="element")
</template>

<script>
import CardMenu from '@/components/CardMenu'

export default {
  name: 'MenuMenus',
  data() {
    return {
      loading: false
    }
  },
  components: {
    CardMenu
  }
}
</script>
