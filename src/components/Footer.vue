<template lang="pug">
  v-footer(app).secondary
    v-row(justify="space-around", align="center")
      v-col(cols="3").caption.pa-0
        span {{ $t('termsOfUse') }}
      v-col(cols="6").pa-0
        v-row.pa-0
          v-col(align="center", v-if="$vuetify.breakpoint.xs").pa-0
            v-btn(text, to='/contact', title='follow us').black--text
              v-icon(left) mdi-earth
              span.text-capitalize {{ $t('followUs') }}
          v-col(align="center", v-for="(link, index) in socialNetworks", :key="link.title", v-if="$vuetify.breakpoint.smAndUp").pa-0
            v-btn(text, :href="link.href", :title="$t(`socialNetworks[${index}].title`)", target="_blank")
              img(:src="link.src", :alt="$t(`socialNetworks[${index}].alt`)" height="30")
      v-col(cols="3").caption.text-right.pa-0
        span {{ $t('privacyAndCookies') }}
</template>

<i18n>
{
  "en": {
    "socialNetworks": [
       {
          "title": "Facebook Page",
          "alt": "Facebook Logo"
        },
        {
          "title": "Instagram Page",
          "alt": "Instagram Logo"
        },
        {
          "title": "Twitter Page",
          "alt": "Twitter Logo"
        }
    ],
    "privacyAndCookies": "Privacy and Cookies",
    "termsOfUse": "Terms of use",
    "followUs": "follow us"
  },
  "fr": {
    "socialNetworks": [
       {
          "title": "Page Facebook",
          "alt": "Logo de Facebook"
        },
        {
          "title": "Page Instagram",
          "alt": "Logo d'Instagram"
        },
        {
          "title": "Page Twitter",
          "alt": "Logo de Twitter"
        }
    ],
    "privacyAndCookies": "Confidentialité et Cookies",
    "termsOfUse": "Conditions d'utilisation",
    "followUs": "suivez-nous"
  }
}
</i18n>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      socialNetworks: [
        {
          href: 'https://www.facebook.com/',
          title: 'Facebook Page',
          src: require('@/assets/logos/black-facebook.png')
        },
        {
          href: 'https://www.instagram.com/',
          title: 'Instagram Page',
          src: require('@/assets/logos/black-instagram.png')
        },
        {
          href: 'https://www.twitter.com/',
          title: 'Twitter Page',
          src: require('@/assets/logos/black-twitter.png')
        }
      ]
    }
  }
}
</script>

