<template>
  <button type="button" @click="igniteFunction">{{ func }}</button>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from 'vue';

export default defineComponent({
  props: {
    func: {
      type: String,
      required: false
    },
  },
  setup(props, context: SetupContext){
    const igniteFunction = () => {
      context.emit('ignite-function',props.func)
    };
    return{
      props,
      igniteFunction
    };
  }
});
</script>