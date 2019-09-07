import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
import './assets/main.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFacebookF, faGoogle, faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

// Initialize Firebase
var firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_PROJECT_ID + ".firebaseapp.com",
  databaseURL: "https://" + process.env.VUE_APP_FIREBASE_PROJECT_ID + ".firebaseio.com",
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: "",
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGE_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig)

//Event bus
export const eventBus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.router = router
