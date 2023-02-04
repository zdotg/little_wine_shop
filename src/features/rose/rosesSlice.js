import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/shared/baseUrl';
import { mapImageURL } from '../../utils/mapImageURL';

export const fetchRoses = createAsyncThunk(
    'roses/fetchRoses',
    async () => {
        const response = await fetch(baseUrl + 'roses');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        } 
        const data = await response.json();
        return data;
    }
);

const initialState = {
    rosesArray: [],
    isLoading: true,
    errMsg: ''
};

const rosesSlice = createSlice({
    name: 'roses',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchRoses.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchRoses.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.rosesArray = mapImageURL(action.payload);
        },
        [fetchRoses.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const rosesReducer = rosesSlice.reducer;

export const selectAllRoses = (state) => {
    return state.roses.rosesArray;
};

export const selectRoseById = (id) => (state) => {
    return state.roses.rosesArray.find(
        (rose) => rose.id === parseInt(id)
    );
};

export const selectFeaturedRose = (state) => {
    return {
        featuredItem: state.roses.rosesArray.find(
            (rose) => rose.featured
        ),
        isLoading: state.roses.isLoading,
        errMsg: state.roses.errMsg
    };
};
