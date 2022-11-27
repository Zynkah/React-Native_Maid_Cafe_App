import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../shared/baseUrl";

export const fetchBanquets = createAsyncThunk(
  "banquets/fetchBanquets",
  async () => {
    const response = await fetch(baseUrl + "banquets");
    return response.json();
  }
);

const promotionsSlice = createSlice({
  name: "banquets",
  initialState: { isLoading: true, errMess: null, banquetsArray: [] },
  reducers: {},
  extraReducers: {
    [fetchBanquets.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchBanquets.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMess = null;
      state.promotionsArray = action.payload;
    },
    [fetchBanquets.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMess = action.error ? action.error.message : "Fetch failed";
    },
  },
});

export const banquetsReducer = banquetsSlice.reducer;
