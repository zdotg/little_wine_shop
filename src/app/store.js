import { configureStore } from '@reduxjs/toolkit';
import { winesReducer } from '../features/wine/winesSlice';
import { promotionsReducer } from '../features/promotions/promotionsSlice';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    wines: winesReducer,
    promotions: promotionsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
