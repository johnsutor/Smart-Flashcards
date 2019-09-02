<template>
    <div class="flex w-5/6 md:w-1/2 lg:w-1/3 bg-white rounded m-2 h-64 shadow-md flex-col relative p-1">
      <h1 class="text-bold">{{subject}}</h1>
      <!-- Front with question -->
      <div v-if="!flipped" class="">
        <div class="text-left">
            {{card_data.question}}
        </div>
        <div class="flex flex-col"> 
          <button v-for="(choice, index) in card_data.choices" :key="index" @click="checkSolution(index)">
            {{ question_prefix[index] + choice }}
          </button>
        </div>
      </div>
      <!-- Back with solution -->
      <div v-else class="">
        <span @click="flipped = !flipped">
          See question again
        </span>
        <div>
          {{card_data.solution}}
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'FlashCard',
  props: {
    card_data: Object,
    cardID: String,
    subject: String,
  },
  data() {
    return {
      question_prefix: ['A. ', 'B. ', 'C. ', 'D. '],
      flipped: false,
    }
  },
  created() {
    console.log(this.card_data)
  },
  methods: {
    checkSolution(index) {
      if(this.card_data.choices[index] == this.card_data.solution) {
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