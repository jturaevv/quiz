import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from '@/App.vue'
import router from '@/router'

// Plugins 
import i18n from '@/i18n'
import components from '@/plugins/global-components'

// Global styles
import '@/assets/style/scss/main.scss'
import '@/assets/style/css/main.css'

const app = createApp(App)

// Global component registration
Object.entries(components).forEach(([name, component]) => app.component(name, component))

app.use(createPinia())
  .use(router)
  .use(i18n)
  .mount('#app')
