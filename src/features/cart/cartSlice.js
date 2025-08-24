import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
const initialState = {
  cartItems: cartItems,
  amount: 1,
  total: 0,
  isLoading: true,
};
const cartSlice = createSlice({
  name: "cart", //any thing u can give but give it as the feature related name (suggestion)
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
  },
});

// console.log(cartSlice); //the below thing in Browser console.
//************************************************************************************************ */
// {name: 'cart', actions: {…}, caseReducers: {…}, reducer: ƒ, getInitialState: ƒ}
// actions: {clearCart: ƒ}                               ===>v have a clearCart function
// caseReducers: {clearCart: ƒ}
// getInitialState: ƒ ()
// name: "cart"
// reducer: ƒ (state, action)
//********************************************************************************************************** */
export const { clearCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer; //==>here v have exported the above reducer.
