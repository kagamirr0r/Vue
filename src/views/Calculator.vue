<template>
  <div class="calculator">
    <div class="row">
      <CalcDisplay
        :memory="memory"
        :func="func"
        :inputValue="inputValue"/>
    </div>
    <div class="row">
      <FunctionButton func="+"/>
      <FunctionButton func="-"/>
      <FunctionButton func="C"/>
    </div>
    <div class="row" v-for="row in rows" :key="row">
      <NumberButton v-for="number in row" :key="number" :number="number"/>
    </div>
    <div class="row">
      <FunctionButton :func="'='"/>
      <NumberButton :number="0"/>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, toRefs, ref } from 'vue'
  import CalcDisplay from '@/components/calculator/CalcDisplay.vue';
  import FunctionButton from '@/components/calculator/FunctionButton.vue';
  import NumberButton from '@/components/calculator/NumberButton.vue';
  export default defineComponent({
    components: {
      CalcDisplay,
      FunctionButton,
      NumberButton
    },
    setup(){
      const state = reactive<{
        memory: number | null;
        func: number | null;
        inputValue: number | string;
      }>({
        memory: null,
        func: null,
        inputValue: 0
      });
      const isError = ref(false);

      const rows = [[7,8,9],[4,5,6],[1,2,3]]

      const error = () => { 
        state.memory = null;
        state.func = null;
        state.inputValue = "ERROR";
        isError.value = true;
        }

      const clear = () => {
        state.memory = null;
        state.func = null;
        state.inputValue = "ERROR";
        isError.value = false;
      }
      const calc = (memory,func,input) => {
        if (state.memory === null) {
          return input;
        }

        let val = NaN;
        switch(func) {
          case '+':
          case '-':
            let bias = func === '+' ? 1 : -1;
            val = memory + (bias * input);
            break;
            }
          
        if (!Number.isSafeInteger(val)){
          error();
          return NaN;
        }
        return val;
      };
      const inputNumber = (number: number) => {
        if (isError) {
          return;
        }

        if (state.inputValue === 0) {
          state.inputValue = number;
          return;
        }
        let parsed = parseInt(state.inputValue.toString() + number.toString());

        if (Number.isSafeInteger(parsed)) {
        state.inputValue = parsed;
        } 
      }

      const inputFunction = (func) => {
        if (isError) {
          return;
        }

        let val = calc(state.memory,state.inputValue, func);
        if (!isNaN(val)) {
          state.memory = val;
          state.func = func;
          state.inputValue = 0;
        }

      }
      // const equal = () => {}
      return {
        ...toRefs(state),
        rows
      }
  })
</script>