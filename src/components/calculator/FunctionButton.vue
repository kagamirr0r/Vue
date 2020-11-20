<template>
  <button type="button">{{ func }}</button>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    func: {
      type: String,
      required: false
    },
  },
  setup(props){
    return{
      props,
    }
  }
})
</script>