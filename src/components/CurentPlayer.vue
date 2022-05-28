<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useGameStore } from "../stores/game";
const game = useGameStore();
const { currentPlayer } = storeToRefs(game);
</script>

<template>
  <div>
    Name
    <strong class="player-name">{{ currentPlayer.name }}</strong>
  </div>
</template>

<style >
.player-name {
  padding: 0.2rem;
  font-weight: 800;
  border-bottom: 2px solid v-bind(currentPlayer.color);
  transition: 0.3s;
  will-change: border-bottom;
}
</style>