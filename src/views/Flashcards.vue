<template>
  <div class="items-center">
    <div v-if="currentSubject != 'select-subject'">
      <FlashCard v-if="selected_card" :card_data="selected_card" @StepLearning="StepBanditLearning($event)"></FlashCard>
    </div>
    <div v-else>
      Select a subject from here to start learning:
      <button @click="$router.push('/dashboard')">>>></button>
    </div>
  </div>
</template>

<script>
import FlashCard from '@/components/Flashcard.vue'
import firebase from 'firebase'
import axios from 'axios'
export default {
  name: 'Flashcards',
  components: {
    FlashCard,
  },
  data() {
    return {
      action: 0,
      cards_data: {},
      chosen_actions: [],
      step: 0,
      selected_card: null,

      user_subject_data: {},

      currentSubject: this.$route.params.subject,
    }
  },
  beforeCreate() {
    // Fetch the user's q-table for the given subject
    this.user_subject_data = this.$store.getters.GetCurrentUserProfile.subjects[this.$route.params.subject]

    if(this.user_subject_data === null || this.user_subject_data === undefined) {
      this.user_subject_data = {
        arm_count: [],
        q_table: [],
      }
    }

    // Fetch the cards from firebase
    firebase.firestore().collection('cards').doc(this.$route.params.subject).get()
    .then( cards_ref => {
      this.cards_data = cards_ref.data()

      // Initialize the k-armed bandits process
      if(this.user_subject_data.q_table == undefined) {
        axios.post(process.env.VUE_APP_INITIALIZE_LEARNING_URL, {
          num_cards: this.cards_data.num_cards,
          num_steps: 10
        }).then( res => {
          this.user_subject_data.q_table = res.data.q_table
          this.user_subject_data.arm_count = res.data.arm_count
          this.action = res.data.action
          this.chosen_actions = res.data.chosen_actions
          this.selected_card = this.cards_data.cards[this.action]
          
          // Update the user's subject data
          this.$store.dispatch('UpdateUserSubjectData', {
            subject: this.$route.params.subject,
            q_table: this.user_subject_data.q_table,
            arm_count: this.user_subject_data.arm_count
          })
        })
      }

      // User has previously studied this set
      else {
        axios.post(process.env.VUE_APP_INITIALIZE_LEARNING_URL, {
          num_cards: this.cards_data.num_cards,
          num_steps: 10,
          q_table: this.user_subject_data.q_table,
          arm_count: this.user_subject_data.arm_count,
        }).then( res => {
          this.user_subject_data.q_table = res.data.q_table
          this.user_subject_data.arm_count = res.data.arm_count
          this.action = res.data.action
          this.chosen_actions = res.data.chosen_actions
          this.step += 1
          this.selected_card = this.cards_data.cards[this.action]
          
          // Update the user's subject data
          this.$store.dispatch('UpdateUserSubjectData', {
            subject: this.$route.params.subject,
            q_table: this.user_subject_data.q_table,
            arm_count: this.user_subject_data.arm_count
          })
        })
      }
    })
  },
  methods: {
    // Continues the learning process
    StepBanditLearning(e) {
      let step_data = {
        chosen_actions: this.chosen_actions,
        arm_count: this.user_subject_data.arm_count,
        previous_action: this.action,
        num_cards: this.cards_data.num_cards,
        q_table: this.user_subject_data.q_table,
        correct: e.correct,
        num_steps: 10,
      }

      if(!(this.step > 10)) {
        axios.post(process.env.VUE_APP_STEP_LEARNING_URL, step_data).then( res => {
          this.user_subject_data.q_table = res.data.q_table
          this.user_subject_data.arm_count = res.data.arm_count
          this.action = res.data.action
          this.chosen_actions = res.data.chosen_actions
          this.step += 1
          this.selected_card = this.cards_data.cards[this.action]
          
          // Update the user's subject data
          this.$store.dispatch('UpdateUserSubjectData', {
            subject: this.$route.params.subject,
            q_table: this.user_subject_data.q_table,
            arm_count: this.user_subject_data.arm_count
          })
        })
      }

      else {
        alert("You've completed your study session!")
        this.$router.push('/dashboard')
      }
    }
  }
}
</script>