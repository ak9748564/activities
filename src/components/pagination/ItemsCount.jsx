import React from 'react';

import { useSelector } from 'react-redux';

export default function ItemsCount() {
    const totalItems = useSelector(state => state.pagination.totalItems);
    const currentPage  = useSelector(state => state.pagination.currentPage);
    const itemsPerPage = useSelector(state => state.pagination.itemsPerPage);
    const selectedItemsCount = useSelector(state => state.queries.selectedItemsCount);

    const tab = useSelector(state => state.queries.tab);
    const resultArr = useSelector(state => state.filters.resultArr);
    const searchQuery = useSelector(state => state.filters.searchQuery);

    var pageNumbers = [];    
    for(let i=1; i<=Math.ceil(totalItems/itemsPerPage);i++) 
    { pageNumbers.push(i); } 
    var totalPages = pageNumbers.length; 
    // console.log('itemsCount');
   return (
    pageNumbers.length === 0 || tab === 'googleforms' ? null : 
    <div className='flex items-center'>
      <div className={`flex text-[13px] text-black items-center mr-2`}>
        <p>Showing&nbsp;</p>
        <p className='font-medium text-[#e4459b]'>{(((currentPage-1)*itemsPerPage) + 1)}</p>
        <p>&nbsp;to&nbsp;</p>
        <p className='font-medium text-[#e4459b]'>{currentPage !== totalPages ? (((currentPage-1)*itemsPerPage) + itemsPerPage) : totalItems}</p>
        <p>&nbsp;of</p>
        <p className='font-medium text-[#28afe4]'>&nbsp;{totalItems}&nbsp;</p>
        <p>results</p>
      </div>
      {
        selectedItemsCount > 0 ? <div className='flex items-center text-[13px]'>
        <p className='mr-1 text-[#e4459b]'>( {selectedItemsCount} selected )</p></div> : null
      }      
      {
        searchQuery === '' ? null : <div className='flex items-center text-[13px]'>
        <p className='mr-1 text-[#e4459b]'>( {resultArr.length} matching items found )</p></div>
      }      
    </div>   
  )
}