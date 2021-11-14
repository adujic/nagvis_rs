import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'

//import firebase from 'firebase/app'
//import './firebase'
import { rtdbPlugin } from 'vuefire'

Vue.use(rtdbPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
