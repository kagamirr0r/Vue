<template>
  <div
  class="currency"
  v-for="currency in info"
  :key="currency"
  v-cloak
  >
  {{ currency.description }}:
  <span class="lighten">
    <span v-html="currency.symbol"></span>{{ currencydecimal(currency.rate_float) }}
  </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import axios from 'axios';
export default defineComponent({
  setup(){
    const info: any = ref(null);
    const errored = ref(false);
    const loading = ref(true);
    onMounted(() => {
      axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => (info.value = response.data.bpi))
        .catch(error => {
          console.log(error);
          errored.value = true;
          })
        .finally(() => loading.value = false)
    })
    const currencydecimal = (value: number) => {
      return value.toFixed(2);
    }
    return{
      info,
      currencydecimal
    }
  },
})
</script>

<style>
[v-cloak] {
  display: none;
}
</style>