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
          (item) => item.id != existingItem.id,
        );
        return [...remainingItems, existingItem];
      } else {
        state.push({
          ...action.payload,
          quantity: 1,
          totalPrice: action.payload.price,
        });
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
