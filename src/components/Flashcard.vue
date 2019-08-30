<template>
    <div class="flex sm:w-5/6 lg:w-1/3 md:w-1/2 bg-white rounded m-2 h-64 shadow-md flex-col relative p-1">
      <h1 class="text-bold">{{subject}}</h1>
      <!-- Front with question -->
      <div v-if="!flipped" class="">
        <div class="text-left">
            {{question}}
        </div>
        <div class="flex flex-col"> 
          <button class="text-left" v-on:click="checkSolution(0)">A. {{choices[0]}}</button>
          <button class="text-left" v-on:click="checkSolution(1)">B. {{choices[1]}}</button>
          <button class="text-left" v-on:click="checkSolution(2)">C. {{choices[2]}}</button>
          <button class="text-left" v-on:click="checkSolution(3)">D. {{choices[3]}}</button>
        </div>
      </div>
      <!-- Back with solution -->
      <div v-else class="">
        <v-icon class="" 
            v-on:click="flipped=false">
            See question again
        </v-icon>
        <div>
            {{solution}}
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'FlashCard',
  props: {
    cardID: String,
    question: String,
    solution: String,
    userSolution: String,
    subject: String,
    choices: Array,
    correctIndex: Number
  },
  data() {
    return {
      flipped: false,
    }
  },
  methods: {
    checkSolution(chosenIndex) {
      if (chosenIndex == this.correctIndex) {
          alert("correct");
          this.flipped = !this.flipped;
      } else {
          alert("wrong answer");
      }
    },
  }
};
</script>

<style scoped>
.debug {
  outline: 1px solid red;
}
.debug > * {
  outline: 1px solid blue;
}
</style>