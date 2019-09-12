<template lang="pug">
  .dishes
    h1.title.primary--text.font-weight-light.mt-O.text-capitalize {{ $t('menu.dishes.title') }}
    v-progress-circular(v-if="loading", indeterminate, x-large).primary--text
    v-col(cols='12', v-else, v-for="element in $t('menu.dishes.data')", :key="element.title")
      CardMenu(:data="element")
</template>

<script>
import CardMenu from '@/components/CardMenu'

export default {
  name: 'MenuDishes',
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
