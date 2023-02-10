import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/shared/baseUrl';
import { mapImageURL } from '../../utils/mapImageURL';

export const fetchPiquettes = createAsyncThunk(
    'piquettes/fetchPiquettes',
    async () => {
        const response = await fetch(baseUrl + 'piquettes');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
);


const initialState = {
    piquettesArray: [],
    isLoading: true,
    errMsg: ''
};

const piquettesSlice = createSlice({
    name: 'piquettes',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPiquettes.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchPiquettes.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.piquettesArray = mapImageURL(action.payload);
        },
        [fetchPiquettes.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const piquettesReducer = piquettesSlice.reducer;

export const selectAllPiquettes = (state) => {
  return {
    piquetteList: state.piquettes.piquettesArray,
    isLoading: state.piquettes.isLoading,
    errMsg: state.piquettes.errMsg
  }
};

export const selectPiquetteById = (id) => (state) => {
  return state.piquettes.piquettesArray.find(
      (piquette) => piquette.id === parseInt(id)
  );
};

export const selectFeaturedPiquette = (state) => {
    return {
        featuredItem: state.piquettes.piquettesArray.find(
            (piquette) => piquette.featured
        ),
        isLoading: state.piquettes.isLoading,
        errMsg: state.piquettes.errMsg
    };
};
