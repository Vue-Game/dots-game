import { defineStore } from "pinia";
import  Player from "../models/Player";

function useGameStore() {
  const useGameStore = defineStore({
    id: "game",
    state: () => ({
      currentPlayer: Player,
      playerA: {
        id: "A",
        name: "Player A",
        color: "var(--color-primary)",
        boxes: [],
      } ,
      playerB: {
        id: "B",
        name: "Player B",
        color: "var(--color-secondary)",
        boxes: [],
      } ,
    }),
    getters: {
      getCurrentPlayer: (state) => state.currentPlayer,
      getPlayerAScore: (state) => state.playerA.boxes.length,
      getPlayerBScore: (state) => state.playerB.boxes.length,
    },
    actions: {
      setCurrentPlayer(player= Player) {
        this.currentPlayer = player;
      },
      changePlayer() {
        if (this.currentPlayer.id === "A") {
          this.setCurrentPlayer(this.playerB);
        } else {
          this.setCurrentPlayer(this.playerA);
        }
      }
    } 
  })
  return useGameStore
}

console.log("game Store created")


export default useGameStore()