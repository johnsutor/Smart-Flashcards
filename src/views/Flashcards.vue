<template>
  <div>
    <div v-if="currentSubject">
      <h3>{{$route.params.subject}}</h3>
      <FlashCard question="question" solution="this is the solution" ></FlashCard>
    </div>
    <div v-else>
      Select a subject from here:
      <button @click="$router.push('subjects')">>>></button>
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
