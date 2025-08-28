import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { openModal } from "../modal/modalSlice";

const url = "https://www.course-api.com/react-useReducer-cart-project";
const initialState = {
  cartItems: [],
  amount: 1,
  total: 0,
  isLoading: true,
};

export const getCartItems = createAsyncThunk(
  "cart/getCartItems", //"cart/getCartItems" is action
  async (name, thunkAPI) => {
    // return fetch(url)
    //   .then((resp) => resp.json())
    //   .catch((err) => console.log(err));
    try {
      // console.log(name); //it is sent from the App.js file. O/P is "random".
      // console.log(thunkAPI); //v have "dispatch" to access the dispatch & "getStart" to access the state.
      // console.log(thunkAPI.getState()); //to get the state of all the features (from modal,cart)
      // thunkAPI.dispatch(openModal()); //v can also access the feature of "openModel"
      const resp = await axios(url);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);
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
    // increase: (state, { payload }) => {
    //   const cartItem = state.cartItems.find((item) => item.id === payload.id);
    //   cartItem.amount = cartItem.amount + 1;
    // },
    increase: (state, action) => {
      // console.log(action);
      // *********************************
      // payload: {id: 'rec1JZlfCIBOPdcT2'} here v are sending "id" in object.
      // type: "cart/increase"
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload.id //here v destructured
      );
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
  // builder callback function
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        // console.log(action);
        state.isLoading = false;
        state.cartItems = action.payload;
      })
      .addCase(getCartItems.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      });
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
export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;
export default cartSlice.reducer; //==>here v have exported the above reducer.
