import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
const initialState = {
  cartItem: cartItems,
  amount: 0,
  total: 0,
  isLoading: true,
};
const cartSlice = createSlice({
  name: "cart", //any thing u can give but give it as the feature related name (suggestion)
  initialState,
});

// console.log(cartSlice); //the below thing in Browser console.
//************************************************************************************************ */
// {name: 'cart', actions: {…}, caseReducers: {…}, reducer: ƒ, getInitialState: ƒ}
// actions: {}
// caseReducers: {}
// getInitialState: ƒ ()
// name: "cart"
// reducer: ƒ (state, action) ==>this "reducer" is going to control the State(initial State) in the Slice.
//********************************************************************************************************** */
export default cartSlice.reducer; //==>here v have exported the above reducer.
