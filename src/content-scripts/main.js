import { createApp } from 'vue'
import ContentApp from './ContentApp.vue'
import styles from '../styles/main.css'

const treeHead = document.createElement('div')
document.body.appendChild(treeHead)

const parent = document.createElement('div')
parent.classList.add('app-container')

const appRoot = document.createElement('div')
const shadow = treeHead.attachShadow({ mode: 'open' })

parent.appendChild(appRoot)
shadow.appendChild(parent)

const style = document.createElement('style')
shadow.appendChild(style)
style.textContent = styles

const app = createApp(ContentApp)
app.provide('chrome', window.chrome).mount(appRoot)
