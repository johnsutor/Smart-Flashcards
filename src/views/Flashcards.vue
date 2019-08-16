<template>
  <div>
    <h1>name of flashcard</h1>
    <FlashCard flipped=false question="question" solution = "this is the solution"></FlashCard>
  </div>
</template>

<script>
import FlashCard from '@/components/Flashcard.vue'

export default {
  name: 'Flashcards',
  components: {
    FlashCard
  }

}
</script>
