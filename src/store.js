import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  // Persists the state through reloads
  plugins: [createPersistedState()],
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
    },

    SetCurrentUserSubjectData(state, payload) {
      state.current_user_profile.subjects[payload.subject] = {
        q_table: payload.q_table,
        arm_count: payload.arm_count
      }
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
          firebase.firestore().collection('users').doc(res.user.uid).get()
          .then( user_res => {
            // Check if the user exists
            if (user_res.exists) {
              commit('SetCurrentUserProfile', {current_user_profile: user_res.data()})
              resolve()
            }

            else {
              firebase.firestore().collection('users').doc(res.user.uid).set({
                email: res.user.email,
                username: res.user.displayName,
                subjects: {},
              }).then(() => {
                commit('SetCurrentUserProfile', {
                  email: res.user.email,
                  username: res.user.displayName,
                  subjects: {},
                })
                resolve()
              }).catch(err => {
                reject(err)
              })
            }
          })
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
          Vue.router.push('/')
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    },

    UpdateUserSubjectData({ commit, state }, payload) {
      return new Promise((resolve, reject) => {
        // Update the user's profile to include new field data
        firebase.firestore().collection('users').doc(state.current_user.uid).set({
          subjects: {
            [payload.subject]: {
              q_table: payload.q_table,
              arm_count: payload.arm_count
            }
          }
        }, {merge: true}).then(() => {
          commit('SetCurrentUserSubjectData', {
            subject: payload.subject,
            q_table: payload.q_table,
            arm_count: payload.arm_count
          })
          resolve()
        }).catch(err => {
          reject(err)
        })
      
      })
    }
  }
})
