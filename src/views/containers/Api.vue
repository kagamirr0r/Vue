<template>
  <div>{{ info }}</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import axios from 'axios';
export default defineComponent({
  setup(){
    const info: any = ref(null)
    onMounted(() => {
      axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => (info.value = response))
    })
    return{
      info,
    }
  },
})
</script>