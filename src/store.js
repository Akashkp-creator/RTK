import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice"; // v have imported the reducer fun. from the cartSlice
export const store = configureStore({
  reducer: {
    // "cart" is a key name u can give any thing as u wish.
    cart: cartReducer,
  },
});
