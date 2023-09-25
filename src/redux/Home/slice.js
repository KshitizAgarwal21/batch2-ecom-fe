import { createSlice } from "@reduxjs/toolkit";
import { GetProducts } from "./action";
const initialState = {
  products: [],
  loading: true,
  error: false,
};

const ProductsSlice = createSlice({
  name: "productsSlice",

  initialState: initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(GetProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload.result;
    });
    builder.addCase(GetProducts.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(GetProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export default ProductsSlice.reducer;
