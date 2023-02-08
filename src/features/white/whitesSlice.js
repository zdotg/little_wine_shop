import baseSlice from './baseSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../shared/baseUrl';
import { mapImageURL } from '../../utils/mapImageURL';

const fetchWhites = createAsyncThunk(
  'whites/fetchWhites',
  async (arg, thunkAPI) => {
    try {
      const response = await fetch(`${baseUrl}/whites`);
      return response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


const whitesSlice = baseSlice.extend({
  name: 'whites',
  extraReducers: {
    [fetchWhites.fulfilled]: (state, action) => {
      state.data = action.payload.map(mapImageURL);
    }
  }
});

export default whitesSlice.reducer;
export const { getWhitesStart, getWhitesSuccess, getWhitesFailure } = whitesSlice.actions;
export { fetchWhites };
