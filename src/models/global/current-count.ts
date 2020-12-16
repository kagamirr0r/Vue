import { ref, inject } from 'vue';

//provide
export const createCurrentCount = () => {
  const currentCount = ref(0);
  return {
    currentCount,
  };
};

//inject
export const keyCurrentCount = Symbol();
export const useCurrentCount = () => {
  const currentCount = inject(keyCurrentCount) as { currentCount: number };
  return { currentCount };
};
