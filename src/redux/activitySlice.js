import { createSlice } from "@reduxjs/toolkit";

const activitySlice = createSlice({
    name: 'activity',
    initialState: {
        activityGroupSelected: '',
        activityGroups:[]
    },
    reducers:{
        setActivityGroupSelected: (state,action) => {
            state.activityGroupSelected = action.payload
        },
        setActivityGroups: (state,action) => {
            state.activityGroups = action.payload
        }
    }
})

export const { 
    setActivityGroupSelected,
    setActivityGroups, 
} = activitySlice.actions;
export default activitySlice.reducer;