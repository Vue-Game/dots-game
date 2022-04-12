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
      Dots Game 
    </h1>

    <div> 
      <w-button class="ma1" color="primary" text xl>Play</w-button>
      <w-button class="ma1" color="primary" text xl>Play Online</w-button>
    </div>
    
  </div>
  
</template>

<style scoped>
a {
  color: #42b983;
}

w-button {
  width: 100px;
  height: 100px;
}
</style>
