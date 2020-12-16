<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png" />
    <HelloWorld :msg="message" @rewrite="changeMsg" />
    <p>This is made by emit</p>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, watch } from 'vue';
  import HelloWorld from '@/views/presentationals/components/home/HelloWorld.vue';

  export default defineComponent({
    components: {
      HelloWorld,
    },
    setup() {
      const message = ref('Hello Mother Fucker!!');
      const changeMsg = (e: any) => {
        message.value = e.target.value;
        // console.log(message.value);
      };
      watch(message, () => {
        console.log(message.value);
      });
      return {
        message,
        changeMsg,
      };
    },
  });
</script>
