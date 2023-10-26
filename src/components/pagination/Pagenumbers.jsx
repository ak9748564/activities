import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { setCurrentItems, setCurrentPage } from "../../redux/paginationSlice";

const pageCss = 'h-[30px] rounded-sm m-[1px] border items-center justify-center cursor-pointer text-[13px]';

export default function PageNumbers({facebookPages}) {
  const [showPageNumbers, setShowPageNumbers] = React.useState(false);

  //redux-states
  const items = useSelector((state) => state.pagination.items);
  const totalItems = useSelector((state) => state.pagination.totalItems);
  const itemsPerPage = useSelector((state) => state.pagination.itemsPerPage);
  const currentPage = useSelector((state) => state.pagination.currentPage);

  const loading = useSelector((state) => state.queries.loading);
  const tab = useSelector((state) => state.queries.tab);

  const dispatch = useDispatch();

  var pageNumbers = [];
  let currentItems;
  var totalPages;
  let LoadMoreData;

  for (let i = 1;i <= Math.ceil(totalItems / itemsPerPage);i++){ pageNumbers.push(i); }

  totalPages = pageNumbers.length;
  // currentItems = items[currentPage - 1];
  // currentItems = items[currentPage - 1];
  // if(facebookPages){
  //   currentItems = items
  // }else{
  //   currentItems = items;
  // }
  currentItems = items;
  // console.log(currentItems);

  const handlePrevPage = () => {
    if (loading === false) {
      if (currentPage > 1) {
        dispatch(setCurrentPage(currentPage - 1));
      }
    }
  };

  const handleNextPage = () => {
    if (loading === false) {
      if (currentPage < totalPages) {
        dispatch(setCurrentPage(currentPage + 1));
      }
    }
  };

  const handleLoadMore = () => {
    if (loading === false) {
      if (currentPage < totalPages) {
        dispatch(setCurrentPage(currentPage + 1));
      }
    }
    LoadMoreData = [].concat(...items)
    console.log(LoadMoreData);   

    currentItems = LoadMoreData;
    dispatch(setCurrentItems(currentItems))
    // console.log(currentItems);
  };

  React.useEffect(() => {
    dispatch(setCurrentItems(currentItems))
  },[currentPage,items]);
  
  // console.log('pageNumbers')

  return (
    totalItems === 0  || tab === 'googleforms' ? null :
    <nav>
      <ul className="flex justify-end">
        <button className={`${pageCss} flex w-[30px] s3:w-[80px] ${ totalPages > 1 ? (currentPage === 1 ? "text-[#999]" : "") : "hidden" }`}
        onClick={handlePrevPage}>
          <p className="s3:flex hidden">Previous</p>
          <p className="s3:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
            </svg>
          </p>
        </button>

        {totalPages > 11 ? 
          pageNumbers.slice(0, 10).map((number) => {
          return ( 
          <li 
          key={number} 
          className={`${pageCss} hidden s3:flex w-[30px] ${number === currentPage ? 'bg-black text-white' : ''}`} 
          onClick={() => { if (loading === false) { dispatch(setCurrentPage(number)); }}}>{number}</li>
          );}) : 
          pageNumbers.map((number) => {
          return ( 
          <li 
          key={number} 
          className={`${pageCss} hidden s3:flex w-[30px] ${number === currentPage ? 'bg-black text-white' : '' }`}
          onClick={() => { if (loading === false) { dispatch(setCurrentPage(number)); }}}>{number}</li>
          );})
        }
        <div
          className={totalPages > 11 ? "relative w-[30px] h-[30px] hidden s3:block" : "hidden"}
          onMouseOver={() => setShowPageNumbers(true)}
          onMouseOut={() => setShowPageNumbers(false)}>
          <div
            className={
              showPageNumbers
                ? "absolute bottom-[100%] left-[-180px] flex w-[280px] flex-wrap bg-white rounded-md p-3 shadow-xl"
                : "hidden"
            }>
            {pageNumbers.slice(10, totalPages - 1).map((number) => {
              return (
                <li
                  key={number}
                  className={`${pageCss} flex w-[30px] ${number === currentPage ? 'bg-black text-white' : ''}`}
                  onClick={() => { if (loading === false) { dispatch(setCurrentPage(number)); }}}>{number}</li>
              );
            })}
          </div>

          <button
            className={
              currentPage > 10 && currentPage < totalPages
                ? "h-[30px] w-[30px] rounded-sm m-[1px] border flex items-center justify-center cursor-pointer bg-black text-white text-[13px]"
                : "h-[30px] w-[30px] rounded-sm m-[1px] border flex items-center justify-center cursor-pointer text-[13px]"
            }
          >
            {" "}
            ...{" "}
          </button>
        </div>

        <div className={totalPages > 11 ? "hidden s3:flex" : "hidden"}>
          <li
            className={`${pageCss} w-[30px] flex ${currentPage === totalPages ? 'bg-black text-white' : ''}`}
            onClick={()=>{ if(loading === false){ dispatch(setCurrentPage(totalPages)); }}}>{totalPages}</li>
        </div>

        <button className={`${pageCss} flex w-[30px] s3:w-[80px] ${totalPages > 1 ? currentPage === totalPages ? 'text-[#999]' : '' : 'hidden'}`} onClick={handleNextPage}>
          <p className="s3:flex hidden">Next</p>
          <p className="s3:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </p>
        </button>
      </ul>
      {/* <button className={`${pageCss} w-[80px] ${totalPages > 1 ? currentPage === totalPages ? 'text-[#999] s3:hidden' : 's3:hidden' : 'hidden'}`} onClick={()=>handleLoadMore()} >Load More</button> */}
    </nav>
  );
}