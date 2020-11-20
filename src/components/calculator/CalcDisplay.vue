<template>
  <div class="memory">
    <span class="memory" v-show="hasMemory">{{ memory }}</span>
    <span class="fuction" v-show="hasMemory">{{ func }}</span>
    <span class="input-value">{{ inputValue }}</span>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';

export default defineComponent ({
  props: {
    memory: {
      type: Number
    },
    func: {
      type: String
    },
    inputValue: {
      type: Number
    }
  },
  setup(props){
    const hasMemory = computed(() => props.memory !== null)
    return {
      hasMemory,
    }
  }
})
</script>

<style scoped>
    .calc-display {
        position: relative;
        text-align: right;
    }

    .memory {
        color: #9c9c9c;
        font-size: 1.3rem;
        font-style: italic;
    }

    .function {
        color: #9c9c9c;
    }

    .input-value {
        background-color: #d8fcff;
        font-weight: bold;
        font-size: 2rem;
        width: 10rem;
    }
</style>