import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItem: [],
  amount: 0,
  total: 0,
  isLoading: true,
};
const cartSlice = createSlice({
  name: "cart", //any thing u can give but give it as the feature related name (suggestion)
  initialState,
});

console.log(cartSlice);
export default cartSlice.reducer;
