<template>
  <div>
    <h1>name of flashcard</h1>
    <FlashCard flipped=false question="question" solution = "this is the solution"></FlashCard>
  </div>
</template>

<script>
import FlashCard from '@/components/Flashcard.vue'
import firebase from 'firebase'

export default {
  name: 'Flashcards',
  components: {
    FlashCard
  },
  data() {
    return {
      question: '',
      solution: '',
    }
  },
  created() {
    // TODO: Add API call to the response
    firebase.firestore().collection('cards').doc(documentID).get()
    .then( res => {
      this.question = res.data().question
      this.solution = res.data().solution
    })
  }

}
</script>
