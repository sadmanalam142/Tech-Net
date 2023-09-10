import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increament: (state) => {
      state.count = state.count + 1;
    },
    decreament: (state) => {
      state.count = state.count - 1;
    },
    increamentByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    decreamentByAmount: (state, action: PayloadAction<number>) => {
      state.count -= action.payload;
    },
  },
});

export const {
  increament,
  decreament,
  increamentByAmount,
  decreamentByAmount,
} = counterSlice.actions;

export default counterSlice.reducer;
