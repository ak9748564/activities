import {createSlice} from '@reduxjs/toolkit';

const spamDeleteSlice = createSlice({
    name:"spamDelete",
    initialState:{
        actions:false,
        spamDeleteFacebookArr:[],
        spamDeleteMicrositesArr:[],
        spamDeleteGoogleformsArr:[],
    },
    reducers:{       
        setActions : (state,action) => {
            state.actions = action.payload
        },
        setSpamDeleteFacebookArr : (state,action) => {
            state.spamDeleteFacebookArr.push(action.payload)
        },
        setSpamDeleteMicrositesArr : (state,action) => {
            state.spamDeleteMicrositesArr.push(action.payload)
        },
        setSpamDeleteGoogleformsArr : (state,action) => {
            state.spamDeleteGoogleformsArr.push(action.payload)
        },
    }
})

export const {
    setActions,
    setSpamDeleteFacebookArr,
    setSpamDeleteMicrositesArr,
    setSpamDeleteGoogleformsArr,
} = spamDeleteSlice.actions;
export default spamDeleteSlice.reducer;