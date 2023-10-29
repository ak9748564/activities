import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    items: [],
    totalItems: 0,
    currentPage: 1,
    itemsPerPage: 100,
    currentItems: [],
  },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    setTotalItems: (state, action) => {
      state.totalItems = parseInt(action.payload);
    },
    setItemsPerPage: (state, action) => {
      state.itemsPerPage = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setCurrentItems: (state, action) => {
      state.currentItems = action.payload;
    },
    setDefault: (state) => {
      state.items = [];
      state.currentItems = [];
      state.currentPage = 1;
    },
  },
});

export const {
  setItems,
  setDefault,
  setTotalItems,
  setCurrentPage,
  setItemsPerPage,
  setCurrentItems,
} = paginationSlice.actions;

export default paginationSlice.reducer;