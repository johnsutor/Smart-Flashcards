import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify/lib'
import firebase from 'firebase'

Vue.use(Vuetify)

Vue.config.productionTip = false

// Initialize Firebase
import firebaseConfig from './firebaseConfig'
firebase.initializeApp(firebaseConfig)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
