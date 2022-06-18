import { createApp } from 'vue'
import App from './App.vue'
import { createPinia, PiniaVuePlugin  } from 'pinia'
import  UseGameStore  from "./stores/game.js";
import Home from "./components/Home.vue"
import Game from "./components/Game.vue"
import WaveUI from 'wave-ui'
import 'wave-ui/dist/wave-ui.css'
import Vue3ColorPicker from "vue3-colorpicker";
import "vue3-colorpicker/style.css";

import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { path: '/', component: Home },
    { path: '/game', component: Game },
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

router.beforeEach((to, from, next) => {
  next()
})
const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(Vue3ColorPicker)

new WaveUI(app, {
    // Some Wave UI options.
  })
app.mount('#app')

// createApp(App).mount('#app')

