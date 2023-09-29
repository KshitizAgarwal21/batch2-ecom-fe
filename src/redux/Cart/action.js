import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const AddToCart = createAsyncThunk("addToCart", async (payload) => {
  try {
    const res = await axios.post(
      "http://localhost:8080/activity/addtocart",
      payload,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );

    return res.data;
  } catch (e) {
    console.log(e);
  }
});

export const getCart = createAsyncThunk("getCart", async (payload) => {
  try {
    const resp = await axios.get("http://localhost:8080/activity/getCart", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    return resp.data;
  } catch (e) {
    console.log(e);
  }
});
