import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";

const cartStore = configureStore({
  reducer: {
    productReducer: productSlice,
    wishlistReducer: {},
    carReducer: {},
  },
});

export default cartStore;
