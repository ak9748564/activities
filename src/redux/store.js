import { configureStore } from "@reduxjs/toolkit";

import modalReducer from './modalSlice';
import refreshReducer from "./refreshSlice";
import filtersReducer from "./filtersSlice";
import queriesReducer from './queriesSlice';
import sidebarReducer from './sidebarSlice';
import moreTableReducer from './moreTableSlice';
import dashboardReducer from './dashboardSlice';
import paginationReducer from './paginationSlice';
import spamDeleteReducer from './spamDeleteSlice';
import dashboardFacebookReducer from './dashboardFacebookSlice';
import dashboardMicrositeReducer from './dashboardMicrositeSlice';
import micrositesReducer from "./micrositesSlice";
import facebookReducer from './facebookSlice';
import activityGroupReducer from './activityGroupSlice';

const store = configureStore({
    reducer:{
        modal: modalReducer,
        filters: filtersReducer,
        sidebar: sidebarReducer,
        queries: queriesReducer,
        refresh: refreshReducer,
        facebook: facebookReducer,
        dashboard: dashboardReducer,
        moreTable: moreTableReducer,
        spamDelete: spamDeleteReducer,
        pagination: paginationReducer,
        microsites: micrositesReducer,
        dashboardFacebook: dashboardFacebookReducer,
        dashboardMicrosite: dashboardMicrositeReducer,
        activityGroup: activityGroupReducer
    }
});

export default store;