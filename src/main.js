import './assets/main.css'
import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import MyPreset from './assets/theme'
import PrimeVue from "primevue/config";



import App from './App.vue'
import router from './router'

import ConfirmationService from 'primevue/confirmationservice'
import DialogService from 'primevue/dialogservice'
import ToastService from 'primevue/toastservice';

import AppState from './plugins/appState.js';
import ThemeSwitcher from './components/ThemeSwitcher.vue';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
    ripple: true,
    theme: {
        preset: MyPreset,
        options: {
            prefix: 'p',
            darkModeSelector: '.p-dark',
            cssLayer: false,
        }
    },
});
app.use(ConfirmationService);
app.use(ToastService);
app.use(DialogService);

app.use(AppState);
app.component('ThemeSwitcher', ThemeSwitcher);

app.mount('#app')
