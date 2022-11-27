import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../shared/baseUrl";

export const fetchMenus = createAsyncThunk("menus/fetchMenus", async () => {
  const response = await fetch(baseUrl + "menus");
  return response.json();
});

const menusSlice = createSlice({
  name: "menus",
  initialState: { isLoading: true, errMess: null, menusArray: [] },
  reducers: {},
  extraReducers: {
    [fetchMenus.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchMenus.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMess = null;
      state.menusArray = action.payload;
    },
    [fetchMenus.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMess = action.error ? action.error.message : "Fetch failed";
    },
  },
});

export const menusReducer = menusSlice.reducer;
