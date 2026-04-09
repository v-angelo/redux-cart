import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    // add to cart
    addToCart: (state, action) => {
      const existingItem = state?.find((item) => item.id == action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;

        const remainingItems = state?.filter(
          (item) => item.id !== existingItem.id,
        );
        state = [...remainingItems, existingItem];
      } else {
        state.push({
          ...action.payload,
          quantity: 1,
          totalPrice: action.payload.price,
        });
      }
    },

    // remove cart item
    removeCartItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },

    // increment cart
    incrementCart: (state, action) => {
      const existingProduct = state?.find((item) => item.id == action.payload);
      const remainingItems = state.filter((item) => item.id !== action.payload);

      existingProduct.quantity += 1;
      existingProduct.totalPrice =
        existingProduct.quantity * existingProduct.price;
      state = [...remainingItems, existingProduct];
    },

    // decrement cart
    decrementCart: (state, action) => {
      const existingProduct = state?.find((item) => item.id == action.payload);
      const remainingItems = state.filter((item) => item.id !== action.payload);

      existingProduct.quantity -= 1;
      existingProduct.totalPrice =
        existingProduct.quantity * existingProduct.price;
      state = [...remainingItems, existingProduct];
    },

    // empty cart
    emptyCart: (state) => {
      return [];
    },
  },
});

export const {
  addToCart,
  removeCartItem,
  incrementCart,
  decrementCart,
  emptyCart,
} = cartSlice.actions;

export default cartSlice.reducer;
