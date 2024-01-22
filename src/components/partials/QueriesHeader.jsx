import React from 'react';

import { useDispatch } from 'react-redux';

import SearchFilter from '../filter/SearchFilter';
import Calendar from '../calendar/Calendar';

import { setDefault } from '../../redux/paginationSlice';
import { setFilterModal } from '../../redux/modalSlice';
import { setRefresh } from '../../redux/refreshSlice';
import { setSidebarMobile } from '../../redux/sidebarSlice';

import {TbBrandGoogleBigQuery} from 'react-icons/tb';
import { HiOutlineRefresh } from "react-icons/hi";
import { BiFilterAlt } from "react-icons/bi";

import { list } from '../icons/Svg';

export default function QueriesHeader() {
    const [mobileSearchFilter, setMobileSearchFilter] = React.useState(false);

    const dispatch = useDispatch(); 

    // console.log('queriesHeader');       
  return (
    <div className='mb-3 shadow-md'>
      <div className={ mobileSearchFilter ? 'hidden' : "py-2 pl-4 pr-2 flex items-center justify-between grow-0 shrink-0" }>
          <div className='flex items-center'>
            <div onClick={()=>dispatch(setSidebarMobile(true))}>{list}</div>
            <div className='flex items-center gap-2'>
              <TbBrandGoogleBigQuery className='text-[24px]'/>
              <p className="font-medium text-[18px]">Queries</p>
            </div>
          </div>                    
          <div className="flex items-center gap-2">
            <div onClick={()=>{dispatch(setRefresh(true));dispatch(setDefault())}} className="s3:hidden border px-[6px] flex items-center h-[30px] rounded-md">
              <HiOutlineRefresh className='text-[20px] cursor-pointer active:-rotate-180 active:transition-all inline'/>
            </div> 
                       
            <button className="flex items-center h-[30px] border rounded-md px-2 text-[14px] bg-white" onClick={()=>{dispatch(setFilterModal(true))}}>
              <BiFilterAlt className="text-[17px]"/>
            </button>
            <div className='bg-white border-white rounded-md'>
              <Calendar className="border-white" type="localFilter"/>
            </div>
            <div className='s3:hidden bg-white h-[30px] px-2 border rounded-md flex items-center cursor-pointer' onClick={()=>setMobileSearchFilter(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </div>                        
          </div>
        </div>
        <div className={mobileSearchFilter ? 's3:hidden px-2 relative flex items-center transition-all grow-0 shrink-0' : 'hidden'}>          
          <SearchFilter />
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg absolute right-[16px] fill-black cursor-pointer" viewBox="0 0 16 16" onClick={()=>setMobileSearchFilter(false)}>
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
          </svg>
        </div>
    </div>
  )
}