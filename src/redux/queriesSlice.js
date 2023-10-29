import { createSlice } from '@reduxjs/toolkit';

const queriesSlice = createSlice({
    name: "queries",
    initialState:{
        tab:"microsites",
        refresh:false,
        loading:false,
        selectedItemsCount:0,
        microsites: [],
        facebook: [],
        googleforms: [],
    },
    reducers:{
        setTab: (state,action) => {
            state.tab = action.payload;
        },
        setUrl: (state,action)  => {
            state.url = action.payload;
        },
        setRefresh: (state,action) => {
            state.refresh = action.payload;
        },
        setSelectedItemsCount: (state,action) => {
            state.selectedItemsCount = action.payload;
        },
        setMicrosites: (state,action) => {
            state.microsites = action.payload;
        },
        setFacebook: (state,action) => {
            state.facebook = action.payload;
        },
        setGoogleforms: (state,action) => {
            state.googleforms = action.payload;
        },
        setLoading: (state,action) => {
            state.loading = action.payload;
        },
    }
})

export const {
    setTab,
    setUrl,
    setRefresh,
    setMicrosites,
    setFacebook,
    setGoogleforms,
    setLoading,
    setSelectedItemsCount
} = queriesSlice.actions;

export default queriesSlice.reducer;