<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" :value="msg" @input="changeMsg">
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from 'vue';

type Props = {
  msg: string;
}

export default defineComponent({
  props: {
    msg: {
      type: String,
      required: true,
      default: 'defalut msg'
    },
  },
  setup(props: Props, context: SetupContext){
    const changeMsg = (e: any) => {
      context.emit('rewrite',e)
    }
    return {
    changeMsg,
    }
  }
});
</script>
