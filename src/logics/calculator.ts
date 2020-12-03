import { reactive, ref } from 'vue';

type State = {
  memory: number | null;
  func: '+' | '-' | '×' | '÷' | null;
  inputValue: number | string;
};

type Func = '+' | '-' | '×' | '÷' | null;

export const useCalculator = () => {
  const state = reactive<State>({
    memory: null,
    func: null,
    inputValue: 0,
  });

  const isError = ref(false);

  const rows = [
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
  ];

  const error = (): void => {
    state.memory = null;
    state.func = null;
    state.inputValue = 'ERROR';
    isError.value = true;
  };

  const clear = (): void => {
    state.memory = null;
    state.func = null;
    state.inputValue = 0;
    isError.value = false;
  };

  const calcAdd = (memory: number, input: number): number => {
    const val = memory + input;
    if (!Number.isSafeInteger(val)) {
      error();
      return NaN;
    }
    return val;
  };

  const calcMinus = (memory: number, input: number): number => {
    const val = memory - input;
    if (!Number.isSafeInteger(val)) {
      error();
      return NaN;
    }
    return val;
  };

  const calcMultiply = (memory: number, input: number): number => {
    const val = memory * input;
    if (!Number.isSafeInteger(val)) {
      error();
      return NaN;
    }
    return val;
  };

  const calcDivide = (memory: number, input: number): number => {
    const val = memory / input;
    if (!Number.isSafeInteger(val)) {
      error();
      return NaN;
    }
    return val;
  };

  const calc = (memory: number | null, input: any, func: Func): any => {
    if (memory === null) {
      return input;
    }

    let val = NaN;
    switch (func) {
      case '+':
      case '-': {
        const bias = func === '+' ? 1 : -1;
        val = memory + bias * input;
        break;
      }
      case '×': {
        val = memory * input;
        break;
      }
      case '÷': {
        val = memory / input;
        break;
      }
    }
    if (!Number.isSafeInteger(val)) {
      error();
      return NaN;
    }
    return val;
  };

  function inputNumber(number: number): void {
    if (isError.value) {
      console.log('Error occured');
      return;
    }

    if (state.inputValue === 0) {
      state.inputValue = number;
      return;
    }

    const parsed = parseInt(state.inputValue.toString() + number.toString());

    if (Number.isSafeInteger(parsed)) {
      state.inputValue = parsed;
    }
  }

  const inputFunction = (func: Func): void => {
    if (isError.value) {
      return;
    }

    const val = calc(state.memory, state.inputValue, func);

    if (!isNaN(val)) {
      state.memory = val;
      state.func = func;
      state.inputValue = 0;
    }
  };
  const equal = (): void => {
    if (isError.value || state.memory === null || state.func === null) {
      return;
    }

    const val = calc(state.memory, state.inputValue, state.func);

    if (!isNaN(val)) {
      state.memory = null;
      state.func = null;
      state.inputValue = val;
    }
  };
  return {
    state,
    rows,
    clear,
    inputNumber,
    inputFunction,
    equal,
  };
};
