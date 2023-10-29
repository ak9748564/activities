import { createSlice } from '@reduxjs/toolkit';

const dashboardFacebookSlice = createSlice({
    name: "dashboardFacebook",
    initialState:{
        refresh:false,
        error:'',
        pending:false,
        dashboardFacebookData:{},
        dashboardFacebookObj:{},
        dashboardTotalFacebook:{}
    },
    reducers:{
        setData:(state,action)=>{
            if(action.payload !== undefined){
                if(action.payload.length !==0){
                    state.dashboardFacebookData = action.payload
                    // secureLocalStorage.setItem('dashboardFacebookData',state.dashboardFacebookData)
                    const facebookObj = {};const totalFacebook ={};
            
                    state?.dashboardFacebookData?.forEach((i) => {
                        facebookObj[i.Agent] ? facebookObj[i.Agent].push(i) : facebookObj[i.Agent] = [i]
                    
                        totalFacebook[i.Agent] ? 
                        (totalFacebook[i.Agent]['today'] ? 
                        totalFacebook[i.Agent]['today'] = totalFacebook[i.Agent]['today'] + Number(i.Today) : 
                        totalFacebook[i.Agent] = {...totalFacebook[i.Agent],'today' : Number(i.Today)}) : 
                        totalFacebook[i.Agent] = {...totalFacebook[i.Agent],'today' : Number(i.Today)}
                    
                        totalFacebook[i.Agent] ? 
                        (totalFacebook[i.Agent]['yesterday'] ? 
                        totalFacebook[i.Agent]['yesterday'] = 
                        totalFacebook[i.Agent]['yesterday'] + Number(i.Yesterday) : 
                        totalFacebook[i.Agent] = {...totalFacebook[i.Agent],'yesterday' : Number(i.Yesterday)}) : 
                        totalFacebook[i.Agent] = {...totalFacebook[i.Agent],'yesterday' : Number(i.Yesterday)}
                    
                        totalFacebook[i.Agent] ? 
                        (totalFacebook[i.Agent]['week'] ? 
                        totalFacebook[i.Agent]['week'] = 
                        totalFacebook[i.Agent]['week'] + Number(i['This Week']) : 
                        totalFacebook[i.Agent] = {...totalFacebook[i.Agent],'week' : Number(i['This Week'])}) :
                        totalFacebook[i.Agent] = {...totalFacebook[i.Agent],'week' : Number(i['This Week'])}
                    
                        totalFacebook[i.Agent] ? 
                        (totalFacebook[i.Agent]['month'] ? 
                        totalFacebook[i.Agent]['month'] = 
                        totalFacebook[i.Agent]['month'] + Number(i['This Month']) : 
                        totalFacebook[i.Agent] = {...totalFacebook[i.Agent],'month' : Number(i['This Month'])}) : 
                        totalFacebook[i.Agent] = {...totalFacebook[i.Agent],'month' : Number(i['This Month'])}
                    
                        totalFacebook[i.Agent] ? 
                        (totalFacebook[i.Agent]['year'] ? 
                        totalFacebook[i.Agent]['year'] = 
                        totalFacebook[i.Agent]['year'] + Number(i['This Year']) :
                        totalFacebook[i.Agent] = {...totalFacebook[i.Agent],'year' : Number(i['This Year'])}) :
                        totalFacebook[i.Agent] = {...totalFacebook[i.Agent],'year' : Number(i['This Year'])}
                    
                        totalFacebook[i.Agent] ? 
                        (totalFacebook[i.Agent]['all'] ?
                        totalFacebook[i.Agent]['all'] = 
                        totalFacebook[i.Agent]['all'] + Number(i['All']) :
                        totalFacebook[i.Agent] = {...totalFacebook[i.Agent],'all' : Number(i['All'])}) :
                        totalFacebook[i.Agent] = {...totalFacebook[i.Agent],'all' : Number(i['All'])}
                    
                        totalFacebook[i.Agent] ? 
                        (totalFacebook[i.Agent]['spam'] ?
                        totalFacebook[i.Agent]['spam'] =
                        totalFacebook[i.Agent]['spam'] + Number(i['All Spam']) :
                        totalFacebook[i.Agent] = {...totalFacebook[i.Agent],'spam' : Number(i['All Spam'])}) :
                        totalFacebook[i.Agent] = {...totalFacebook[i.Agent],'spam' : Number(i['All Spam'])}                
                    })
                    state.dashboardFacebookObj = facebookObj;
                    state.dashboardTotalFacebook = totalFacebook;
                }
            }            
        }
    }
})
export const { setData } = dashboardFacebookSlice.actions;
export default dashboardFacebookSlice.reducer;