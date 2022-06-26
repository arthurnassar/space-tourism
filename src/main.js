import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import router from './router'

createApp(App).use(router)
    .use(Router)
    .mount('#app')
