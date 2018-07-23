// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
// import 'styles/reset.css'
// import 'styles/border.css'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {
  getCookie
} from '@/common/cookie'

Vue.config.productionTip = false;
Vue.use(VueI18n);
Vue.use(BootstrapVue);
const i18n = new VueI18n({
  locale: getCookie('PLAY_LANG', 'en'), // 语言标识
  // locale: 'en', // 语言标识
  messages: {
    'ch': require('./common/lang/zh'),
    'en': require('./common/lang/en')
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: {
    App
  },
  template: '<App/>'
})
