<template>
  <div v-bind:class="flipped ? 'flip-container flipped': 'flip-container'">
    <h1>{{subject}}</h1>
    <div class="flipper">
      <div class="front flex bg-gray-200 rounded m-2 h-64 w-1/2 shadow-md flex-col">
        <slot name="front"></slot>
        <!--<v-icon class="frontFlipBtn" 
            v-on:click="flipped=true">
            See explanation
        </v-icon>-->
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
      <div class="back flex bg-gray-200 rounded m-2 h-64 w-1/2 shadow-md flex-col">
        <slot name="back"></slot>
        <v-icon class="backFlipBtn" 
            v-on:click="flipped=false">
            See question again
        </v-icon>
        <div>
            {{solution}}
        </div>
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
          alert("wrong answer niga");
      }
    },
  }
};
</script>

<style type='text/css' scoped>
i.frontFlipBtn,
i.backFlipBtn {
    position:absolute; 
    right: 20px; 
    top: 20px;
    color:#FFFFFF;
}
i.backFlipBtn {
    -webkit-transform: rotateY(-180deg);
    -moz-transform: rotateY(-180deg);
    -o-transform: rotateY(-180deg);
    -ms-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
}
.flip-container {
  -webkit-perspective: 1000;
  -moz-perspective: 1000;
  -o-perspective: 1000;
  perspective: 1000;
}
.flip-container {
  min-height: 120px;
}
.flipper {
  -moz-transform: perspective(1000px);
  -moz-transform-style: preserve-3d;
}
.front,
.back {
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: 0.6s;
  -webkit-transform-style: preserve-3d;
  -moz-transition: 0.6s;
  -moz-transform-style: preserve-3d;
  -o-transition: 0.6s;
  -o-transform-style: preserve-3d;
  -ms-transition: 0.6s;
  -ms-transform-style: preserve-3d;
  transition: 0.6s;
  transform-style: preserve-3d;
  /*height:100%;
  width: 70%;
  left: 15%;
  border-style: outset;
  border-radius: 5px;*/
  position: absolute;
}
.back {
  -webkit-transform: rotateY(-180deg);
  -moz-transform: rotateY(-180deg);
  -o-transform: rotateY(-180deg);
  -ms-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
  /*
  border-style: outset;
  border-radius: 5px;*/
}
.flip-container.flipped .back {
  -webkit-transform: rotateY(0deg);
  -moz-transform: rotateY(0deg);
  -o-transform: rotateY(0deg);
  -ms-transform: rotateY(0deg);
  transform: rotateY(0deg);
}
.flip-container.flipped .front {
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  -ms-transform: rotateY(180deg);
  transform: rotateY(180deg);
}
.front {
  z-index: 2;
}
.backFlipBtn {
    background-color: gray;
}
.frontFlipBtn {
    background-color: gray;
}
.choices {
  display: block;
}
</style>