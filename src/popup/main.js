import { createApp } from 'vue'
import PopupApp from './PopupApp.vue'

const app = createApp(PopupApp)
app.provide('chrome', window.chrome).mount('#popup-app')
