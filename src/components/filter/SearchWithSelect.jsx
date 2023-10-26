import React from 'react';

import useSWR from 'swr';
import axios from 'axios';
import secureLocalStorage from 'react-secure-storage';
import { useDispatch, useSelector } from 'react-redux';

import { setFiltersProject,setFiltersAgent } from '../../redux/filtersSlice';

import { BASE_URL_NODEJS } from '../../redux/constants';

export default function SearchWithSelect({ type, position, mapping, setMapping }) { 

  const [selectFilter,setSelectFilter] = React.useState(false);
  const [processedData,setProcessedData] = React.useState([]);
  const [initialData,setInitialData] = React.useState([])
  const [query,setQuery] = React.useState('');

  const agent = useSelector(state => state.filters.agent);
  const project = useSelector(state => state.filters.project);
  const tab = useSelector(state => state.queries.tab);

  const dispatch = useDispatch();
  
  const fetcher = (url) => axios.get(url).then(res => res);

  const { data, isLoading, isValidating } = useSWR(
    `${BASE_URL_NODEJS}/dashboard/picklist?pick_list_for=${position === 'more-table' ? 'microsites' : tab}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false, 
    }
  );
// console.log(data)

  React.useEffect(()=>{
    if(data !== undefined){
      setInitialData(data?.data?.data[0])
      setProcessedData(data?.data?.data[0])
    }
  },[data,isLoading,isValidating])
  

  React.useEffect(()=>{
    if(query === ''){
      setSelectFilter(false)
    }else{
      setSelectFilter(true)
    }
  },[query])

  const selectRef = React.useRef();

  React.useEffect(()=>{
    let handler = (e) => {
      if(selectRef.current !== null){
        if(!selectRef.current.contains(e.target)){
          setSelectFilter(false) 
        }else{
          setSelectFilter(true)
        } 
      }              
    }
    document.addEventListener('mousedown',handler)
    return ()=>{
      document.removeEventListener('mousedown',handler)
    }
  },[])
  return (
    <div className='flex h-[32px] border rounded-sm items-center cursor-pointer text-[13px]' ref={selectRef}>
      {
        position === 'more-table' ?  null :
        <p className='h-[32px] px-2 leading-[32px] border-r w-[80px] grow-0 shrink-0'>{type === "agent" ? "Agent" : "Project"}</p>
      }
        
        {
          isLoading || isValidating ? 
          <p className='leading-[32px] px-2'>Loading... Please Wait</p> : 
          <div className='relative w-full'> 
            <input type="search" className='outline-none w-full cursor-pointer px-2 bg-[#f5f5f5] rounded-md leading-[32px] h-[32px] placeholder:font-light placeholder:text-black/80' 
            placeholder={type === 'agent' ? (agent === '' ? 'All Agents' : agent) : (project === '' ? 'All Projects' : project)} onClick={(e)=>setSelectFilter(true)} onChange={(e)=>setQuery(e.target.value.toString().toLocaleLowerCase().trim())}/> 
            {
                !selectFilter ? null : 
                <div className='z-10 absolute w-full'>
                  <select className='outline-none w-full cursor-pointer px-2  absolute top-[0px] left-0 bg-[#f5f5f5] z-10  shadow-lg h-[32px] border' 
                value={ type === 'agent' ? agent : project }
                
                onChange={(e)=>{if(type === "agent"){dispatch(setFiltersAgent(e.target.value))}
                  if(type === "project"){dispatch(setFiltersProject(e.target.value))}
                  setMapping({...mapping,agent:e.target.value})
                }}
                
                 ref={selectRef}
                 >
                      <option value="" className='w-full'>
                        {type === "agent" ? "All Agents" : "All Projects"}
                      </option>
                          {
                            initialData?.map((item,index)=>{
                              if(type === "agent"){
                                  if(item.attribute_code === "agent_id"){
                                    if(item.value.toString().toLowerCase().includes(query) || item.attribute_name.toString().toLowerCase().includes(query)){
                                      return <option value={item.value} key={index} className='w-full'>
                                      <div className='flex items-center justify-between w-full'>
                                        <p>{item.value}&nbsp;-&nbsp;</p>
                                        <p>{item.attribute_name}</p>
                                      </div>
                                      
                                      </option>
                                    }                                      
                                    }
                              }else{
                                  if(item.attribute_code === "project"){
                                    if(item.value.toString().toLowerCase().includes(query)){
                                      return <option value={item.value} key={index} className='w-full'>{item.value}</option>
                                    }                                      
                                  }
                              }                                        
                            })
                          }                
                  </select>
                </div>                
            }            
          </div>          
        }        
    </div>
  )
}
