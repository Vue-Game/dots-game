import { createApp } from 'vue'
import App from './App.vue'
import Home from "./components/Home.vue"
import Game from "./components/Game.vue"
import WaveUI from 'wave-ui'
import 'wave-ui/dist/wave-ui.css'
import { createRouter, createWebHashHistory } from 'vue-router'
import SequentialEntrance from 'vue-sequential-entrance'
import 'vue-sequential-entrance/vue-sequential-entrance.css'



const routes = [
    { path: '/', component: Home },
    { path: '/game', component: Game },
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})


const app = createApp(App)
app.use(router)
app.use(SequentialEntrance);
new WaveUI(app, {
    // Some Wave UI options.
  })
app.mount('#app')

// createApp(App).mount('#app')

