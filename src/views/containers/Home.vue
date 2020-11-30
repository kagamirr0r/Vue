<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png">
    <HelloWorld :msg="message" @rewrite="changeMsg"/>
    <p>This was made by context.emit</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref} from 'vue';
import HelloWorld from '@/views/presentationals/components/home/HelloWorld.vue';

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
  setup() {
    const message = ref('Hello Vue.js')
    const changeMsg = (e: any) => {
      message.value = e.target.value
    }
    return {
      message,
      changeMsg,
    }
  },
});
</script>
