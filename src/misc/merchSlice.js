import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../app/shared/baseUrl';
import { mapImageURL } from '../utils/mapImageURL';

export const fetchMerch = createAsyncThunk(
    'merch/fetchMerch',
    async () => {
        const response = await fetch(baseUrl + 'merch');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
);


const initialState = {
    merchArray: [],
    isLoading: true,
    errMsg: ''
};

const merchSlice = createSlice({
    name: 'merch',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchMerch.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchMerch.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.merchArray = mapImageURL(action.payload);
        },
        [fetchMerch.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const merchReducer = merchSlice.reducer;

export const selectAllMerch = (state) => {
  return {
    merchList: state.merch.merchArray,
    isLoading: state.merch.isLoading,
    errMsg: state.merch.errMsg
  }
};

export const selectMerchById = (id) => (state) => {
  return state.merch.merchArray.find(
      (merch) => merch.id === parseInt(id)
  );
};

export const selectFeaturedMerch = (state) => {
    return {
        featuredItem: state.merch.merchArray.find(
            (merch) => merch.featured
        ),
        isLoading: state.merch.isLoading,
        errMsg: state.merch.errMsg
    };
};
