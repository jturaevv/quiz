import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import router from '@/router'
import i18n from '@/i18n'
import components from '@/plugins/global-components'

const app = createApp(App)

// Global component registration
Object.entries(components).forEach(([name, component]) => app.component(name, component))

app.use(createPinia())
  .use(router)
  .use(i18n)
  .mount('#app')
