/* eslint-disable import/order */
import '@/@iconify/icons-bundle'
import App from '@/App.vue'
import vuetify from '@/plugins/vuetify'
import { loadFonts } from '@/plugins/webfontloader'
import router from '@/router'
import '@core/scss/template/index.scss'
import '@layouts/styles/index.scss'
import '@styles/styles.scss'
import { createPinia } from 'pinia'
import AutoComplete from 'primevue/autocomplete'
import PrimeVue from 'primevue/config'
import 'primevue/resources/primevue.min.css'

import 'primevue/resources/themes/saga-blue/theme.css'
import { createApp } from 'vue'

loadFonts()

// Create vue app
const app = createApp(App)

// Use plugins
app.use(vuetify)
app.use(createPinia())
app.use(router)
app.use(PrimeVue)

// component
app.component('PrimeVueAutoComplete', AutoComplete)

// Mount vue app
app.mount('#app')
