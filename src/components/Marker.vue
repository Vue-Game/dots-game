<script>
import { computed } from "vue";
import { useScale } from "../composables/scale.js";
import  Box from "../models/Box.js";

function defineProps(){
    return {
        box: Box,
        fillColor: String,
        textContent: String
    }
}

const props = defineProps()

const {scale} = useScale()

const circlePosition = computed(function () {
    let _a = props.box.initialPoint, x = _a.x, y = _a.y;
    return {
        x: x * scale.value + scale.value / 2,
        y: y * scale.value + scale.value / 2,
    };
});

const textPosition = computed(function () {
    let _a = props.box.initialPoint, x = _a.x, y = _a.y;
    return {
        x: x * scale.value + scale.value / 2,
        y: y * scale.value + scale.value / 2,
    };
});

</script>

<template>
</template>