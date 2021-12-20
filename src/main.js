import { createApp } from 'vue'
import uilib from '../lib'
import '../lib/theme/index.scss'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(uilib, { prefix: 'El' })
app.use(router)
app.mount('#app')
