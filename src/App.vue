<template lang="pug">
  v-app
    Navbar

    v-content.mx-4
      router-view
      v-btn(v-scroll="onScroll",v-show="fab", fab, dark, fixed, bottom, right, color="primary", @click="toTop").mb-12
        v-icon mdi-chevron-up
    Footer
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      fab: false
    }
  },
  methods: {
    onScroll(e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop() {
      this.$vuetify.goTo(0)
    }
  }
}
</script>
