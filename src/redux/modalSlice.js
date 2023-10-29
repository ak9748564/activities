import {createSlice} from '@reduxjs/toolkit';

const modalSlice = createSlice({
    name:"modal",
    initialState:{
        calendarModal:false,
        filterModal:false,
        spamModal:false,
        deleteModal:false
    },
    reducers:{       
        setCalendarModal: (state,action) => {
            state.calendarModal = action.payload
        },
        setFilterModal: (state,action) => {
            state.filterModal = action.payload
        },
        setSpamModal: (state,action) => {
            state.spamModal = action.payload
        },
        setDeleteModal: (state,action) => {
            state.deleteModal = action.payload
        }
    }
})

export const {
    setCalendarModal,
    setFilterModal,
    setSpamModal,
    setDeleteModal
} = modalSlice.actions;
export default modalSlice.reducer;