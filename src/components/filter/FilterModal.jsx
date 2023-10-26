import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import secureLocalStorage from 'react-secure-storage';
import Calendar from '../calendar/Calendar';
import CircularProgress from '@mui/material/CircularProgress';

import { RxCross2 } from "react-icons/rx";

import SearchFilter from "./SearchFilter";
import SearchWithSelect from './SearchWithSelect';

import { setSpam,setDelete,setDuplicate } from '../../redux/filtersSlice';
import { setFilterModal } from '../../redux/modalSlice';
import { setRefresh } from '../../redux/refreshSlice';

export default function FilterModal() {
    const [roleId] = React.useState(parseInt(secureLocalStorage.getItem('user')?.role_id));

    //redux states
    const agent = useSelector(state => state.filters.agent);
    const project = useSelector(state => state.filters.project);
    const daterange = useSelector(state => state.filters.daterange);
    const spam = useSelector(state => state.filters.spam);
    const deleteF = useSelector(state => state.filters.delete);
    const duplicate = useSelector(state => state.filters.duplicate);
    const searchParam = useSelector(state => state.filters.searchParam);

    const refresh = useSelector(state => state.refresh.refresh);

    const filterModal = useSelector(state => state.modal.filterModal);
    // console.log(filters);
    const dispatch = useDispatch();

    const applyFilters = () => { 
      dispatch(setRefresh(true));   
    }  
    const filterModalRef = React.useRef();

  React.useEffect(()=>{
    if(filterModal){
      let handler = (e) => {
        if(!filterModalRef.current.contains(e.target))
        dispatch(setFilterModal(false))
      }
      document.addEventListener('mousedown',handler)
      return () => {
        document.removeEventListener('mousedown',handler)
      }
    }    
  },[filterModal])

  React.useEffect(()=>{
    let set = ()=> {
      secureLocalStorage.setItem('storedFilters',currentFilters)
     }
     let currentFilters = {
       agent: agent,
       project: project,
       daterange: daterange,
       spam: spam,
       delete: deleteF,
       duplicate: duplicate,
       searchParam: searchParam
     }
    //  console.log(secureLocalStorage.getItem('storedFilters'));
     set()
  },[refresh])

    return (
      filterModal === false ? null :
      <div className="absolute p-10 top-0 left-0 w-full h-screen bg-black/50 flex items-center justify-center transition-all duration-500 ease-out z-10">
            <div className="rounded-md shadow-lg p-4 relative w-full s2:w-[400px] bg-[#F5F5F5]" ref={filterModal ? filterModalRef : filterModalRef}>
              
              <div onClick={()=>dispatch(setFilterModal(false))} className='h-[24px] w-[24px] rounded-full flex items-center justify-center border absolute right-[15px] top-4 bg-black/80 transition-all text-white hover:bg-black'>
                <RxCross2 className="text-[18px]  cursor-pointer active:rotate-180"/>
              </div>
              <div className='text-[13px]'>
              <p className='text-[20px] font-medium pl-1 mb-2'>Filters</p>
              <div className={(roleId === 2) ? 'rounded-md' : 'border-[#ccc] border rounded-md'}>
                {
                  (roleId === 2) ? null : <SearchWithSelect type="agent"/>
                }              
              </div>
              <div className='mt-3 border-[#ccc] border rounded-md'>
                <SearchWithSelect type="project"/>
              </div>            
              <div className='mt-3 flex  rounded-md border-[#ccc] border'>
                <p className='h-[32px] px-2 leading-[32px] border-r border-[#ccc] w-[80px]'>Daterange</p>
                <Calendar type="apiFilter"/>
              </div>
              <div className='flex h-[32px]  border-[#ccc] border rounded-md items-center cursor-pointer text-[13px] mt-3'>
                <p className='h-[32px] px-2 leading-[32px] border-r w-[80px] grow-0 shrink-0'>Spam</p>
                <div className='flex items-stretch h-[28px] w-full text-center px-[1px]'>
                  <button className={`w-1/3 h-full leading-[28px] transition-all rounded-sm  ${spam === 0 ? 'bg-[#24AEE4] text-white shadow-lg' : 'text-black/80 border border-slate-500 shadow-inner'}`} onClick={()=>dispatch(setSpam(0))}>Hide</button>
                  <button className={`w-1/3 h-full leading-[28px] transition-all border-l border-r rounded-sm ${spam === 1 ? 'bg-[#24AEE4] text-white shadow-lg' : 'text-black/80 border mx-[1px] border-slate-500 shadow-inner'}`} onClick={()=>dispatch(setSpam(1))}>Show</button>
                  <button className={`w-1/3 h-full leading-[28px] transition-all rounded-sm ${spam === 2 ? 'bg-[#24AEE4] text-white shadow-lg' : 'text-black/80 border border-slate-500 shadow-inner'}`} onClick={()=>dispatch(setSpam(2))}>Only</button>
                </div>         
              </div>
              <div className='flex h-[32px] border-[#ccc] border rounded-md items-center cursor-pointer text-[13px] mt-3'>
                <p className='h-[32px] px-2 leading-[32px] border-r w-[80px] grow-0 shrink-0'>Delete</p>
                <div className='flex items-stretch h-[28px] w-full text-center px-[1px]'>
                  <button className={`w-1/3 h-full leading-[28px] transition-all rounded-sm ${deleteF === 0 ? 'bg-[#24AEE4] text-white shadow-lg' : 'text-black/80 border border-slate-500 shadow-inner'}`} onClick={()=>dispatch(setDelete(0))}>Hide</button>
                  <button className={`w-1/3 h-full leading-[28px] transition-all border-l border-r rounded-sm ${deleteF === 1 ? 'bg-[#24AEE4] text-white shadow-lg' : 'text-black/80 border border-slate-500 shadow-inner mx-[1px]'}`} onClick={()=>dispatch(setDelete(1))}>Show</button>
                  <button className={`w-1/3 h-full leading-[28px] transition-all rounded-sm ${deleteF === 2 ? 'bg-[#24AEE4] text-white shadow-lg' : 'text-black/80 border border-slate-500 shadow-inner'}`} onClick={()=>dispatch(setDelete(2))}>Only</button>
                </div>         
              </div>
              <div className='flex h-[32px] border-[#ccc] border rounded-md items-center cursor-pointer text-[13px] mt-3'>
                <p className='h-[32px] px-2 leading-[32px] border-r w-[80px] grow-0 shrink-0'>Duplicate</p>
                <select className='outline-none w-full cursor-pointer px-2 bg-white hidden'>
                  <option value="">Select</option>
                  <option value="0">Hide Duplicates</option>
                  <option value="1">Show Duplicates</option>
                  <option value="2">Only Duplicates</option>
                </select>
                <div className='flex items-stretch h-[28px] w-full text-center px-[1px]'>
                  <button className={`w-1/3 h-full leading-[28px] transition-all rounded-sm ${duplicate === 0 ? 'bg-[#24AEE4] text-white shadow-lg' : 'text-black/80 border border-slate-500 shadow-inner'}`} onClick={()=>dispatch(setDuplicate(0))}>Hide</button>
                  <button className={`w-1/3 h-full leading-[28px] transition-all border-l border-r rounded-sm ${duplicate === 1 ? 'bg-[#24AEE4] text-white shadow-lg' : 'text-black/80 border border-slate-500 shadow-inner mx-[1px]'}`} onClick={()=>dispatch(setDuplicate(1))}>Show</button>
                  <button className={`w-1/3 h-full leading-[28px] transition-all rounded-sm ${duplicate === 2 ? 'bg-[#24AEE4] text-white shadow-lg' : 'text-black/80 border border-slate-500 shadow-inner'}`} onClick={()=>dispatch(setDuplicate(2))}>Only</button>
                </div>        
              </div>
              <div className='flex items-center border-[#ccc] border rounded-md my-3'>
              <p className='h-[32px] px-2 leading-[32px] border-r w-[80px] grow-0 shrink-0'>Search</p>
              <SearchFilter type="apiFilter" className="grow shrink"/>
              </div>           
              <button className='text-white h-[30px] bg-black/80 hover:bg-black rounded-sm text-center w-[90px] leading-[30px] text-[13px]' onClick={()=>applyFilters()}>
              {
                refresh.refresh ? <div className='flex w-full justify-center h-full items-center'>
                <CircularProgress            
                size={20}
                thickness={3}
                value={80}
                color={'inherit'}
                /></div> : <div>Apply</div>
                }
              </button>
              {/* <ComboBox/> */}
              {/* <SearchWithSelect type="agent"/> */}
              </div>
            </div>
      </div>
    )
  }  