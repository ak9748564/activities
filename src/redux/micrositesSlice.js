import { createSlice } from "@reduxjs/toolkit";

const micrositesSlice = createSlice({
    name: 'microsites',
    initialState: {
        initialMobileDataMicrosites: [],
        initialDesktopDataMicrosites: [],
        initialRecordCountMicrosites: 0,
        filteredResultArrMicrosites: [],
        filteredWithSearchQueryMicrosites: '',
        currentPageMicrosites: 1
    },
    reducers: {
        setInitialMobileDataMicrosites: (state,action) => {
            state.initialMobileDataMicrosites = state.initialMobileDataMicrosites.concat(action.payload);
        },
        setInitialDesktopDataMicrosites: (state,action) => {
            state.initialDesktopDataMicrosites = action.payload;
        },
        setInitialRecordCountMicrosites: (state,action) => {
            state.initialRecordCountMicrosites = action.payload
        },
        setFilteredResultArrMicrosites: (state,action) => {
            state.filteredResultArrMicrosites = action.payload;
        },
        setFilteredWithSearchQueryMicrosites: (state,action) => {
            state.filteredWithSearchQueryMicrosites = action.payload
        },
        setCurrentPageMicrosites: (state,action) => {
            state.currentPageMicrosites = action.payload;
        }
    }
})

export const {
    setInitialMobileDataMicrosites,
    setInitialDesktopDataMicrosites,
    setInitialRecordCountMicrosites,
    setFilteredResultArrMicrosites,
    setFilteredWithSearchQueryMicrosites,
    setCurrentPageMicrosites
} = micrositesSlice.actions;
export default micrositesSlice.reducer;