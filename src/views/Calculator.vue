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
    <div>
      <NumberButton :number="0"/>
    </div>
    <div class="row">
      <FunctionButton :func="'='"/>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, toRefs } from 'vue'
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
      const state = reactive({
        memory: null,
        func: null,
        inputValue: 0
      })
      const rows = [[7,8,9],[4,5,6],[1,2,3]]
      return {
        ...toRefs(state),
        rows
      }
    }
  })
</script>