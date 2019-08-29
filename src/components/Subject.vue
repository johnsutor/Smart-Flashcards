<template>
  <div class= "flex flex-initial w-1/3 bg-gray-200 rounded m-2 h-64 shadow-md flex-col justify-center relative">
    <img src="https://debrabell.com/wp-content/uploads/2016/01/AP-US-History.jpg" class="object-contain top-0 h-40 py-0 my-0">  
    <div class="">
      {{subjectName}} - {{numCards}} cards
    </div>
    <div>
      <router-link :to=subjectPath>
        <button class="bg-blue-500 px-2 py-1 text-white rounded shadow-md bottom-0" @click="updateFlashcards">
          Study
        </button>
      </router-link>
      <button class="ml-2 bg-gray-500 px-2 py-1 text-white rounded shadow-md bottom-0" @click="updateFlashcards">
        Subscribe
      </button>
    </div>
  </div>
</template>

<script>

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
      this.$emit('selectedSubject', this.subjectName);
    }
  }
}
</script>
