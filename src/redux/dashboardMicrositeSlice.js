import { createSlice } from '@reduxjs/toolkit';

const dashboardMicrositeSlice = createSlice({
    name: "dashboardMicrosite",
    initialState:{
        refresh:false,
        error:'',
        pending:false,
        dashboardMicrositeData:[],
        dashboardMicrositeObj:{},
        dashboardTotalMicrosite:{}
    },
    reducers:{
        setData:(state,action)=>{
            if(action.payload !== undefined){
                if(action.payload.length !==0){
                    state.dashboardMicrositeData = action.payload
                    // secureLocalStorage.setItem('dashboardMicrositeData',state.dashboardMicrositeData)
                    const microObj = {};const totalMicrosite ={};
            
                    state?.dashboardMicrositeData?.forEach((i) => {

                        microObj[i.Agent] ? microObj[i.Agent].push(i) : microObj[i.Agent] = [i]
                    
                        totalMicrosite[i.Agent] ? 
                        (totalMicrosite[i.Agent]['today'] ? 
                        totalMicrosite[i.Agent]['today'] = totalMicrosite[i.Agent]['today'] + Number(i.Today) : 
                        totalMicrosite[i.Agent] = {...totalMicrosite[i.Agent],'today' : Number(i.Today)}) : 
                        totalMicrosite[i.Agent] = {...totalMicrosite[i.Agent],'today' : Number(i.Today)}
                    
                        totalMicrosite[i.Agent] ? 
                        (totalMicrosite[i.Agent]['yesterday'] ? 
                        totalMicrosite[i.Agent]['yesterday'] = 
                        totalMicrosite[i.Agent]['yesterday'] + Number(i.Yesterday) : 
                        totalMicrosite[i.Agent] = {...totalMicrosite[i.Agent],'yesterday' : Number(i.Yesterday)}) : 
                        totalMicrosite[i.Agent] = {...totalMicrosite[i.Agent],'yesterday' : Number(i.Yesterday)}
                    
                        totalMicrosite[i.Agent] ? 
                        (totalMicrosite[i.Agent]['week'] ? 
                        totalMicrosite[i.Agent]['week'] = 
                        totalMicrosite[i.Agent]['week'] + Number(i['This Week']) : 
                        totalMicrosite[i.Agent] = {...totalMicrosite[i.Agent],'week' : Number(i['This Week'])}) :
                        totalMicrosite[i.Agent] = {...totalMicrosite[i.Agent],'week' : Number(i['This Week'])}
                    
                        totalMicrosite[i.Agent] ? 
                        (totalMicrosite[i.Agent]['month'] ? 
                        totalMicrosite[i.Agent]['month'] = 
                        totalMicrosite[i.Agent]['month'] + Number(i['This Month']) : 
                        totalMicrosite[i.Agent] = {...totalMicrosite[i.Agent],'month' : Number(i['This Month'])}) : 
                        totalMicrosite[i.Agent] = {...totalMicrosite[i.Agent],'month' : Number(i['This Month'])}
                    
                        totalMicrosite[i.Agent] ? 
                        (totalMicrosite[i.Agent]['year'] ? 
                        totalMicrosite[i.Agent]['year'] = 
                        totalMicrosite[i.Agent]['year'] + Number(i['This Year']) :
                        totalMicrosite[i.Agent] = {...totalMicrosite[i.Agent],'year' : Number(i['This Year'])}) :
                        totalMicrosite[i.Agent] = {...totalMicrosite[i.Agent],'year' : Number(i['This Year'])}
                    
                        totalMicrosite[i.Agent] ? 
                        (totalMicrosite[i.Agent]['all'] ?
                        totalMicrosite[i.Agent]['all'] = 
                        totalMicrosite[i.Agent]['all'] + Number(i['All']) :
                        totalMicrosite[i.Agent] = {...totalMicrosite[i.Agent],'all' : Number(i['All'])}) :
                        totalMicrosite[i.Agent] = {...totalMicrosite[i.Agent],'all' : Number(i['All'])}
                    
                        totalMicrosite[i.Agent] ? 
                        (totalMicrosite[i.Agent]['spam'] ?
                        totalMicrosite[i.Agent]['spam'] =
                        totalMicrosite[i.Agent]['spam'] + Number(i['All Spam']) :
                        totalMicrosite[i.Agent] = {...totalMicrosite[i.Agent],'spam' : Number(i['All Spam'])}) :
                        totalMicrosite[i.Agent] = {...totalMicrosite[i.Agent],'spam' : Number(i['All Spam'])}                
                    })
                    state.dashboardMicrositeObj = microObj;
                    state.dashboardTotalMicrosite = totalMicrosite;
                }
            }            
        }
    }
})

export const { setData } = dashboardMicrositeSlice.actions;
export default dashboardMicrositeSlice.reducer; 