<template>
  <div class="items-center">
    <div v-if="currentSubject != 'selectsubject'" class="items-center">
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

import {eventBus} from "../main";
export default {
  name: 'Flashcards',
  components: {
    FlashCard,
  },
  data() {
    return {
      currentSubject: this.$route.params.subject,
      question: "How many licks does it take to get to the center of a tootsie roll",
      solution: "1000 is the correct answer",
      choices: ["80", "10", "Infinite", "1000"],
      correctIndex: 3,
      correctMessage: "Your choice is correct because "
    }
  },
  created() {
    eventBus.$on('selectedSubject', (message) => {
        this.currentSubject = message;
    });
  }
  /*
  created() {
    // TODO: Add API call to the response
    firebase.firestore().collection('cards').doc(documentID).get()
    .then( res => {
      this.question = res.data().question
      this.solution = res.data().solution
    })
  }
  */
}
</script>