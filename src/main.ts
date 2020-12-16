import { createApp, ref } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';

import {
  createCurrentCount,
  keyCurrentCount,
} from '@/models/global/current-count';

const app = createApp(App);
app.provide(keyCurrentCount, createCurrentCount());
app.use(router).use(VueAxios, axios);
app.mount('#app');
