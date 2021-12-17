import { createApp } from 'vue'
import uilib from '../lib'
import '../lib/theme/index.scss'
import App from './App.vue'

const app = createApp(App)
app.use(uilib)
app.mount('#app')
