import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductDetails = createAsyncThunk(
  "getProductsDetails",

  async (payload) => {
    console.log(payload);
    try {
      const res = await axios.post(
        "http://localhost:8080/product/getProductDetails",
        { id: payload }
      );

      return res.data;
    } catch (e) {
      console.log(e);
    }
  }
);
