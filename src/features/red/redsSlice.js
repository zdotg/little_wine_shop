import baseSlice from './baseSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../shared/baseUrl';
import { mapImageURL } from '../../utils/mapImageURL';

const fetchReds = createAsyncThunk(
  'reds/fetchReds',
  async (arg, thunkAPI) => {
    try {
      const response = await fetch(`${baseUrl}/reds`);
      return response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


const redsSlice = baseSlice.extend({
  name: 'reds',
  extraReducers: {
    [fetchReds.fulfilled]: (state, action) => {
      state.data = action.payload.map(mapImageURL);
    }
  }
});

export default redsSlice.reducer;
export const { getRedsStart, getRedsSuccess, getRedsFailure } = redsSlice.actions;
export { fetchReds };
