import {createSlice} from '@reduxjs/toolkit';

const refreshSlice = createSlice({
    name:"refresh",
    initialState:{
        refresh:false
    },
    reducers:{       
        setRefresh: (state,action) => {
            state.refresh = action.payload
        },
    }
})

export const { setRefresh } = refreshSlice.actions;
export default refreshSlice.reducer;