import { createSlice } from '@reduxjs/toolkit';

const activityGroupSlice = createSlice({
    name: 'activityGroup',
    initialState:{
        activityGroupSelected: ''
    },
    reducers:{
        setActivityGroupSelected: (state,action) => {
            state.activityGroupSelected = action.payload
        }
    }
})

export const { setActivityGroupSelected } = activityGroupSlice.actions;
export default activityGroupSlice.reducer;