<template>
  <div class="subject bg-white shadow mx-2 p-2 rounded text-left w-full md:w-1/2 lg:w-1/3 lg:bg-black hover:shadow-md">
    <router-link :to=subjectPath>
      <span class="text-2xl">
        {{subjectName}}   
      </span>
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
