<template lang="pug">
  .wines
    h1.title.primary--text.font-weight-light.mt-O.text-capitalize {{ $t('menu.wines.title') }}
    v-progress-circular(v-if="loading", indeterminate, x-large).primary--text
    v-col(cols='12', v-else, v-for="element in $t('menu.wines.data')", :key="element.title")
      CardMenu(:data="element")
</template>

<script>
import CardMenu from '@/components/CardMenu'

export default {
  name: 'MenuWines',
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
