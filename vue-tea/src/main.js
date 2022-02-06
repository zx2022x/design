import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false
import './assets/css/common.css'
import './assets/js/flexible'
import '@/assets/css/iconfont.css'
import LyTab from 'ly-tab'
Vue.use(LyTab)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
