import { createApp } from 'vue'
import PopupApp from './PopupApp.vue'
import styles from '../styles/main.scss'

const style = document.createElement('style')
document.body.appendChild(style)
style.textContent = styles

const app = createApp(PopupApp)
app.provide('chrome', window.chrome).mount('#popup-app')
