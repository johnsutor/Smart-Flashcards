<template>
  <div class= "flex flex-initial w-2/5 md:w-64 bg-white rounded m-2 h-64 shadow-md flex-col relative">
    <img src="https://debrabell.com/wp-content/uploads/2016/01/AP-US-History.jpg" class="object-contain top-0 h-40 py-0 my-0">  
    <div class="ml-1 text-sm md:text-base lg:text-base md:mt-2 lg:mt-2">
      {{subjectName}} - {{numCards}} cards
    </div>
    <router-link :to=subjectPath>
      <button class="absolute bg-blue-500 px-2 py-1 text-white rounded shadow-md bottom-0 mb-2 right-0 mr-2 hover:bg-blue-300 ">
        Study
      </button>
    </router-link>
      <!--
      <button v-if="!userSubscribed" class="ml-2 bg-gray-500 px-2 py-1 text-white rounded shadow-md bottom-0" @click="subscribe">
        Subscribe
      </button>
      <button v-else class="ml-2 bg-gray-400 px-2 py-1 text-white rounded shadow-md bottom-0" @click="unsubscribe">
        <span class="subscribed">Subscribed</span>
        <span class="unsubscribe">Unsubscribe</span>
      </button> -->
  </div>
</template>

<script>

export default {
  name: 'Subject',
  props: {
    subjectName: String,
    numCards: Number,
    userSubscribed: Boolean
  },
  data() {
    return {
      subjectPath: "flashcards/"+this.subjectName.replace(/ /g, ''),
    }
  },
  methods: {
    updateFlashcards() {
      
    },
    subscribe() {

    }
  }
}
</script>

<style scoped>
button .unsubscribe { 
  display: none; 
}
button:hover .subscribed { 
  display: none; 
}
button:hover .unsubscribe { 
  display: inline; 
}
</style>