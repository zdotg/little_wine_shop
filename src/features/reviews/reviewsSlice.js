import { createSlice } from '@reduxjs/toolkit';
import { REVIEWS } from '../../app/shared/REVIEWS';

const initialState = {
    reviewsArray: REVIEWS
};

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {
        addReview: (state, action) => {
            console.log('addReview action.payload:', action.payload);
            console.log('addReview state.reviewsArray:', state.reviewsArray);
            const newReview = {
                id: state.reviewsArray.length + 1,
                ...action.payload
            };
            state.reviewsArray.push(newReview);
        }
    }
});

export const reviewsReducer = reviewsSlice.reducer;

export const { addReview } = reviewsSlice.actions;

export const selectReviewsByWineId = (wineId) => (state) => {
    return state.reviews.reviewsArray.filter(
        (review) => review.wineId === parseInt(wineId)
    );
};