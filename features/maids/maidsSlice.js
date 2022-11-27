import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../shared/baseUrl";

export const fetchMaids = createAsyncThunk("maids/fetchMaids", async () => {
  const response = await fetch(baseUrl + "maids");
  return response.json();
});

const maidsSlice = createSlice({
  name: "maids",
  initialState: { isLoading: true, errMess: null, maidsArray: [] },
  reducers: {},
  extraReducers: {
    [fetchMaids.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchMaids.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMess = null;
      state.maidsArray = action.payload;
    },
    [fetchMaids.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMess = action.error ? action.error.message : "Fetch failed";
    },
  },
});

export const maidsReducer = maidsSlice.reducer;
