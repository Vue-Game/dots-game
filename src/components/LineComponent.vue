<script>
import { ref, defineEmits } from "vue";
import { storeToRefs } from "pinia";
import Point from "../models/Point";
import  useGameStore  from "../stores/game";
import { useScale } from "../composables/scale";

function defineProps(){
    return {
        a: Point,
        b: Point,
    }
}
const props = defineProps()

const { scale } = useScale();
const clicked = ref(false);
const emit = defineEmits(["marked"]);
const gameStore = useGameStore();
const { currentPlayer } = storeToRefs(gameStore);
const onClick = () => {
  if (clicked.value) return;
  clicked.value = true;
  emit("marked", { a: props.a, b: props.b });
};
</script>

<template>
  <line
    @click="onClick"
    class="line"
    :class="{ marked: clicked }"
    :x1="a.x * scale"
    :x2="b.x * scale"
    :y1="a.y * scale"
    :y2="b.y * scale"
    :stroke-width="scale * 0.15"
    stroke-linecap="round"
  />
</template>

<style scoped>
.line {
  stroke: var(--color-text);
  opacity: 0.08;
  cursor: pointer;
  transition: 0.4s;
}
.marked {
  stroke: var(--color-text);
  opacity: 1;
}
.line:hover {
  stroke: v-bind(currentPlayer.color);
  opacity: 1;
}
</style>