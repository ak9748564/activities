import {createSlice} from '@reduxjs/toolkit';
import daysjs from 'dayjs';
import 'dayjs/locale/en-in';
           
const startDate = daysjs().locale('en-in').format('YYYY-MM-DD');
const endDate = daysjs().locale('en-in').format('YYYY-MM-DD');

const filtersSlice = createSlice({
    name:"filters",
    initialState:{
        refresh:false,
        isApiFilterActive: false,
        isLocalFilterActive: false,
        isActive: false,
        agent:'',
        project:'',
        daterange:{startDate,endDate},
        spam:0,
        delete:0,
        duplicate:0,
        searchQuery:"",
        searchParam:"",
        filteredDataFor: 'microsites',
        resultArr:[],
        micrositesResultArr:[],
        facebookResultArr:[],
        googleformsResultArr:[],
        memberListResultArr:[],
        fetchArr:[],
        picklist:[],
    },
    reducers:{       
        setFiltersIsActive: (state,action) => {
            state.isActive = action.payload
        },
        setApiFilterIsActive: (state,action) => {
            state.isApiFilterActive = action.payload
        },
        setLocalFilterIsActive: (state,action) => {
            state.isLocalFilterActive = action.payload
        },
        setFiltersAgent: (state,action) => {
            state.agent = action.payload
        },
        setFiltersProject: (state,action) => {
            state.project = action.payload
        },
        setFiltersDateRange: (state,action) => {   
            // console.log(action.payload)        
            state.daterange = action.payload;
        },        
        setSpam: (state,action) => {          
            state.spam = action.payload;
        },        
        setDelete: (state,action) => {         
            state.delete = action.payload;
        },        
        setDuplicate: (state,action) => {         
            state.duplicate = action.payload;
        },        
        setFiltersSearchQuery: (state,action) => {
            state.searchQuery = action.payload
        },
        setFiltersSearchParam: (state,action) => {
            state.searchParam = action.payload
        },
        setFilteredDataFor: (state,action) => {
            state.filteredDataFor = action.payload
        },
        setFiltersMicrositesResultArr: (state,action) => {
            state.micrositesResultArr = action.payload
        },
        setFiltersFacebookResultArr: (state,action) => {
            state.facebookResultArr = action.payload
        },
        setFiltersGoogleformsResultArr: (state,action) => {
            state.googleformsResultArr = action.payload
        },
        setFiltersMemberListResultArr: (state,action) => {
            state.memberListResultArr = action.payload
        },
        setFiltersResultArr: (state,action) => {
            state.resultArr = action.payload
        },
        setFiltersFetchArr: (state,action) => {
            state.fetchArr = action.payload
        },
        setPicklist: (state,action) => {
            state.picklist = action.payload
        },
        setFiltersRefresh: (state,action) => {
            state.refresh = action.payload
        },
    }
})

export const {
    setFiltersIsActive,
    setApiFilterIsActive,
    setLocalFilterIsActive,
    setFiltersAgent,
    setFiltersProject,
    setFiltersDateRange,
    setSpam,
    setDelete,
    setDuplicate,
    setFiltersSearchQuery,
    setFiltersSearchParam,
    setFilteredDataFor,
    setFiltersResultArr,
    setFiltersMicrositesResultArr,
    setFiltersFacebookResultArr,
    setFiltersGoogleformsResultArr,
    setFiltersMemberListResultArr,
    setFiltersFetchArr,
    setPicklist,
    setFiltersRefresh
} = filtersSlice.actions;
export default filtersSlice.reducer;