import { configureStore } from '@reduxjs/toolkit';
import { winesReducer } from '../features/wine/winesSlice';
import { promotionsReducer } from '../features/promotions/promotionsSlice';
import { reviewsReducer } from '../features/reviews/reviewsSlice';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    wines: winesReducer,
    reviews: reviewsReducer,
    promotions: promotionsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
