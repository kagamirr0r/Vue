<template>
  <div>
    {{ count }}
  </div>
  <button @click="plusOne">+</button>
  <button @click="minusOne">-</button>
</template>

<script lang="ts">
import { defineComponent,inject } from 'vue';

export default defineComponent({
  setup(){
    const count: any = inject('count')
    const plusOne = () => count.value++
    const minusOne = () => count.value--
    return {
      count,
      plusOne,
      minusOne
    }
  }
})
</script>