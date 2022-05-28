<script>
import { storeToRefs } from "pinia";
import  useGameStore  from "../stores/game.js";

const game = useGameStore()
const {playerA, playerB} = storeToRefs(game)
</script>

<template>
  <div class="score">
    <div class="score-player">
      <small class="score-label">{{ playerA.name }}</small>
      <span class="score-a">{{ game.getPlayerAScore }}</span>
    </div>
    <span class="score-x">x</span>
    <div class="score-player">
      <small class="score-label">{{ playerB.name }}</small>
      <span class="score-b">{{ game.getPlayerBScore }}</span>
    </div>
  </div>
</template>

<style scoped>
.score {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.score-player {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
}
.score-label {
  font-size: 0.8rem;
  font-weight: lighter;;
  text-align: center;
}
.score-x {
  font-size: 1.2rem;
  font-weight: 400;
  padding: 0.2rem 0.4rem;
}
.score-a,
.score-b {
  font-size: 1.5rem;
  font-weight: 800;
}
.score-a {
  color: v-bind(playerA.color);
}
.score-b {
  color: v-bind(playerB.color);
}
</style>