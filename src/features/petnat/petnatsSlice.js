import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/shared/baseUrl';
import { mapImageURL } from '../../utils/mapImageURL';

export const fetchPetnats = createAsyncThunk(
    'petnats/fetchPetnats',
    async () => {
        const response = await fetch(baseUrl + 'petnats');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
);


const initialState = {
    petnatsArray: [],
    isLoading: true,
    errMsg: ''
};

const petnatsSlice = createSlice({
    name: 'petnats',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPetnats.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchPetnats.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.petnatsArray = mapImageURL(action.payload);
        },
        [fetchPetnats.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const petnatsReducer = petnatsSlice.reducer;

export const selectAllPetnats = (state) => {
  return {
    petnatList: state.petnats.petnatsArray,
    isLoading: state.petnats.isLoading,
    errMsg: state.petnats.errMsg
  }
};

export const selectPetnatById = (id) => (state) => {
  return state.petnats.petnatsArray.find(
      (petnat) => petnat.id === parseInt(id)
  );
};

export const selectFeaturedPetnat = (state) => {
    return {
        featuredItem: state.petnats.petnatsArray.find(
            (petnat) => petnat.featured
        ),
        isLoading: state.petnats.isLoading,
        errMsg: state.petnats.errMsg
    };
};
