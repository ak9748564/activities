import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
    name:'dashboard',
    initialState:{
        todayTotalMicrosite: 0,
        todayTotalFacebook: 0,
        spamTotalMicrosite: 0,
        spamTotalFacebook: 0,
        loadingM: false,
        loadingF: false
    },
    reducers:{
        setTodayTotalMicrosite: (state,action) => {
            state.todayTotalMicrosite = action.payload
        },
        setTodayTotalFacebook: (state,action) => {
            state.todayTotalFacebook = action.payload
        },
        setSpamTotalMicrosite: (state,action) => {
            state.spamTotalMicrosite = action.payload
        },
        setSpamTotalFacebook: (state,action) => {
            state.spamTotalFacebook = action.payload
        },
        setLoadingM: (state,action) => {
            state.loadingM = action.payload
        },
        setLoadingF: (state,action) => {
            state.loadingF = action.payload
        }
    }
})

export const {
    setTodayTotalMicrosite,
    setTodayTotalFacebook,
    setSpamTotalMicrosite,
    setSpamTotalFacebook,
    setLoadingM,
    setLoadingF
} = dashboardSlice.actions;
export default dashboardSlice.reducer;