import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: '@counter',
  initialState: {
    value: 0,
  },
  reducers: {
    incrementCounter: (draft) => {
      draft.value += 1;
    },
    decrementCounter: (draft) => {
      if (draft.value > 0) {
        draft.value -= 1;
      }
    },
    resetCounter: (draft) => {
      draft.value = 0;
    },
  },
});

export const { incrementCounter, decrementCounter, resetCounter } =
  counterSlice.actions;

export const counterReducer = counterSlice.reducer;
