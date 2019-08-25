import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Stores basic info about the authenticated user
    current_user: {},

    // Stores additional info about the authenticated user
    current_user_profile: {},
  },
  getters: {
    GetCurrentUser(state) {
      return state.current_user
    },
    GetCurrentUserProfile(state) {
      return state.current_user_profile
    }
  },
  mutations: {
    SetCurrentUser(state, payload) {
      state.current_user = payload.current_user
    },

    SetCurrentUserProfile(state, payload) {
      state.current_user_profile = payload.current_user_profile
    }
  },
  actions: {
    EmailSignIn({ commit }, payload) {
      return new Promise((resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then( res => {
          commit('SetCurrentUser', {current_user: res.user})
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    },

    ProviderSignIn({ commit }, payload) {
      return new Promise((resolve, reject) => {
        let provider = (payload.provider == 'Google')? new firebase.auth.GoogleAuthProvider() : new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then( res => {
          commit('SetCurrentUser', {current_user: res.user})
          resolve()
        }).catch( err => {
          reject(err)
        })
      })
    },

    SignOut({ commit }) {
      return new Promise((resolve, reject) => {
        firebase.auth().signOut()
        .then(() => {
          commit('SetCurrentUser', {current_user: {}})
          commit('SetCurrentUserProfile', {current_user_profile: {}})
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
})
