<template lang="pug">
    .contact
      h1.display-1.secondary--text.text-capitalize.font-weight-light.ma-0.pt-3 {{ $t('title') }}
      v-container(fluid)
        v-row()
          v-col(cols="12", md="6")
            v-card(elevation="6").secondary.pa-2
                v-row(justify="center").primary.mx-0
                  v-col(align="center", cols="12", sm="6", v-for="element in contact", :key="element.href").pa-0
                    v-btn(text, :href="$t(`contact.${element.name}.contactAddress`)", :title="element.title")
                      v-icon(left) mdi-{{element.icon}}
                      span {{ $t(`contact.${element.name}.text`) }} Restaurant
            v-card(elevation="6").secondary.pa-2.mt-6
              v-row.primary.mx-0
                v-col(align="center", v-for="(link, index) in socialNetworks", :key="link.title").pa-0
                  v-btn(text, :href="link.href", :title="$t(`socialNetworks[${index}].title`)", target="_blank").my-2
                    img(:src="link.src", :alt="$t(`socialNetworks[${index}].alt`)" height="50")
          v-col(cols='12', md="6")
            v-card(elevation="6").secondary.pa-2.pb-1
              iframe(src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86946.17038756271!2d2.328263591756586!3d47.078133556437734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47fa9677b89bb417%3A0xcbfb282ccd5c85be!2s18000+Bourges!5e0!3m2!1sen!2sfr!4v1565363245243!5m2!1sen!2sfr" height="450" frameborder="0" style="border:0" allowfullscreen)

</template>

<i18n>
{
  "en": {
    "title": "contact",
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
    ]
  },
  "fr": {
    "title": "contacts",
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
    ]
  }
}
</i18n>

<script>
export default {
  name: 'contact',
  data() {
    return {
      contact: [
        {
          icon: 'mail',
          name: 'mail'
        },
        { icon: 'phone', name: 'tel' }
      ],
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

<style lang="css">
iframe {
  width: 100%;
}
</style>
