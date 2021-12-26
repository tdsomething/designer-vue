import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import HDC from 'packages/components'

const app = createApp(App)
app.use(router)
app.use(HDC)
app.mount('#app')
