<template>
  <div class= "flex w-1/3 bg-gray-200 rounded m-2 h-64 shadow-md flex-col justify-center">
    <img src="https://debrabell.com/wp-content/uploads/2016/01/AP-US-History.jpg" class="object-contain h-40 w-full">  
    <div class="flex">
      {{subjectName}} 
    </div>
    <router-link class ="flex" :to=subjectPath>
      <button class="select" @click="updateFlashcards">
        Study
      </button>
    </router-link>
  </div>
</template>

<script>
import {eventBus} from "../main";

export default {
  name: 'Subject',
  props: {
    subjectName: String,
    numCards: Number,
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
