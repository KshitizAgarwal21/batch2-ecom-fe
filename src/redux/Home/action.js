import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GetProducts = createAsyncThunk("getProducts", async (payload) => {
  try {
    console.log("called");

    const res = await axios.get("http://localhost:8080/product/getProducts");

    return res.data;
  } catch (e) {
    console.log(e);
  }
});
