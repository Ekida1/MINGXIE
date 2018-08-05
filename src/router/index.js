import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'
import news from '@/pages/news/news'
import detail from '@/pages/news/detail'
import concerts from '@/pages/concerts/concerts'
import gallery from '@/pages/gallery/gallery'
import listen from '@/pages/listen/listen'
import video from '@/pages/video/video'
import reviews from '@/pages/reviews/reviews'
import contact from '@/pages/contact/contact'
import about from '@/pages/about/about'
import onstage from '@/pages/gallery/children/onstage'
import offstage from '@/pages/gallery/children/offstage'
import vision from '@/pages/gallery/children/vision'
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
      component: news,
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail,
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
      redirect: '/gallery/onstage',
      component: gallery,
      children: [{
        path: '/gallery/onstage',
        name: 'onstage',
        component: onstage,
      }, {
        path: '/gallery/offstage',
        name: 'offstage',
        component: offstage,
      }, {
        path: '/gallery/vision',
        name: 'vision',
        component: vision,
      }, ]
    },
    {
      path: '/listen',
      name: 'listen',
      component: listen
    },
    {
      path: '/video',
      name: 'video',
      component: video
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
