<template>
  <div class="items-center">
    <div v-if="currentSubject != 'selectsubject'" >
      <FlashCard :question=question :solution=solution :subject=currentSubject :choices=choices :correctIndex=correctIndex ></FlashCard>
    </div>
    <div v-else>
      Select a subject from here:
      <button @click="$router.push('/subjects')">>>></button>
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
      cards: [],
      chosen_actions: [],

      currentSubject: this.$route.params.subject,
      question: "How many licks does it take to get to the center of a tootsie roll",
      solution: "1000 is the correct answer",
      choices: ["80", "10", "Infinite", "1000"],
      correctIndex: 3,
      correctMessage: "Your choice is correct because ",
      q_table: [],
    }
  },
  created() {
    // Fetch the user's q-table for the given subject
    this.user_subject_data = this.$store.getters.GetCurrentUserProfile.subjects.find( subject => {
      return subject.subject == this.$route.params.subject
    })

    // Fetch the cards from firebase
    firebase.firestore().collection('cards').doc(this.$route.params.subject).get()
    .then( cards_ref => {
      this.cards = cards_ref.data()

      // Initialize the k-armed bandits process
      if(this.user_subject_data == undefined) {
        axios.post(process.env.VUE_APP_INITIALIZE_LEARNING_URL, {
          num_cards: this.cards.num_cards,
          num_steps: 10
        }).then( res => {
          this.user_subject_data.q_table = res.q_table
          this.user_subject_data.arm_count = res.arm_count
          this.action = res.action
          this.chosen_actions = res.chosen_actions
        })
      }

      // User has previously studied this set
      else {
        axios.post(process.env.VUE_APP_INITIALIZE_LEARNING_URL, {
          num_cards: this.cards.num_cards,
          num_steps: 10,
          q_table: this.user_subject_data.q_table,
          arm_count: this.user_subject_data.arm_count,
        }).then( res => {
          this.user_subject_data.q_table = res.q_table
          this.user_subject_data.arm_count = res.arm_count
          this.action = res.action
          this.chosen_actions = res.chosen_actions
        })
      }
    })
  },
  methods: {
    // Continues the learning process
    stepBanditLearning() {

    }
  }
}
</script>