import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import VueObserveVisibilityPlugin, { ObserveVisibility } from 'vue-observe-visibility'



const app = createApp(App)

app.use(VueObserveVisibilityPlugin)
app.mount('#app')
