import React, { useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setLocalFilterIsActive, setFiltersResultArr, setFiltersSearchQuery, setFiltersSearchParam } from '../../redux/filtersSlice';

export default function SearchFilter() {
    const [query,setQuery] = React.useState("");

    const itemsPerPage = useSelector(state => state.pagination.itemsPerPage);
    const currentItems = useSelector(state => state.pagination.currentItems);

    const dispatch = useDispatch(); 
    const queryRef = useRef();    

    var items = currentItems;
    var keys = ['Activity Master: Activity Master Number','Zone','Activity Code','Activity Name','Activity Name (Arabic)','Status','Minimum Share Capital','License Type','License Type (Arabic)','Is Not Allowed for Coworking (ESR)','RAKEZ HSE Risk Classification','Compliance Risk Rating','Is Special','Activity Price','Activity Group','Activity Group (Arabic)','Segment Name English','Segment Name Arabic','Description','Description (Arabic)','Qualification Requirement','Documents Required'];    
    
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
        dispatch(setFiltersSearchQuery(query.toString().toLowerCase()));
        if(previousArr !== undefined && previousArr !== null && previousArr.length !== 0){            
            previousArr.filter((item) => {
                keys.some((key) => {
                    if(item[key] !== '' && item[key] !== null && item[key] !== undefined){
                        if((item[key]).toString().toLowerCase().includes(query.toString().toLowerCase())) {
                            if(newArr.length === 0){newArr.push(item)}
                            else{                        
                                for(let i=0;i<newArr.length;i++)
                                {
                                    var present = true;
                                    if(newArr[i]._id !== item._id)
                                    { present = false; }                                                          
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
        handleSearch();                    
        dispatch(setFiltersResultArr(newArr))       
        dispatch(setFiltersSearchQuery(query.toString().toLowerCase()));
        dispatch(setFiltersSearchParam(query));      
    },[query])

  return (
    <div className='flex items-center w-full border rounded-sm'>
        <input type="search" className={`h-[32px]  px-2 outline-none hover:ring-1 cursor-pointer w-full`} placeholder="Search" id="search" onChange={(e)=>setQuery(e.target.value)} ref={queryRef}/>
    </div>
  )
}