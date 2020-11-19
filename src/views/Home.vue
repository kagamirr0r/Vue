<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg="msg" @rewrite="changeMsg"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
  setup() {
    const msg = ref('Hello Vue.js')
    const changeMsg = (e: any) => {
      msg.value = e.target.value
    }
    return {
      msg,
      changeMsg
    }
  },
});
</script>
