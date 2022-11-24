import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../shared/baseUrl";

export const fetchCarts = createAsyncThunk("carts/fetchCarts", async () => {
  const response = await fetch(baseUrl + "carts");
  return response.json();
});

const cartsSlice = createSlice({
  name: "carts",
  initialState: { isLoading: true, errMess: null, cartsArray: [] },
  reducers: {},
  extraReducers: {
    [fetchCarts.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchCarts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMess = null;
      state.CartsArray = action.payload;
    },
    [fetchCarts.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMess = action.error ? action.error.message : "Fetch failed";
    },
  },
});

export const cartsReducer = cartsSlice.reducer;
