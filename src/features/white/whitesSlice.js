import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../app/shared/baseUrl";
import { mapImageURL } from "../../utils/mapImageURL";

export const fetchWhites = createAsyncThunk("whites/fetchWhites", async () => {
  const response = await fetch(baseUrl + "whites");
  if (!response.ok) {
    return Promise.reject("Unable to fetch, status: " + response.status);
  }
  const data = await response.json();
  return data;
});

const initialState = {
  whitesArray: [],
  isLoading: true,
  errMsg: "",
};

const whitesSlice = createSlice({
  name: "whites",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchWhites.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchWhites.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMsg = "";
      state.whitesArray = mapImageURL(action.payload);
    },
    [fetchWhites.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMsg = action.error ? action.error.message : "Fetch failed";
    },
  },
});

export const whitesReducer = whitesSlice.reducer;

export const selectAllWhites = (state) => {
  return {
    whiteList: state.whites.whitesArray,
    isLoading: state.whites.isLoading,
    errMsg: state.whites.errMsg,
  };
};

export const selectWhiteById = (id) => (state) => {
  return state.whites.whitesArray.find((white) => white.id === parseInt(id));
};

export const selectFeaturedWhite = (state) => {
  return {
    featuredItem: state.whites.whitesArray.find((white) => white.featured),
    isLoading: state.whites.isLoading,
    errMsg: state.whites.errMsg,
  };
};
