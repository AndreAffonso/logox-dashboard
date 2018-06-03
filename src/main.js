// import 'element-ui/lib/theme-default/index.css' // Theme UI
import './assets/scss/index.scss' // Customize UI

import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// import store from './store'
// import head from 'vue-head'
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
