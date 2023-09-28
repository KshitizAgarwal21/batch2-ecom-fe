import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "../Home/slice";
import ProductSlice from "../Products/slice";
import CartSlice from "../Cart/slice";
const store = configureStore({
  reducer: {
    data: ProductsSlice,
    product: ProductSlice,
    cart: CartSlice,
  },
});

export default store;
