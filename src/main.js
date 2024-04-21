import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/styles/app.css'

Vue.config.productionTip = false

export const bus = new Vue()

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
