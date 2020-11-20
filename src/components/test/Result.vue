<template>
  <p>{{ result }}</p>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent ({
  props:{
    result: {
      type: [Number, String],
      default: 0,
      required: true
    }
  },
  setup(props) {
    return {
      props,
    }
  }
})
</script>
