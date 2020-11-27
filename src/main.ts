import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import { calcKey, createCalcState } from '@/logics/calclator.ts'

const app = createApp(App)
app.use(router)
app.use(VueAxios,axios)
app.provide(calcKey, createCalcState())
app.mount('#app')


