<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <div> 
    
      <img alt="Vue logo" src="../assets/logo.png" />
      <h1>
        Dots Game ZEXO
      </h1>
      <w-button id="asd" class="ma1" color="primary" text xl route="/game">Play</w-button>
      <h1> </h1>
      <w-button  id="asd" class="ma1" color="primary" text xl disabled>Play Online</w-button>
    
  </div>
  
</template>

<style scoped>
a {
  color: #42b983;
}

#asd {
  width: 400px;
  height: 100px;
  font-size: 72px;
}
</style>
