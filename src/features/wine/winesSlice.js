import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/shared/baseUrl';
import { mapImageURL } from '../../utils/mapImageURL';

const fetchWines = createAsyncThunk(
    'wines/fetchWines',
    async () => {
      const response = await fetch(baseUrl);
      const data = await response.json();
      return data;
    }
  );

const winesSlice = createSlice({
    name: 'wines',
    initialState: {
        wines: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: {
        [fetchWines.pending]: (state) => {
        state.status = 'loading';
        },
        [fetchWines.fulfilled]: (state, action) => {
        state.status = 'succeeded';
        state.wines = action.payload.map(mapImageURL);
        },
        [fetchWines.rejected]: (state, action) => {
        state.status = 'failed';
        state.error = action.error;
        },
    },
});

export default winesSlice.reducer;
export { fetchWines };
