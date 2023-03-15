import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  storage: 0,
  color: 0,
  error: null,
};

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    setStorage: (state, action) => {
      state.storage = action.payload;
    },
    setColor: (state, action) => {
      state.color = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearState: () => initialState,
  },
});

export const {
  setStorage, setColor, setError, clearState,
} = cartSlice.actions;

export default cartSlice.reducer;
