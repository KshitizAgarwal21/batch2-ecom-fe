import { createSlice } from "@reduxjs/toolkit";
import { AddToCart } from "./action";
const initialState = {
  message: "",
  loading: false,
  error: false,
};

const CartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(AddToCart.fulfilled, (state, action) => {
      state.message = action.payload;
      state.loading = false;
    });
    builder.addCase(AddToCart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(AddToCart.rejected, (state) => {
      state.error = true;
    });
  },
});

export default CartSlice.reducer;
