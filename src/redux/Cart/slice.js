import { createSlice } from "@reduxjs/toolkit";
import { AddToCart, checkout, getCart } from "./action";
const initialState = {
  message: "",
  cartItems: [],
  loading: true,
  error: false,
  orderStatus: "",
};

const CartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(AddToCart.fulfilled, (state, action) => {
      state.cartItems = action.payload.result;
      state.message = action.payload.msg;
      state.loading = false;
    });
    builder.addCase(AddToCart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(AddToCart.rejected, (state) => {
      state.error = true;
      state.loading = false;
    });

    builder.addCase(getCart.fulfilled, (state, action) => {
      state.cartItems = action.payload.result;
      state.loading = false;
    });
    builder.addCase(getCart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCart.rejected, (state) => {
      state.error = true;
      state.loading = false;
    });

    builder.addCase(checkout.fulfilled, (state, action) => {
      state.orderStatus = action.payload;
    });
    builder.addCase(checkout.pending, (state, action) => {
      state.orderStatus = action.payload;
    });
    builder.addCase(checkout.rejected, (state, action) => {
      state.orderStatus = action.payload;
    });
  },
});

export default CartSlice.reducer;
