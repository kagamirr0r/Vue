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
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true,
      default: 'defalut msg'
    },
  },
  // emits: ['rewrite'],
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
