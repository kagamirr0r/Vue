<template>
  <div>
    <p>{{ count }}</p>
    <button @click="plusOne">+</button>
    <button @click="minusOne">-</button>
    <p>This counter is global state.</p>
  </div>
</template>

<script lang="ts">
  import { defineComponent, inject } from 'vue';

  export default defineComponent({
    setup() {
      const count: any = inject('count');
      const plusOne = () => count.value++;
      const minusOne = () => count.value--;
      return {
        count,
        plusOne,
        minusOne,
      };
    },
  });
</script>
