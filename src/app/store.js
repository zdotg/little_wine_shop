import { configureStore } from '@reduxjs/toolkit';
import { redsReducer } from '../features/red/redsSlice';
import { promotionsReducer } from '../features/promotions/promotionsSlice';
import { reviewsReducer } from '../features/reviews/reviewsSlice';
import logger from 'redux-logger';
import { whitesReducer } from '../features/white/whitesSlice';
import { skincontactsReducer } from '../features/skincontact/skincontactsSlice';

export const store = configureStore({
  reducer: {
    reds: redsReducer,
    whites: whitesReducer,
    skincontacts: skincontactsReducer,
    reviews: reviewsReducer,
    promotions: promotionsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
