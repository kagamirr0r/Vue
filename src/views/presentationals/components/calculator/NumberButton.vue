<template>
  <button type="button" @click="inputNumber">{{ number }}</button>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  type Props = {
    number: number;
  };
  export default defineComponent({
    props: {
      number: {
        type: Number,
        default: 0,
        required: true,
      },
    },
    setup(props, context) {
      const inputNumber = () => {
        context.emit('input-number', props.number);
      };
      return {
        props,
        inputNumber,
      };
    },
  });
</script>
