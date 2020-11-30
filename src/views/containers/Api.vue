<template>
  <section v-if="errored">
    <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
  </section>
  <div v-show="loading">
    Loading...
  </div>
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
  <p>This API being communicated by axios.</p>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, reactive, toRefs, inject, computed } from 'vue';
import axios from 'axios';
export default defineComponent({

  setup(){
    // const info: any = ref(null);
    // const errored = ref(false);
    // const loading = ref(true);

    interface State {
      info: any;
      errored: boolean;
      loading: boolean;
    }

    const state = reactive<State>({
      info: null,
      errored: false,
      loading: true
    })

    // const displayCount = computed(() => {
    //   const count: any = inject('count')
    // })

    const count: any = inject('count')


    onMounted(() => {
      axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => (state.info = response.data.bpi))
        .catch(error => {
          console.log(error);
          state.errored = true;
          })
        .finally(() => state.loading = false)
    })
    const currencydecimal = (value: number) => {
      return value.toFixed(2);
    }
    return{
      ...toRefs(state),
      currencydecimal,
      count
    }
  },
})
</script>

<style>
[v-cloak] {
  display: none;
}
</style>