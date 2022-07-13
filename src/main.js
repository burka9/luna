import { createApp } from 'vue'
import App from './App.vue'
import googleMap from '@fawmi/vue-google-maps'

import './index.css'

const apiKey = ''//'AIzaSyCC21dsB6TS7QT3b34jU3X4JeU6FGHytXU'
const mapOptions = {
	load: {
		key: apiKey
	}
}

const app = createApp(App)

app.use(googleMap, mapOptions)

app.mount('#app')
