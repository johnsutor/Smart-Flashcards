import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify/lib'
import firebase from 'firebase'

Vue.use(Vuetify)

Vue.config.productionTip = false

// Initialize Firebase
var firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "intelligent-flashcards.firebaseapp.com",
  databaseURL: "https://intelligent-flashcards.firebaseio.com",
  projectId: "intelligent-flashcards",
  storageBucket: "",
  messagingSenderId: process.env.FIREBASE_MESSAGE_ID,
  appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
