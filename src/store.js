import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice"; // v have imported the reducer fun. from the cartSlice
import modalReducer from "./features/modal/modalSlice";
export const store = configureStore({
  reducer: {
    // "cart" is a key name u can give any thing as u wish. cartReducer is reducer fun. form cartSlice
    cart: cartReducer,
    // "modal" is a key name . modalReducer is reducer fun. from modalSlice
    modal: modalReducer,
  },
});
