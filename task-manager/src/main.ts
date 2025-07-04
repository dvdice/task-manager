/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import { createPinia } from 'pinia'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Styles
import 'unfonts.css'

import './styles.css' // Импорт из корня проекта
import '@mdi/font/css/materialdesignicons.css'

const app = createApp(App)

registerPlugins(app)

app.use(createPinia())
app.mount('#app')
