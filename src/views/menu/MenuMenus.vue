<template lang="pug">
  .menus
    h1.title.primary--text.font-weight-light.mt-O.text-capitalize menus
    v-progress-circular(v-if="loading", indeterminate, x-large).primary--text
    v-col(cols='12', v-else, v-for="element in fileData", :key="element.title")
      CardMenu(:data="element")
</template>

<script>
import HTTP from '@/http-common'
import CardMenu from '@/components/CardMenu'

export default {
  name: 'MenuMenus',
  data() {
    return {
      fileData: {},
      loading: false
    }
  },
  components: {
    CardMenu
  },
  methods: {
    fetchData(name) {
      this.loading = true
      HTTP.get(`/data/${name}.json`)
        .then(response => {
          this.loading = false
          this.fileData = response.data.data
        })
        .catch(e => {
          console.error(e)
        })
    }
  },
  created() {
    this.fetchData('menus')
  }
}
</script>
