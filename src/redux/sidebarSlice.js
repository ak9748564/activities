import { createSlice } from '@reduxjs/toolkit';

import secureLocalStorage from 'react-secure-storage';

const page = secureLocalStorage.getItem('page') === null ? 'dashboard' : secureLocalStorage.getItem('page');

const sidebarSlice = createSlice({
    name:'sidebar',
    initialState:{
        page: page,
        sidebarMobile: ''
    },
    reducers:{
        setPage: (state,action) => {
            state.page = action.payload;
            secureLocalStorage.setItem('page', action.payload);
        },
        setSidebarMobile: (state,action) => {
            state.sidebarMobile = action.payload
        }
    }
})

export const { setPage, setSidebarMobile } = sidebarSlice.actions;
export default sidebarSlice.reducer;