import { createSlice } from "@reduxjs/toolkit";

const facebookSlice = createSlice({
    name: 'facebook',
    initialState: {
        initialMobileDataFacebook: [],
        initialDesktopDataFacebook: [],
        initialRecordCountFacebook:0,
        filteredResultArrFacebook: [],
        filteredWithSearchQueryFacebook: '',
        currentPageFacebook: 1
    },
    reducers: {
        setInitialMobileDataFacebook: (state,action) => {
            state.initialMobileDataFacebook = state.initialMobileDataFacebook.concat(action.payload);
        },
        setInitialDesktopDataFacebook: (state,action) => {
            console.log(action.payload)
            state.initialDesktopDataFacebook = action.payload;
        },
        setInitialRecordCountFacebook: (state,action) => {
            state.initialRecordCountFacebook = action.payload
        },
        setFilteredResultArrFacebook: (state,action) => {
            state.filteredResultArrFacebook = action.payload;
        },
        setFilteredWithSearchQueryFacebook: (state,action) => {
            state.filteredWithSearchQueryFacebook = action.payload
        },
        setCurrentPageFacebook: (state,action) => {
            state.currentPageFacebook = action.payload;
        }
    }
})

export const {
    setInitialMobileDataFacebook,
    setInitialDesktopDataFacebook,
    setInitialRecordCountFacebook,
    setFilteredResultArrFacebook,
    setFilteredWithSearchQueryFacebook,
    setCurrentPageFacebook
} = facebookSlice.actions;
export default facebookSlice.reducer;