import { createApp, ref } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

const key = 'count';
const value = ref(0);

const app = createApp(App);
  app.provide(key,value);
  app.use(router).use(VueAxios,axios);
  app.mount('#app');
