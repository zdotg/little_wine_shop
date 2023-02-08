import baseSlice from './baseSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../shared/baseUrl';
import { mapImageURL } from '../../utils/mapImageURL';

const fetchRoses = createAsyncThunk(
  'roses/fetchRoses',
  async (arg, thunkAPI) => {
    try {
      const response = await fetch(`${baseUrl}/roses`);
      return response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


const rosesSlice = baseSlice.extend({
  name: 'roses',
  extraReducers: {
    [fetchRoses.fulfilled]: (state, action) => {
      state.data = action.payload.map(mapImageURL);
    }
  }
});

export default rosesSlice.reducer;
export const { getRosesStart, getRosesSuccess, getRosesFailure } = rosesSlice.actions;
export { fetchRoses };
