require('./bootstrap');

import { createApp } from 'vue'
import Layout from './Layout.vue';

const app = createApp({});
app.component('layout', Layout)
    .mount('#app');

