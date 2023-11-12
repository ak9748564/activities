import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentItems, setItems, setTotalItems } from '../../redux/paginationSlice';
import ItemsCount from '../../components/pagination/ItemsCount';
import PageNumbers from '../../components/pagination/Pagenumbers';
import SearchFilter from '../../components/filter/SearchFilter';
import { BiFilterAlt } from 'react-icons/bi';
import { setFilterModal } from '../../redux/modalSlice';
import FilterModal from '../../components/filter/FilterModal';

export default function Home() {
  const [loading,setLoading] = React.useState(false);
  const [items,setI] = React.useState([]);

  const [language,setLanguage] = React.useState('');
  const [zone,setZone] = React.useState('');

  const currentItems = useSelector(state=>state.pagination.currentItems);
  const currentPage = useSelector(state=>state.pagination.currentPage);

  const resultArr = useSelector(state => state.filters.resultArr);
  const searchQuery = useSelector(state => state.filters.searchQuery);
  const searchParam = useSelector(state => state.filters.searchParam);

  const dispatch = useDispatch();

  const getActivities = () => {
    setLoading(true);
        axios.get(`http://galaxy-exhibitions-activities.onrender.com/getActivities?searchText=${searchParam}&currentPage=${currentPage-1}`,{withCredentials:false})
        .then((res)=>{
            console.log(res)
            setI(res?.data?.data.response)
            dispatch(setItems(res?.data?.data.response))
            dispatch(setTotalItems(res.data.data.recordCount))
            setLoading(false)
        }).catch((err)=>{console.log(err);setLoading(false)})
  } 

    React.useEffect(()=>{
        setLoading(true);
        axios.get(`http://galaxy-exhibitions-activities.onrender.com/getActivities?searchText=${searchParam}&currentPage=${currentPage-1}`,{withCredentials:false})
        .then((res)=>{
            console.log(res)
            setI(res?.data?.data.response)
            dispatch(setItems(res?.data?.data.response))
            dispatch(setTotalItems(res.data.data.recordCount))
            setLoading(false)
        }).catch((err)=>{console.log(err);setLoading(false)})
    },[currentPage])

    React.useEffect(()=>{
      if(searchQuery === ''){
        dispatch(setCurrentItems(items))
      }else{
        dispatch(setCurrentItems(resultArr))
      }
    },[searchQuery])

  return (
    <div className='h-screen w-screen pt-4 px-4'>
      <div className='s3:flex items-center justify-between mb-2'>
        <h1 className='text-[24px] font-medium leading-[40px]'>Activities Listing</h1>
        <div className='flex items-center justify-between gap-2'>
            <button className="flex items-center h-[30px] border rounded-md px-2 text-[14px] bg-white" onClick={()=>{dispatch(setFilterModal(true))}}>
              <BiFilterAlt className="text-[17px]"/>
            </button>
          <select name="" id="" value={language} onChange={(e)=>setLanguage(e.target.value)} className='border rounded-sm px-2 h-[34px] cursor-pointer outline-none text-[14px] basis-[200px] grow shrink'>
            <option value=''>English & Arabic</option>
            <option>English</option>
            <option>Arabic</option>
          </select>
          <div className='basis-[200px] flex grow shrink'>
            <SearchFilter />
            <button className='bg-black text-white leading-[34px] w-[100px] text-center text-[14px]' onClick={()=>getActivities()}>Search</button>
          </div>
        </div>        
      </div>
      <div className='overflow-scroll s3:h-[calc(100vh-110px)] h-[calc(100vh-150px)]'>
        {
          loading ? 
          <div className='w-full h-full flex items-center justify-center text-[20px]'>Loading...</div> :
          <div className=''>
            <table className="min-w-[1400px] w-full">
              <thead className='w-full sticky top-0 bg-white' style={{zIndex:1}}>
                <tr className='w-full text-left text-[14px] bg-[#ccc]'>
                  <th className={"p-1 h-[36px] font-semibold min-w-[300px]"}>Activity Master: Activity Master Number</th>               
                  <th className={"p-1 h-[36px]  font-semibold min-w-[100px]"}>Zone</th>        
                  <th className={"p-1 h-[36px]  font-semibold min-w-[100px]"}>Activity Code</th>
                  {
                    language === 'English' || language === '' ?
                    <th className={"p-1 h-[36px]  font-semibold min-w-[300px]"}>Activity Name</th> : null
                  }
                  {
                    language === 'Arabic' || language === '' ?
                    <th className={"p-1 h-[36px]  font-semibold min-w-[300px]"}>Activity Name Arabic</th> : null
                  }                    
                  <th className={"p-1 h-[36px]  font-semibold min-w-[100px]"}>Status</th>                     
                  <th className={"p-1 h-[36px]  font-semibold min-w-[200px]"}>Minimum Share Capital</th>
                  {
                    language === 'English' || language === '' ?
                    <th className={"p-1 h-[36px]  font-semibold min-w-[100px]"}>License Type</th> : null
                  }
                  {
                    language === 'Arabic' || language === '' ?
                    <th className={"p-1 h-[36px]  font-semibold min-w-[300px]"}>License Type Arabic</th> : null
                  }
                  <th className={"p-1 h-[36px]  font-semibold min-w-[300px]"}>Is Not Allowed For Coworking (ESR)</th>                     
                  <th className={"p-1 h-[36px]  font-semibold min-w-[250px]"}>RAKEZ HSE Risk Classification</th>                     
                  <th className={"p-1 h-[36px]  font-semibold min-w-[300px]"}>Compliance Risk Rating</th>                     
                  <th className={"p-1 h-[36px]  font-semibold min-w-[100px]"}>Is Special</th>                     
                  <th className={"p-1 h-[36px]  font-semibold min-w-[100px]"}>Activity Price</th>
                  {
                    language === 'English' || language === '' ?
                    <th className={"p-1 h-[36px]  font-semibold min-w-[300px]"}>Activity Group</th> : null
                  }
                  {
                    language === 'Arabic' || language === '' ?
                    <th className={"p-1 h-[36px]  font-semibold min-w-[300px]"}>Activity Group Arabic</th> : null
                  }
                  {
                    language === 'English' || language === '' ?
                    <th className={"p-1 h-[36px]  font-semibold min-w-[300px]"}>Segment Name English</th> : null
                  }
                  {
                    language === 'Arabic' || language === '' ?
                    <th className={"p-1 h-[36px]  font-semibold min-w-[300px]"}>Segment Name Arabic</th> : null
                  }
                  {
                    language === 'English' || language === '' ?
                    <th className={"p-1 h-[36px]  font-semibold min-w-[300px]"}>Description</th> : null
                  }
                  {
                    language === 'Arabic' || language === '' ?
                    <th className={"p-1 h-[36px]  font-semibold min-w-[300px]"}>Description Arabic</th> : null
                  }
                  <th className={"p-1 h-[36px]  font-semibold min-w-[300px]"}>Qualification Requirement</th>                     
                  <th className={"p-1 h-[36px]  font-semibold min-w-[300px]"}>Documents Required</th>                                          
                </tr>
              </thead>
              <tbody className='text-[13px]'>
              {
                currentItems?.map((item)=>{
                  return (
    <tr className="border-t border-b h-[45px] text-[13px] hover:bg-[#eee] cursor-pointer" key={item._id}>

      <td className="px-1">{item['Activity Master: Activity Master Number']}</td>
      <td className="px-1">{item['Zone']}</td>
      <td className="px-1">{item['Activity Code']}</td>
      {
        language === 'English' || language === '' ?
        <td className="px-1" title={item['Activity Name']}>{item['Activity Name']}</td> : null
      }
      {
        language === 'Arabic' || language === '' ?
        <td className="px-1" title={item['Activity Name (Arabic)']}>{item['Activity Name (Arabic)']}</td> : null
      }
      <td className="px-1">{item['Status']}</td>
      <td className="px-1">{item['Minimum Share Capital']}</td>
      {
        language === 'English' || language === '' ?
        <td className="px-1">{item['License Type']}</td> : null
      }
      {
        language === 'Arabic' || language === '' ?
        <td className="px-1">{item['License Type (Arabic)']}</td> : null
      }
      <td className="px-1">{item['Is Not Allowed for Coworking(ESR)']}</td>
      <td className="px-1">{item['RAKEZ HSE Risk Classification']}</td>
      <td className="px-1">{item['Compliance Risk Rating']}</td>
      <td className="px-1">{item['Is Special']}</td>
      <td className="px-1">{item['Activity Price']}</td>
      {
        language === 'English' || language === '' ?
        <td className="px-1" title={item['Activity Group']}>{item['Activity Group']}</td> : null
      }
      {
        language === 'Arabic' || language === '' ?
        <td className="px-1" title={item['Activity Group (Arabic)']}>{item['Activity Group (Arabic)']}</td> : null
      }
      {
        language === 'English' || language === '' ?
        <td className="px-1" title={item['Segment Name English']}>{item['Segment Name English']}</td> : null
      }
      {
        language === 'Arabic' || language === '' ?
        <td className="px-1" title={item['Segment Name Arabic']}>{item['Segment Name Arabic']}</td> : null
      }
      {
        language === 'English' || language === '' ?
        <td className="px-1" title={item['Description']}>{item['Description']}</td> : null
      }
      {
        language === 'Arabic' || language === '' ?
        <td className="px-1" title={item['Description (Arabic)']}>{item['Description (Arabic)']}</td> : null
      }
      <td className="px-1" title={item['Qualification Requirement']}>{item['Qualification Requirement']}</td>
      <td className="px-1" title={item['Documents Required']}>{item['Documents Required']}</td>
    </tr>)})
        }
              </tbody>         
            </table>
          </div>
        }
         
      </div> 
      <div className='flex items-center justify-between h-[40px]'>
        <ItemsCount/>
        <PageNumbers/>
      </div>
      <FilterModal
       language={language} 
       setLanguage={setLanguage}
       zone={zone}
       setZone={setZone}
       />     
    </div>
  )
}