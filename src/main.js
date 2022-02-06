import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import '../node_modules/normalize.css/normalize.css'
import './assets/scss/index.scss'

import { $gsap } from './plugins/gsap'
import { cursor } from './plugins/cursor'
 
const app = createApp(App)

app
	.use(router)
	.mixin($gsap)
	.mixin(cursor)
	.mount('#app')
