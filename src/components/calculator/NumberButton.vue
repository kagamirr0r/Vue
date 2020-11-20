<template>
  <button type="button">{{ number }}</button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    number: {
      type: Number,
      default: 0,
      require: true
    }
  },
  setup(){
    return{
      number,
    }
  }
})
</script>