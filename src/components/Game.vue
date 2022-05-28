<script setup>
import { ref } from "vue"
import { ColorInputWithoutInstance } from "tinycolor2";
import board from "./Board.vue"
const toggleSlideFadeDown = ref(setTimeout(() => true, 1000))
const readyp1 = ref(false)
const readyp2 = ref(false)
const play = ref(false)
const pureColor = ref<ColorInputWithoutInstance>("red");
const gradientColor = ref("linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%)")
components: {
    board
}
</script>

<template>
  <div v-if="!play">
    <w-flex id="container-dashboard">
      <w-card id="card" shadow color="white">
        PLAYER1
        <div id="bg-img-player1">
          <img
            id="img-player"
            src="https://i.pinimg.com/originals/fd/aa/7a/fdaa7a4fcc3db7e975ad935786e3e57a.png"
          />
        </div>
        <w-input id="input1"
          class="mb4"
          label="Name"
          shadow>
        </w-input>
        <color-picker v-model:pureColor="pureColor" v-model:gradientColor="gradientColor"/>
        <w-button id="btn-ready-p1" color="primary" text lg  @click="readyp1 = !readyp1">
          <h1 v-if="!readyp1">Ready</h1>  
          <h1 v-else>Cancel</h1>
        </w-button>
      </w-card>

      <w-card id="card" shadow>
        PLAYER2
        <div id="bg-img-player2">
          <img
            id="img-player"
            src="https://i.pinimg.com/originals/fd/aa/7a/fdaa7a4fcc3db7e975ad935786e3e57a.png"
          />
        </div>
        <w-input id="input1"
          class="mb4"
          label="Name"
          shadow>
        </w-input>
        <color-picker v-model:pureColor="pureColor" v-model:gradientColor="gradientColor"/>
        <w-button id="btn-ready-p1" color="primary" text lg @click="readyp2 = !readyp2">
          <h1 v-if="!readyp2">Ready</h1>  
          <h1 v-else>Cancel</h1>
        </w-button>
      </w-card>
    </w-flex>
    <w-button
      @click="play = !play"
      id="bt-play"
      class="ma1"
      bg-color="success"
      color="yellow-light2">
      Play
    </w-button>
  </div>

  <board v-else />
</template>

<style>
#color-p {
  background-color: red;
}

#btn-ready-p1 {
  width: 100%;
  height: 40px;
  position: absolute;
  bottom: 50px;
  left: 0;
}

#btn-ready-p2 {
  width: 100%;
  height: 40px;
  position: absolute;
  bottom: 50px;
  left: 0;
}
/* #bt-play {
  width: 300px;
  height: 120px;
  font-size: 70px;
  bottom: 350px;
} */

#bt-ready {
  width: 100%;
  height: 40px;
  margin-top: 79%;
}

#card {
  width: 350px;
  height: 600px;
  margin: auto;
  border-radius: 5%;
  background-color: #3a3845;
  color: #eeeeee;
  top: 35px;
}

#container-dashboard {
  height: auto;
  width: auto;
  margin: auto;
  padding-top: 30px;
}

#img-player {
  width: 230px;
  padding-top: 35px;
}

#bg-img-player1,
#bg-img-player2 {
  width: 230px;
  height: 230px;
  border-radius: 50%;
  background-color: #066163;
  margin: auto;
  margin-top: 35px;
}
</style>
