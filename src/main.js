import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/r-main"
// import '/components/axios'


createApp(App)
.use(router)
.mount('#app')
