import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/shared/baseUrl';
import { mapImageURL } from '../../utils/mapImageURL';

export const fetchSkinContacts = createAsyncThunk(
    'skincontacts/fetchSkinContacts',
    async () => {
        const response = await fetch(baseUrl + 'skincontacts');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        } 
        const data = await response.json();
        return data;
    }
);

const initialState = {
    skincontactsArray: [],
    isLoading: true,
    errMsg: ''
};

const skincontactsSlice = createSlice({
    name: 'skincontacts',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchSkinContacts.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchSkinContacts.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.skincontactsArray = mapImageURL(action.payload);
        },
        [fetchSkinContacts.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const skincontactsReducer = skincontactsSlice.reducer;

export const selectAllSkincontacts = (state) => {
    return state.skincontacts.skincontactsArray;
};

export const selectSkincontactById = (id) => (state) => {
    return state.skincontacts.skincontactsArray.find(
        (skincontact) => skincontact.id === parseInt(id)
    );
};

export const selectFeaturedSkincontact = (state) => {
    return {
        featuredItem: state.skincontacts.skincontactsArray.find(
            (skincontact) => skincontact.featured
        ),
        isLoading: state.skincontacts.isLoading,
        errMsg: state.skincontacts.errMsg
    };
};
