import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/shared/baseUrl';
import { mapImageURL } from '../../utils/mapImageURL';

export const fetchSparklings = createAsyncThunk(
    'sparklings/fetchSparklings',
    async () => {
        const response = await fetch(baseUrl + 'sparklings');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
);


const initialState = {
    sparklingsArray: [],
    isLoading: true,
    errMsg: ''
};

const sparklingsSlice = createSlice({
    name: 'sparklings',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchSparklings.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchSparklings.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.sparklingsArray = mapImageURL(action.payload);
        },
        [fetchSparklings.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const sparklingsReducer = sparklingsSlice.reducer;

export const selectAllSparklings = (state) => {
    return {
        sparklingList: state.sparklings.sparklingsArray,
        isLoading: state.sparklings.isLoading,
        errMsg: state.sparklings.errMsg
      }
};

export const selectSparklingById = (id) => (state) => {
  return state.sparklings.sparklingsArray.find(
      (sparkling) => sparkling.id === parseInt(id)
  );
};

export const selectFeaturedSparkling = (state) => {
    return {
        featuredItem: state.sparklings.sparklingsArray.find(
            (sparkling) => sparkling.featured
        ),
        isLoading: state.sparklings.isLoading,
        errMsg: state.sparklings.errMsg
    };
};
