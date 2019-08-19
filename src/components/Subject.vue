<template>
  <div> 
    {{subjectName}} 
    <router-link :to=subjectPath>
    <button class="select" @click="updateFlashcards">select</button>
    </router-link>
  </div>
</template>

<script>
import {eventBus} from "../main";

export default {
  name: 'Subject',
  props: {
    subjectName: String,
  },
  data() {
    return {
      subjectPath: "flashcards/" + this.subjectName
    }
  },
  methods: {
    updateFlashcards() {
      eventBus.$emit('selectedSubject', this.subjectName);

    }
  }
}
</script>

<style type='text/css' scoped>
.select {
  background-color: gray;
}
</style>
