<template>
  <div>
    <p>{{ currentCount }}</p>
    <button @click="plusOne">+</button>
    <button @click="minusOne">-</button>
    <p>This counter is global state.</p>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { useCurrentCount } from '@/models/global/current-count.ts';

  let { currentCount } = useCurrentCount();

  export default defineComponent({
    setup() {
      // const count: any = inject(keyCurrentCount);
      // const plusOne = () => currentCount.value++;
      const plusOne = () => console.log(currentCount);
      const minusOne = () => currentCount--;
      return {
        currentCount,
        plusOne,
        minusOne,
      };
    },
  });
</script>
