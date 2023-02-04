import { configureStore } from '@reduxjs/toolkit';
import { redsReducer } from '../features/wine/redsSlice';
import { promotionsReducer } from '../features/promotions/promotionsSlice';
import { reviewsReducer } from '../features/reviews/reviewsSlice';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    reds: redsReducer,
    reviews: reviewsReducer,
    promotions: promotionsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
