import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { redsReducer } from '../features/red/redsSlice';
import { whitesReducer } from '../features/white/whitesSlice';
import { skincontactsReducer } from '../features/skincontact/skincontactsSlice';
import { rosesReducer } from '../features/rose/rosesSlice';
import { promotionsReducer } from '../features/promotions/promotionsSlice';
import { winesReducer } from '../features/wine/baseSlice';


export const store = configureStore({
  reducer: {
    wine: winesReducer,
    reds: redsReducer,
    whites: whitesReducer,
    skincontacts: skincontactsReducer,
    roses: rosesReducer,
    promotions: promotionsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
