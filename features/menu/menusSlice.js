import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../shared/baseUrl";

export const fetchMenu = createAsyncThunk("menu/fetchMenu", async () => {
  const response = await fetch(baseUrl + "menu");
  return response.json();
});

const menusSlice = createSlice({
  name: "menu",
  initialState: { isLoading: true, errMess: null, menusArray: [] },
  reducers: {},
  extraReducers: {
    [fetchMenu.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchMenu.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMess = null;
      state.menusArray = action.payload;
    },
    [fetchMenu.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMess = action.error ? action.error.message : "Fetch failed";
    },
  },
});

export const menusReducer = menusSlice.reducer;
