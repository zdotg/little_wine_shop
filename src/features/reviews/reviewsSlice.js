import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/shared/baseUrl';
import { mapImageURL } from '../../utils/mapImageURL';

export const fetchReviews = createAsyncThunk(
    'reviews/fetchReviews',
    async () => {
        const response = await fetch(baseUrl + 'reviews');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
);

const initialState = {
    reviewsArray: [],
    isLoading: true,
    errMsg: ''
};

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchReviews.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchReviews.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.reviewsArray = mapImageURL(action.payload);
        },
        [fetchReviews.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const reviewsReducer = reviewsSlice.reducer;

export const selectReviewsByWineId = (state) => {
    return {
        featuredItem: state.reviews.reviewsArray.find(
            (review) => review.featured
        ),
        isLoading: state.reviews.isLoading,
        errMsg: state.reviews.errMsg
    };
};