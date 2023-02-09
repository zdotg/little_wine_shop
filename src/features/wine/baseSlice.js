
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/shared/baseUrl';
import { mapImageURL } from '../../utils/mapImageURL';

export const fetchWines = createAsyncThunk(
    'wines/fetchWines',
    async () => {
        const response = await fetch(baseUrl + 'wines');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
);


const initialState = {
    winesArray: [],
    isLoading: true,
    errMsg: ''
};

const winesSlice = createSlice({
    name: 'wines',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchWines.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchWines.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.winesArray = mapImageURL(action.payload);
        },
        [fetchWines.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const winesReducer = winesSlice.reducer;

// export const selectAllWines = (state) => {
//   return (
//     state.reds.redsArray,
//     state.whites.whitesArray,
//     state.roses.rosesArray,
//     state.skincontacts.skincontactsArray
//   )
// };

export const selectWineById = (id) => (state) => {
  return state.wines.winesArray.find(
      (wine) => wine.id === parseInt(id)
  );
};



