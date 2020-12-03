<template>
  <div class="calculator">
    <div class="row">
      <CalcDisplay :memory="memory" :func="func" :inputValue="inputValue" />
    </div>
    <div class="row">
      <FunctionButton func="+" @ignite-function="inputFunction" />
      <FunctionButton func="-" @ignite-function="inputFunction" />
      <FunctionButton func="×" @ignite-function="inputFunction" />
      <FunctionButton func="÷" @ignite-function="inputFunction" />
    </div>
    <div class="row" v-for="row in rows" :key="row">
      <NumberButton
        v-for="number in row"
        :key="number"
        :number="number"
        @input-number="inputNumber"
      />
    </div>
    <div class="row">
      <FunctionButton :func="'='" @ignite-function="equal" />
      <NumberButton :number="0" @input-number="inputNumber" />
      <FunctionButton func="C" @ignite-function="clear" />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, toRefs } from 'vue';
  import CalcDisplay from '@/views/presentationals/components/calculator/CalcDisplay.vue';
  import FunctionButton from '@/views/presentationals/components/calculator/FunctionButton.vue';
  import NumberButton from '@/views/presentationals/components/calculator/NumberButton.vue';
  import { useCalculator } from '@/logics/calculator.ts';
  export default defineComponent({
    components: {
      CalcDisplay,
      FunctionButton,
      NumberButton,
    },
    setup() {
      const {
        state,
        rows,
        inputNumber,
        inputFunction,
        clear,
        equal,
      } = useCalculator();
      return {
        ...toRefs(state),
        rows,
        inputNumber,
        inputFunction,
        clear,
        equal,
      };
    },
  });
</script>
