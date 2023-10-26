import React, { useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setLocalFilterIsActive, setFiltersResultArr, setFiltersSearchQuery, setFilteredDataFor, setFiltersSearchParam } from '../../redux/filtersSlice';
import { setCurrentItems, setItems } from '../../redux/paginationSlice';
import { setFilteredResultArrMicrosites } from '../../redux/micrositesSlice';
import { setFilteredResultArrFacebook } from '../../redux/facebookSlice';

export default function SearchFilter({ type, memberList, facebookPages, tabM }) {
    const [query,setQuery] = React.useState("");

    const tab = useSelector(state => state.queries.tab);
    const initialDesktopDataMicrosites = useSelector(state => state.microsites.initialDesktopDataMicrosites);
    const initialDesktopDataFacebook = useSelector(state => state.facebook.initialDesktopDataFacebook);
    const googleforms = useSelector(state => state.queries.googleforms);
    const itemsPerPage = useSelector(state => state.pagination.itemsPerPage);
    const currentPage = useSelector(state => state.pagination.currentPage);

    const dispatch = useDispatch(); 
    const queryRef = useRef();    

    var items = [];var keys;   

    if(memberList !== undefined){
        items = memberList;
        keys = ["user_id", "member_id", "email_address_for_otp", "first_name", "company_name", "role_name", "modified_date","status"];
    }else{
        if(facebookPages !== undefined){
            items = facebookPages;
            keys = ["gtf_page_id", "facebook_page_id", "facebook_page_name", "page_expiry_date", "is_active"];
        }
        else{
            if(tab === "microsites")
            { items = initialDesktopDataMicrosites; }
            if(tab === "facebook")
            { items = initialDesktopDataFacebook; }
            if(tab === "googleforms")
            { items = googleforms; }
            keys = ["AgentID","Project","Sender","Message","QueryDate","City","IP"];
        }
    }

    
    
    // console.log(items);
    var previousArr = [];
    // for(let i=0;i<items.length;i++){
    //     for(let j=0;j<items[i].length;j++){
    //         previousArr.push(items[i][j]);
    //     }
    // }
    previousArr = items;
    // console.log(previousArr);

    var newArr = [];
    const handleSearch = () => {
        dispatch(setFiltersSearchQuery(query));
        if(previousArr !== undefined && previousArr !== null && previousArr.length !== 0){            
            previousArr.filter((item) => {
                keys.some((key) => {
                    if(item[key] !== '' && item[key] !== null && item[key] !== undefined){
                        if((item[key]).toString().toLowerCase().includes(query)) {
                            if(newArr.length === 0){newArr.push(item)}
                            else{                        
                                for(let i=0;i<newArr.length;i++)
                                {
                                    var present = true;
                                    if(memberList !== undefined)
                                    {
                                        if(newArr[i].user_id !== item.user_id)
                                        { present = false; } 
                                    }
                                    else
                                    {
                                        if(facebookPages !== undefined)
                                        {
                                            if(newArr[i].facebook_page_id !== item.facebook_page_id)
                                            { present = false; }
                                        }
                                        else
                                        {
                                            if(newArr[i].QueryID !== item.QueryID)
                                            { present = false; } 
                                        }                                        
                                    }
                                                               
                                }
                                if(present === false){newArr.push(item)}
                            }                   
                        }
                    }
                })
            })
        }
        // console.log(newArr);               
    }
    

    var k=0; const wholeData = [];
    const getWholeData = () => {
        if(newArr.length === 0){
            wholeData.push([]);
            // console.log(newArr.length);
        }else{
                // console.log(newArr);
                // console.log(totalPages);
                let totalPages = Math.ceil((newArr.length)/itemsPerPage);
                // console.log(totalPages, pagination.itemsPerPage, newArr.length);
                
                let j=0;
                for(let i=0;i<totalPages;i++){
                    let arr = newArr.slice(j,j+100)
                    // console.log(arr);
                    wholeData.push(arr);
                    j=j+100;
                    // wholeData.push([]);
                    // // console.log(wholeData);
                    // for(let j=0;j<newArr.length;j++){
                    // wholeData[i].push(newArr[j]);            
                    // if(wholeData[k]?.length>=pagination.itemsPerPage){k++}
                    // }
                }                
                // console.log(wholeData);
        }
        
    }

    React.useEffect(()=>{
        dispatch(setFilteredDataFor(tab))
        if(type === "apiFilter"){}
        else
        {
            if(query === ""){
                dispatch(setLocalFilterIsActive(false));
                dispatch(setFiltersResultArr([]));
                if(tab === 'microsites'){ dispatch(setFilteredResultArrMicrosites([])); }
                if(tab === 'facebook'){ dispatch(setFilteredResultArrFacebook([])); }
                if(tab === 'googleforms'){ dispatch(setFilteredResultArrMicrosites([])); }                
            }
            else
            {
                // console.log(query)
                handleSearch();
                // getWholeData();
                    dispatch(setLocalFilterIsActive(true));                    
                    // dispatch(setTotalItems(newArr.length));
                        
                    if(memberList !== undefined)
                    { if(query !== ''){ dispatch(setItems(newArr));dispatch(setCurrentItems(newArr));dispatch(setFiltersResultArr(newArr)) } }
                    else
                    {
                        if(facebookPages !== undefined)
                        { if(query !== ''){ dispatch(setItems(newArr));dispatch(setCurrentItems(newArr));dispatch(setFiltersResultArr(newArr)) } }
                        else
                        {
                            if(tab === 'microsites'){ dispatch(setFilteredResultArrMicrosites(newArr)); }
                            if(tab === 'facebook'){ dispatch(setFilteredResultArrFacebook(newArr)); }
                            if(tab === 'googleforms'){ dispatch(setFilteredResultArrMicrosites(newArr)); }
                            dispatch(setFiltersResultArr(newArr))
                            // dispatch(setCurrentPage(1))
                        }
                    }          
            }
        }        
        dispatch(setFiltersSearchQuery(query));
        dispatch(setFiltersSearchParam(query));      
    },[query])
    
    React.useEffect(() => {
        dispatch(setFiltersSearchQuery(''));
        queryRef.current.value = '';
    },[tab,tabM])

  return (
    <div className='flex items-center w-full'>
        <input type="search" className={`h-[32px] ${memberList === undefined ? 'rounded-md' : 'rounded-l-md'}  px-2 outline-none hover:ring-1 cursor-pointer w-full ${type==="apiFilter" ? "" : "my-2 border"}`} placeholder="Search" id="search" onChange={(e)=>setQuery(e.target.value.toString().toLowerCase())} ref={queryRef}/>
    </div>
  )
}