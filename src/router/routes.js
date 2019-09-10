import Home from '@/views/Home'

export default [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/menu',
    name: 'MenuPage',
    component: () => import(/* webpackChunkName: "Menu" */ '@/views/Menu.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () =>
      import(/* webpackChunkName: "Contact" */ '@/views/Contact.vue')
  }
]
