import { baseUrl } from "../../app/shared/baseUrl";
import { mapImageURL } from "../../utils/mapImageURL";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchWines = createAsyncThunk("wines/fetchWines", async () => {
  const response = await fetch(`${baseUrl}/wines`);
  const data = await response.json();
  const wines = data.map((wine) => ({
    ...wine,
    image: mapImageURL(wine.image),
  }));
  return wines;
});

export const fetchSelectedWine = createAsyncThunk(
  "wines/fetchSelectedWine",
  async (id) => {
    const response = await fetch(`${baseUrl}/wines/${id}`);
    const data = await response.json();
    const selectedWine = {
      ...data,
      image: mapImageURL(data.image),
    };
    return selectedWine;
  }
);

const winesSlice = createSlice({
  name: "wines",
  initialState: {
    wines: [],
    selectedWine: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWines.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWines.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.wines = action.payload;
      })
      .addCase(fetchWines.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchSelectedWine.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSelectedWine.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selectedWine = action.payload;
      })
      .addCase(fetchSelectedWine.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const winesReducer = winesSlice.reducer;
