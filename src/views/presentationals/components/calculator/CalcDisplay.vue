<template>
  <div class="memory">
    <span v-show="hasMemory" class="memory">{{ memory }}</span>
    <span v-show="hasMemory" class="fuction">{{ func }}</span>
    <span class="input-value">{{ inputValue }}</span>
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue';

  export default defineComponent({
    props: {
      memory: {
        type: Number,
        required: true,
        default: 0,
      },
      func: {
        type: String,
        required: true,
        default: '',
      },
      inputValue: {
        type: Number,
        required: true,
        default: 0,
      },
    },
    setup(props) {
      const hasMemory = computed(() => props.memory !== null);
      return {
        hasMemory,
      };
    },
  });
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
