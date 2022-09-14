import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from '.'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

import VueTheMask from 'vue-the-mask';
Vue.use(VueTheMask);