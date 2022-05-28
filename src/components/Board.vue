<script setup>
import { ref, onMounted, computed } from "vue" 
import { storeToRefs } from "pinia";
import  Point from "../models/Point.js";
import  Box from "../models/Box.js";
import  Line from "../models/Line.js";
import  useGameStore  from "../stores/game.js";
import { useScale } from "../composables/scale.js";
import Marker from "./Marker.vue";
import LineComponent from "./LineComponent.vue";

function defineProps() {
    return {
        rows: Number,
        column: Number
    }
}

const props = defineProps()

const points = ref([Point]);
const lines = ref([Line]);
const boxes = ref([Box]);
const boxesMarked = ref([Box]);
const linesMarked = ref([Line]);

const { scale } = useScale()

const gameStore = useGameStore()
const { playerA, playerB, currentPlayer} = storeToRefs(gameStore);
console.log(gameStore, "ini game store")

const __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
const cartesianProduct = function (a, b) {
    return a.reduce(function (acc, x) { return b.reduce(function (acc, y) { return __spreadArray(__spreadArray([], acc, true), [{ x: x, y: y }], false); }, acc); }, []);
}

const compareLines = function (l1, l2) {
    return l1.a.x === l2.a.x &&
        l1.a.y === l2.a.y &&
        l1.b.x === l2.b.x &&
        l1.b.y === l2.b.y;
};


const populateLines = function (boxes) {
    boxes.forEach(box => {
        box.lines.forEach(function (line) {
            let existingLine = lines.value.find(function (l) { return compareLines(l, line); });
            if (!existingLine) {
                lines.value.push(line);
            }
        });
    });
};


const createBoard = function () {
    points.value = cartesianProduct(Array.from({ length: props.rows }, function (_, i) { return i; }), Array.from({ length: props.columns }, function (_, i) { return i; }));
    points.value.forEach(function (point) {
        if (point.y < props.columns - 1 && point.x < props.rows - 1) {
            let x = point.x, y = point.y;
            let box = {
                initialPoint: point,
                lines: [
                    { a: { x: x, y: y }, b: { x: x, y: y + 1 } },
                    { a: { x: x, y: y }, b: { x: x + 1, y: y } },
                    { a: { x: x, y: y + 1 }, b: { x: x + 1, y: y + 1 } },
                    { a: { x: x + 1, y: y }, b: { x: x + 1, y: y + 1 } },
                ],
            };
            boxes.value.push(box);
        }
    });
};

const findBoxesWithLine = function (line) {
    return boxes.value.filter(function (box) { return box.lines.some(function (l) { return compareLines(l, line); }); });
};
const findCompletedBoxes = function (boxesToFind) {
    return boxesToFind.filter(function (box) {
        return box.lines.every(function (line) {
            return linesMarked.value.some(function (l) { return compareLines(l, line); });
        });
    });
};
const onLineMarked = function (lineMarked) {
    let _a, _b;
    linesMarked.value.push(lineMarked);
    let boxesWithLine = findBoxesWithLine(lineMarked);
    let boxesCompleted = findCompletedBoxes(boxesWithLine);
    if (boxesCompleted.length > 0) {
        (_a = boxesMarked.value).push.apply(_a, boxesCompleted);
        console.log(lineMarked, boxesCompleted);
        (_b = currentPlayer.value.boxes).push.apply(_b, boxesCompleted);
        return;
    }
    gameStore.changePlayer();
};
const svgProps = computed(() => ({
  height: props.rows * scale.value,
  width: props.columns * scale.value,
  viewBox: `${-scale.value / 2} ${-scale.value / 2} ${
    props.columns * scale.value
  } ${props.rows * scale.value}`,
}));

onMounted(() => {
  createBoard();
  populateLines(boxes.value);
  gameStore.setCurrentPlayer(playerA.value);
  
});

</script>

<template>
<h1/>
  <!-- <svg
    class="board"
    :height="svgProps.height"
    :width="svgProps.width"
    :viewBox="svgProps.viewBox"
  >
    <g id="lines">
      <LineComponent
        v-for="(line, i) in lines"
        :key="`line_${i}`"
        :a="line.a"
        :b="line.b"
        @marked="onLineMarked"
      />
    </g>
    <g id="points">
      <circle
        v-for="(point, i) in points"
        :key="`point_${i}`"
        :cx="point.x * scale"
        :cy="point.y * scale"
        :r="scale * 0.1"
        fill="var(--color-tertiary)"
      />
    </g>
    <g id="markers">
      <g id="player-a">
        <Marker
          v-for="(boxMarked, i) in playerA.boxes"
          :key="`box_marked_player_a_${i}`"
          :box="boxMarked"
          :fillColor="playerA.color"
          :textContent="playerA.id"
        />
      </g>
      <g id="player-b">
        <Marker
          v-for="(boxMarked, i) in playerB.boxes"
          :key="`box_marked_player_b_${i}`"
          :box="boxMarked"
          :fillColor="playerB.color"
          :textContent="playerB.id"
        />
      </g>
    </g>
  </svg> -->
</template>

<style scoped>

</style>
