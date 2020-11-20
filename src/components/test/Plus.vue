<template>
  <button @click="plusOne">+</button>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    number: {
      type: [Number, String],
      default: 0,
      required: true
    },
  },
    setup(props){
      const refNumber = ref(props.number.value ++)
      return {
        props,
        plusOne,
    }
  }
})
</script>