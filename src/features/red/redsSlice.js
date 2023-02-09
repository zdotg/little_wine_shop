import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/shared/baseUrl';
import { mapImageURL } from '../../utils/mapImageURL';

export const fetchReds = createAsyncThunk(
    'reds/fetchReds',
    async () => {
        const response = await fetch(baseUrl + 'reds');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
);


const initialState = {
    redsArray: [],
    isLoading: true,
    errMsg: ''
};

const redsSlice = createSlice({
    name: 'reds',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchReds.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchReds.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.redsArray = mapImageURL(action.payload);
        },
        [fetchReds.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const redsReducer = redsSlice.reducer;

export const selectAllReds = (state) => {
  return {
    redList: state.reds.redsArray,
    isLoading: state.reds.isLoading,
    errMsg: state.reds.errMsg
  }
};

export const selectRedById = (id) => (state) => {
  return state.reds.redsArray.find(
      (red) => red.id === parseInt(id)
  );
};

export const selectFeaturedRed = (state) => {
    return {
        featuredItem: state.reds.redsArray.find(
            (red) => red.featured
        ),
        isLoading: state.reds.isLoading,
        errMsg: state.reds.errMsg
    };
};
