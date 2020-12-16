<template>
  <section v-if="errored">
    <p>
      We're sorry, we're not able to retrieve this information at the moment,
      please try back later
    </p>
  </section>
  <div v-show="loading">Loading...</div>
  <div v-for="currency in info" v-cloak :key="currency" class="currency">
    {{ currency.description }}:
    <span class="lighten">
      <span v-html="currency.symbol"></span
      >{{ currencydecimal(currency.rate_float) }}
    </span>
  </div>
  <p>This API being communicated by axios.</p>
</template>

<script lang="ts">
  import { defineComponent, onMounted, reactive, toRefs } from 'vue';
  import axios from 'axios';
  export default defineComponent({
    setup() {
      //refを使う場合
      // const info: any = ref(null);
      // const errored = ref(false);
      // const loading = ref(true);

      //reactiveを使う場合
      interface State {
        info: any;
        errored: boolean;
        loading: boolean;
      }

      const state = reactive<State>({
        info: null,
        errored: false,
        loading: true,
      });

      onMounted(() => {
        axios
          .get('https://api.coindesk.com/v1/bpi/currentprice.json')
          .then(response => (state.info = response.data.bpi))
          .catch(error => {
            console.log(error);
            state.errored = true;
          })
          .finally(() => (state.loading = false));
      });
      const currencydecimal = (value: number) => {
        return value.toFixed(2);
      };
      return {
        ...toRefs(state),
        currencydecimal,
      };
    },
  });
</script>

<style>
  [v-cloak] {
    display: none;
  }
</style>
