import { createSlice } from '@reduxjs/toolkit';

const baseSlice = createSlice({
  name: 'wines',
  initialState: {
    data: [],
    loading: false,
    error: null
  },
  reducers: {
    getWinesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getWinesSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    getWinesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

const { actions, reducer } = baseSlice;

export const { getWinesStart, getWinesSuccess, getWinesFailure } = actions;
export default reducer;
