import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
import VueClipBoard from 'vue-clipboard2'


import './assets/icon/index.js' // icon

// import './assets/css/index.css'
import './assets/css/animate.min.css'
import './assets/css/style.css'
import 'animate.css'

// Vue.config.productionTip = false
Vue.prototype.$menu = Vue.observable({
  show: false
})


Vue.use(VueI18n)
Vue.use(VueClipBoard);
const i18n = new VueI18n({
  locale: 'cn', // 语言标识 //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'cn': require('./i18n/cn.json'),  //
    'en': require('./i18n/en.json')
  }
})



new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
