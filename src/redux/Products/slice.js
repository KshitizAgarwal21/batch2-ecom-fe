import { createSlice } from "@reduxjs/toolkit";
import { getProductDetails } from "./action";
const initialState = {
  details: {},
  loading: true,
  error: false,
};

const ProductSlice = createSlice({
  name: "productSlice",

  initialState: initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getProductDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.details = action.payload;
    });
    builder.addCase(getProductDetails.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getProductDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export default ProductSlice.reducer;
