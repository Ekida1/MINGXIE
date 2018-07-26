import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'
import news from '@/pages/news/news'
import concerts from '@/pages/concerts/concerts'
import gallery from '@/pages/gallery/gallery'
import listen from '@/pages/listen/listen'
import watch from '@/pages/watch/watch'
import reviews from '@/pages/reviews/reviews'
import contact from '@/pages/contact/contact'
import about from '@/pages/about/about'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: reviews
    },
    {
      path: '/concerts',
      name: 'concerts',
      component: concerts
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: gallery
    },
    {
      path: '/listen',
      name: 'listen',
      component: listen
    },
    {
      path: '/watch',
      name: 'watch',
      component: watch
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/about',
      name: 'about',
      component: about
    }
  ]
})
