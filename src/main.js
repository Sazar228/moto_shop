import './assets/main.css'
import { createApp } from "vue";
import App from "./App.vue";
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import router from './router/router.js'
import { createPinia } from 'pinia';


const app = createApp(App);





app
    .use(createPinia())
    .use(router)
    .use(autoAnimatePlugin)
    .mount("#app");
