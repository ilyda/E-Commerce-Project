import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const existing = state.items.find((i) => i.id === item.id);

      if (existing) {
        existing.count += item.count;
      } else {
        state.items.push(item);
      }

      state.total = state.items.reduce(
        (acc, i) => acc + i.price * i.count,
        0
      );
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter((i) => i.id !== action.payload);

      state.total = state.items.reduce(
        (acc, i) => acc + i.price * i.count,
        0
      );
    },

    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
