<script setup>
import { ref } from "vue"
const toggleSlideFadeDown = ref(setTimeout(() => true, 1000))
</script>

<template>
  <w-flex id="container-dashboard">
    <w-card id="card" shadow color="white">
      PLAYER1
      <div id="bg-img-player1">
        <img
          id="img-player"
          src="https://i.pinimg.com/originals/fd/aa/7a/fdaa7a4fcc3db7e975ad935786e3e57a.png"
        />
      </div>
    </w-card>

    <w-card id="card" shadow>
      PLAYER2
      <div id="bg-img-player2">
        <img
          id="img-player"
          src="https://i.pinimg.com/originals/fd/aa/7a/fdaa7a4fcc3db7e975ad935786e3e57a.png"
        />
      </div>
    </w-card>
  </w-flex>
</template>

<style>
#card {
  width: 350px;
  height: 500px;
  margin: auto;
  border-radius: 10%;
  background-color: #3a3845;
  color: #eeeeee;
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
