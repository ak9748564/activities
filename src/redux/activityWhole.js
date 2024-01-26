import { createSlice } from '@reduxjs/toolkit';

const activityWhole = createSlice({
    name: 'activityWhole',
    initialState: {
        activityGroup: '',
        activities: [],
    },
    reducers: {
        setActivityGroup: (state,action) => {
            state.activityGroup = action.payload
        },
        setActivities: (state,action) => {
            state.activities = action.payload
        }
    }
})

export const { setActivityGroup, setActivities } = activityWhole.actions;
export default activityWhole.reducer;