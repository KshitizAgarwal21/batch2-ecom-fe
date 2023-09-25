import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "../Home/slice";
import ProductSlice from "../Products/slice";
const store = configureStore({
  reducer: {
    data: ProductsSlice,
    product: ProductSlice,
  },
});

export default store;
