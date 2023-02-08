import baseSlice from './baseSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../shared/baseUrl';
import { mapImageURL } from '../../utils/mapImageURL';

const fetchSkinContacts = createAsyncThunk(
  'reds/fetchSkincontacts',
  async (arg, thunkAPI) => {
    try {
      const response = await fetch(`${baseUrl}/skincontacts`);
      return response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


const skincontactsSlice = baseSlice.extend({
  name: 'skincontacts',
  extraReducers: {
    [fetchSkincontacts.fulfilled]: (state, action) => {
      state.data = action.payload.map(mapImageURL);
    }
  }
});

export default skincontactsSlice.reducer;
export const { getSkincontactsStart, getSkincontactsSuccess, getSkincontactsFailure } = skincontactsSlice.actions;
export { fetchSkinContacts };
