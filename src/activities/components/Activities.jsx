import React from 'react';
import { BiFilterAlt } from 'react-icons/bi';
import SearchFilter from '../../components/filter/SearchFilter';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setCurrentItems, setItems, setTotalItems } from '../../redux/paginationSlice';
import ItemsCount from '../../components/pagination/ItemsCount';
import PageNumbers from '../../components/pagination/Pagenumbers';
import { CircularProgress } from '@mui/material';
import ActivityGroupFilter from '../../components/filter/ActivityGroupFilter';
import { BASE_URL_ACT } from '../../redux/constants';
import {IoSearchOutline} from 'react-icons/io5'

export default function Activities({
    activityGroup,
    // activityGroupSelected,
    // setActivityGroupSelected,
    getActivitiesGroup,
    // getActivities
}) {
    //click outside to close
    const filterModalRef = React.useRef();
    React.useEffect(()=>{
        let close = (e) => {
        if(!filterModalRef.current.contains(e.target)){ setFilters(false) }}
        document.addEventListener('mousedown',close)
        return () => { document.removeEventListener('mousedown',close) }
    },[])

    const detailsModalRef = React.useRef();
    React.useEffect(()=>{
        let close = (e) => {
        if(!detailsModalRef.current.contains(e.target)){ setActivity('') }}
        document.addEventListener('mousedown',close)
        return () => { document.removeEventListener('mousedown',close) }
    },[])

    const [activity,setActivity] = React.useState('');
    const [form,setForm] = React.useState({})

    const [filters,setFilters] = React.useState(false);

    const [loading,setLoading] = React.useState(false);
    const [contactLoading,setContactLoading] = React.useState(false);
    const [items,setI] = React.useState([]);

    const [language,setLanguage] = React.useState('English');

    const [zone,setZone] = React.useState('');
    const [licenseType,setLicenseType] = React.useState('');
    const [isSpecial,setIsSpecial] = React.useState('');
    const [riskClass,setRiskClass] = React.useState('');
    const [compRR,setCompRR] = React.useState('');

    const currentItems = useSelector(state=>state.pagination.currentItems);
    const currentPage = useSelector(state=>state.pagination.currentPage);

    const resultArr = useSelector(state => state.filters.resultArr);
    const searchQuery = useSelector(state => state.filters.searchQuery);
    const searchParam = useSelector(state => state.filters.searchParam);
    const activityGroupSelected = useSelector(state => state.activityGroup.activityGroupSelected);

    const dispatch = useDispatch();

    // console.log(activityGroupSelected);
    const getActivities = () => {
        setLoading(true);
            axios.get(`${BASE_URL_ACT}/getActivities?searchText=${searchParam.trim()}&currentPage=${currentPage-1}&zone=${zone.trim()}&licenseType=${licenseType.trim()}&isSpecial=${isSpecial.trim()}&riskClass=${riskClass.trim()}&compRR=${compRR.trim()}&activityGroup=${activityGroupSelected.trim()}`,{withCredentials:false})
            .then((res)=>{
                console.log(res)
                setI(res?.data?.data.response)
                dispatch(setItems(res?.data?.data.response))
                dispatch(setTotalItems(res.data.data.recordCount))
                setLoading(false)
            }).catch((err)=>{console.log(err);setLoading(false)})
    }
    
    const handleContact = (e) => {
        e.preventDefault();
        // console.log(form)
        setContactLoading(true)
        axios.post(`${BASE_URL_ACT}/contact`,{
            name:form.name,
            email:form.email,
            phone:form.phone,
            message:form.message,
            activity:form.activity
        },{withCredentials:false})
        .then(res=>{
            // console.log(res)
            setContactLoading(false)
            if(res.status === 200){
                alert(res.data.message)
            }
        })
        .catch(err=>{
            console.log(err)
            setContactLoading(false)
        })        
    }

    const handleForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
            activity: activity['Activity Master: Activity Master Number']
        })
    }

    React.useEffect(()=>{
        getActivitiesGroup();
        setLoading(true);
        axios.get(`${BASE_URL_ACT}/getActivities?searchText=${searchParam.trim()}&currentPage=${currentPage-1}`,{withCredentials:false})
        .then((res)=>{
            console.log(res)
            setI(res?.data?.data.response)
            dispatch(setItems(res?.data?.data.response))
            dispatch(setTotalItems(res.data.data.recordCount))
            setLoading(false)
        }).catch((err)=>{console.log(err);setLoading(false)})
    },[currentPage])

    React.useEffect(()=>{
        getActivitiesGroup()
    },[window.location.pathname])

    React.useEffect(()=>{
      if(searchQuery === ''){
        dispatch(setCurrentItems(items))
      }else{
        dispatch(setCurrentItems(resultArr))
      }
    },[searchQuery])

    React.useEffect(()=>{
        getActivities()
    },[activityGroupSelected])

    // React.useEffect(()=>{
    //     getActivities()
    // },[])

    // console.log(activityGroup)

  return (
    <div className='w-full h-full'>
        <div className='w-full h-full'>
            {/* header  */}
            <div className='flex items-center justify-between pl-3 pr-[6px] border-b'>
                <h1 className='text-[20px] leading-[50px]'>Activities List</h1>
                <div className='flex items-center gap-[6px]'>
                    <select name="" id="" value={language} onChange={(e)=>setLanguage(e.target.value)} className='border rounded-sm px-2 h-[40px] w-[100px] cursor-pointer outline-none text-[14px]'>
                        <option>English</option>
                        <option>Arabic</option>
                    </select>
                    <button className="flex items-center justify-center h-[40px] w-[40px] border rounded-m px-2 text-[14px] bg-white cursor-pointer" onClick={()=>{setFilters(true)}}>
                        <BiFilterAlt className="text-[17px]"/>
                    </button>
                </div>                
            </div>
            <div className='p-2 border-b'>
                {/* language filter  */}
{/*                 <select name="" id="" value={language} onChange={(e)=>setLanguage(e.target.value)} className='border rounded-sm px-2 h-[40px] cursor-pointer outline-none text-[14px] w-full mb-2'>
                    <option>English</option>
                    <option>Arabic</option>
                </select> */}
                {/* search filter  */}
                <div className='basis-[200px] flex grow shrink h-[30px]'>
                    <SearchFilter />
                    <button className='bg-black text-white  w-[30px] text-center text-[14px] flex items-center justify-center shrink-0' onClick={()=>getActivities()}>
                        <IoSearchOutline/>
                    </button>
                </div>
                {/* activity group  */}
                <div className='h-[30px] w-full border mt-2'>
                    <ActivityGroupFilter 
                    activityGroup={activityGroup} 
                    getActivities={getActivities}
                    activityGroupSelected={activityGroupSelected}
                    // setActivityGroupSelected={setActivityGroupSelected}
                    />
                </div>
            </div>
            <div className='shadow-inner h-[calc(100vh-182px)] w-full overflow-y-scroll p-4'>
                {
                    loading ? 
                    <div className='w-full h-full flex items-center justify-center text-[20px]'>
                        <div className='flex items-center gap-2'>
                            <CircularProgress            
                                size={20}
                                thickness={3}
                                value={80}
                                color={'inherit'}
                                />
                            <p>Loading...</p>
                        </div>
                    </div> :
                    currentItems.length === 0 ? 
                    <div className='w-full h-full flex items-center justify-center text-[20px]'>
                        <div className='flex items-center gap-2'>
                            <p>No Records Found</p>
                        </div>
                    </div> :
                    <div className='w-full'>
                    {
                        currentItems?.map((item)=>{
                            return(
<div className='w-full border rounded-md shadow-lg bg-white p-4 my-2'>
    
{/*     <div className='border px-3 rounded-sm my-1'>
        <p className='text-[14px] font-semibold text-[#555] leading-[30px] border-b'>Activity Master: Activity Master Number</p>
        <p className='text-[14px] leading-[30px]'>{item['Activity Master: Activity Master Number']}</p>
    </div> */}
{/*     <div className='border px-3 rounded-sm my-1'>
        <p className='text-[14px] font-semibold text-[#555] leading-[30px] border-b'>Activity Code</p>
        <p className='text-[14px] leading-[30px]'>{item['Activity Code']}</p>
    </div> */}
    {/* Activity Group  */}
    {
        language === 'English' ?
        <div className='border px-3 rounded-sm my-1'>
            <p className='text-[14px] font-semibold text-[#555] leading-[30px] border-b'>Activity Group</p>
            <p className='text-[14px] leading-[30px] text-green-500'>{item['Activity Group']}</p>
        </div> :
        <div className='border px-3 rounded-sm my-1'>
            <p className='text-[14px] font-semibold text-[#555] leading-[30px] border-b'>Activity Group (Arabic)</p>
            <p className='text-[14px] leading-[30px] text-green-500'>{item['Activity Group (Arabic)']}</p>
        </div>
    }
    {/* Activity Name  */}
    {
        language === 'English' ? 
        <div className='border px-3 rounded-sm my-1'>
            <p className='text-[14px] font-semibold text-[#555] leading-[30px] border-b'>Activity Name</p>
            <p className='text-[14px] leading-[30px] text-green-500'>
                {item['Activity Name']}
            </p>
        </div> :
        <div className='border px-3 rounded-sm my-1'>
            <p className='text-[14px] font-semibold text-[#555] leading-[30px] border-b'>Activity Name (Arabic)</p>
            <p className='text-[14px] leading-[30px]  text-green-500'>
                {item['Activity Name (Arabic)']}
            </p>
        </div>
    }
    {/* Segment Name  */}
{/*     {
        language === 'English' ? 
        <div className='border px-3 rounded-sm my-1'>
            <p className='text-[14px] font-semibold text-[#555] leading-[30px] border-b'>Segment Name English</p>
            <p className='text-[14px] leading-[30px] text-green-500'>
            {item['Segment Name English']}
            </p>
        </div> :
        <div className='border px-3 rounded-sm my-1'>
            <p className='text-[14px] font-semibold text-[#555] leading-[30px] border-b'>Segment Name Arabic</p>
            <p className='text-[14px] leading-[30px] text-green-500'>
            {item['Segment Name Arabic']}
            </p>
        </div>
    } */}
    {/* License Type  */}
{/*     {
        language === 'English' ?
        <div className='border px-3 rounded-sm my-1'>
            <p className='text-[14px] font-semibold text-[#555] leading-[30px] border-b'>License Type</p>
            <p className='text-[14px] leading-[30px]'>
                {item['License Type']}
            </p>
        </div> :
        <div className='border px-3 rounded-sm my-1'>
            <p className='text-[14px] font-semibold text-[#555] leading-[30px] border-b'>License Type (Arabic)</p>
            <p className='text-[14px] leading-[30px]'>
            {item['License Type (Arabic)']}
            </p>
        </div>

    }     */}
    <div className='flex justify-end pt-2'>
        <button className='bg-black text-white rounded-md leading-[30px] px-4 text-[13px]' onClick={()=>setActivity(item)}>Send Enquiry</button>
    </div>
</div>
                            )
                        })
                    }
                    </div>
                }
                
            </div>
            <div className='flex items-center justify-between h-[40px] pr-1 pl-3 border-t shadow-lg'>
                <ItemsCount/>
                <PageNumbers/>
            </div>            
        </div>

        {/* filter modal  */}
        <div className={ filters ? 'absolute w-full h-full bg-black/80 top-0 left-0 flex items-center justify-center transition-all' : 'hidden' }>
        <div className="rounded-md shadow-lg p-4 relative w-full s2:w-[400px] bg-[#F5F5F5]" ref={filterModalRef}>
              
              <div className='text-[13px]'>
              <p className='text-[20px] font-medium pl-1 mb-2'>Filters</p>
              <div className='flex h-[32px] border-[#ccc] border rounded-md items-center cursor-pointer text-[13px] mt-3'>
                <p className='h-[32px] px-3 leading-[30px] border-r w-[100px] grow-0 shrink-0'>Zone</p>
                <div className='flex items-stretch h-[28px] w-full text-center px-[1px]'>
                    <button 
                        className={`w-1/3 h-full leading-[26px] transition-all rounded-sm 
                        ${zone === '' ? 
                        'bg-[#24AEE4] text-white shadow-lg' : 
                        'text-black/80 border border-slate-500 shadow-inner'}`} 
                        onClick={()=>setZone('')}>
                        All
                    </button>
                    <button 
                        className={`w-1/3 h-full leading-[26px] transition-all border-l border-r rounded-sm 
                        ${zone === 'Freezone' ? 
                        'bg-[#24AEE4] text-white shadow-lg' : 
                        'text-black/80 border border-slate-500 shadow-inner mx-[1px]'}`} 
                        onClick={()=>setZone('Freezone')}>
                        Freezone
                    </button>
                    <button 
                        className={`w-1/3 h-full leading-[26px] transition-all rounded-sm 
                        ${zone === 'Non-Freezone' ? 
                        'bg-[#24AEE4] text-white shadow-lg' : 
                        'text-black/80 border border-slate-500 shadow-inner'}`} 
                        onClick={()=>setZone('Non-Freezone')}>
                        Non-FZ
                    </button>
                </div>                       
              </div>
              <div className='flex h-[32px] border-[#ccc] border rounded-md items-center cursor-pointer text-[13px] mt-3'>
                <p className='h-[32px] px-3 leading-[30px] border-r w-[100px] grow-0 shrink-0'>Lic. Type</p>
                <select name="" id="" value={licenseType} onChange={(e)=>setLicenseType(e.target.value)} className='border rounded-md px-2 h-[30px] cursor-pointer outline-none text-[14px] w-full bg-[whitesmoke] '>
                    <option>Professional</option>
                    <option>Commercial</option>
                    <option>Industrial</option>
                    <option>Educational</option>
                    <option>Services</option>
                    <option>Freelance Permit</option>
                    <option>Media</option>
                    <option>Individual / Professional</option>
                    <option>E-Commerce</option>
                    <option>General Trading</option>
                </select>                        
              </div>
              <div className='flex h-[32px] border-[#ccc] border rounded-md items-center cursor-pointer text-[13px] mt-3'>
                <p className='h-[32px] px-3 leading-[30px] border-r w-[100px] grow-0 shrink-0'>IsSpecial</p>
                <div className='flex items-stretch h-[28px] w-full text-center px-[1px]'>
                    <button 
                        className={`w-1/3 h-full leading-[26px] transition-all rounded-sm 
                        ${isSpecial === '' ? 
                        'bg-[#24AEE4] text-white shadow-lg' : 
                        'text-black/80 border border-slate-500 shadow-inner'}`} 
                        onClick={()=>setIsSpecial('')}>
                        All
                    </button>
                    <button 
                        className={`w-1/3 h-full leading-[26px] transition-all border-l border-r rounded-sm 
                        ${isSpecial === 'Standard' ? 
                        'bg-[#24AEE4] text-white shadow-lg' : 
                        'text-black/80 border border-slate-500 shadow-inner mx-[1px]'}`} 
                        onClick={()=>setIsSpecial('Standard')}>
                        Standard
                    </button>
                    <button 
                        className={`w-1/3 h-full leading-[26px] transition-all rounded-sm 
                        ${isSpecial === 'Special' ? 
                        'bg-[#24AEE4] text-white shadow-lg' : 
                        'text-black/80 border border-slate-500 shadow-inner'}`} 
                        onClick={()=>setIsSpecial('Special')}>
                        Special
                    </button>
                </div>                       
              </div>
              <div className='flex h-[32px] border-[#ccc] border rounded-md items-center cursor-pointer text-[13px] mt-3'>
                <p className='h-[32px] px-3 leading-[30px] border-r w-[100px] grow-0 shrink-0'>Risk Class</p>
                <div className='flex items-stretch h-[28px] w-full text-center px-[1px]'>
                    <button 
                        className={`w-1/3 h-full leading-[26px] transition-all rounded-sm 
                        ${riskClass === '' ? 
                        'bg-[#24AEE4] text-white shadow-lg' : 
                        'text-black/80 border border-slate-500 shadow-inner'}`} 
                        onClick={()=>setRiskClass('')}>
                        All
                    </button>
                    <button 
                        className={`w-1/3 h-full leading-[26px] transition-all border-l border-r rounded-sm 
                        ${riskClass === 'Low' ? 
                        'bg-[#24AEE4] text-white shadow-lg' : 
                        'text-black/80 border border-slate-500 shadow-inner mx-[1px]'}`} 
                        onClick={()=>setRiskClass('Low')}>
                        Low
                    </button>
                    <button 
                        className={`w-1/3 h-full leading-[26px] transition-all rounded-sm 
                        ${riskClass === 'Medium' ? 
                        'bg-[#24AEE4] text-white shadow-lg' : 
                        'text-black/80 border border-slate-500 shadow-inner'}`} 
                        onClick={()=>setRiskClass('Medium')}>
                        Medium
                    </button>
                    <button 
                        className={`w-1/3 h-full leading-[26px] transition-all rounded-sm 
                        ${riskClass === 'High' ? 
                        'bg-[#24AEE4] text-white shadow-lg' : 
                        'text-black/80 border border-slate-500 shadow-inner'}`} 
                        onClick={()=>setRiskClass('High')}>
                        High
                    </button>
                </div>                       
              </div>
              <div className='flex h-[32px] border-[#ccc] border rounded-md items-center cursor-pointer text-[13px] mt-3'>
                <p className='h-[32px] px-3 leading-[30px] border-r w-[200px] grow-0 shrink-0'>Compliance Risk Rating</p>
                <div className='flex items-stretch h-[28px] w-full text-center px-[1px]'>
                    <button 
                        className={`w-1/2 h-full leading-[26px] transition-all rounded-sm 
                        ${compRR === '' ? 
                        'bg-[#24AEE4] text-white shadow-lg' : 
                        'text-black/80 border border-slate-500 shadow-inner'}`} 
                        onClick={()=>setCompRR('')}>
                        All
                    </button>
                    <button 
                        className={`w-1/2 h-full leading-[26px] transition-all border-l border-r rounded-sm 
                        ${compRR === 'High' ? 
                        'bg-[#24AEE4] text-white shadow-lg' : 
                        'text-black/80 border border-slate-500 shadow-inner mx-[1px]'}`} 
                        onClick={()=>setCompRR('High')}>
                        High
                    </button>
                </div>                       
              </div>          
              <button className='text-white h-[30px] bg-black/80 hover:bg-black rounded-sm text-center w-[90px] leading-[30px] text-[13px] mt-3'>
              {
                loading ? 
                <div className='flex w-full justify-center h-full items-center'>
                    <CircularProgress            
                    size={20}
                    thickness={3}
                    value={80}
                    color={'inherit'}
                    />
                </div> : <div  onClick={getActivities} className='w-full h-full text-center'>Apply</div>
                }
              </button>
              </div>
            </div>
        </div>

        {/* details and enquiry modal  */}
        <div className={ activity === '' ? 'hidden' : 'absolute w-full h-full bg-black/80 top-0 left-0 flex items-center justify-center transition-all' }>
            <div className="rounded-md shadow-lg p-4 relative w-[90%] h-[90%] bg-[#F5F5F5] overflow-y-scroll" ref={detailsModalRef}>
              
                <div className='w-full border rounded-md shadow-lg bg-white p-4'>
    
                    <div className='border px-3 rounded-sm my-1'>
                        <p className='text-[14px] font-semibold text-[#555] leading-[30px] border-b'>Activity Master: Activity Master Number</p>
                        <p className='text-[14px] leading-[30px] text-green-600'>{activity['Activity Master: Activity Master Number']}</p>
                    </div>
                    <div className='border px-3 rounded-sm my-1'>
                        <p className='text-[14px] font-semibold text-[#555] leading-[30px] border-b'>Zone</p>
                        <p className='text-[14px] leading-[30px] text-green-600'>{activity['Zone']}</p>
                    </div>
                    <div className='border px-3 rounded-sm my-1'>
                        <p className='text-[14px] font-semibold text-[#555] leading-[30px] border-b'>Activity Code</p>
                        <p className='text-[14px] leading-[30px] text-green-600'>{activity['Activity Code']}</p>
                    </div>
                    {/* Activity Name  */}
                    {
                        language === 'English' ? 
                        <div className='border px-3 rounded-sm my-1'>
                            <p className='text-[14px] font-semibold text-[#555] leading-[30px] border-b'>Activity Name</p>
                            <p className='text-[14px] leading-[30px] text-green-600'>
                                {activity['Activity Name']}
                            </p>
                        </div> :
                        <div className='border px-3 rounded-sm my-1'>
                            <p className='text-[14px] font-semibold text-[#555] leading-[30px] border-b'>Activity Name (Arabic)</p>
                            <p className='text-[14px] leading-[30px] text-green-600'>
                                {activity['Activity Name (Arabic)']}
                            </p>
                        </div>
                    }
                    <div className='border px-3 rounded-sm my-1'>
                        <p className='text-[14px] font-semibold text-[#555] leading-[30px] border-b'>Minimum Share Capital</p>
                        <p className='text-[14px] leading-[30px] text-green-600'>{activity['Minimum Share Capital']}</p>
                    </div>
                    {/* License Type  */}
                    {
                        language === 'English' ?
                        <div className='border px-3 rounded-sm my-1'>
                            <p className='text-[14px] font-semibold text-[#555] leading-[30px] border-b'>License Type</p>
                            <p className='text-[14px] leading-[30px] text-green-600'>
                                {activity['License Type']}
                            </p>
                        </div> :
                        <div className='border px-3 rounded-sm my-1'>
                            <p className='text-[14px] font-semibold text-[#555] leading-[30px] border-b'>License Type (Arabic)</p>
                            <p className='text-[14px] leading-[30px] text-green-600'>
                            {activity['License Type (Arabic)']}
                            </p>
                        </div>
                    }
                    <div className='border px-3 rounded-sm my-1'>
                        <p className='text-[14px] font-semibold text-[#555] leading-[30px] border-b'>Is Not Allowed For Coworking (ESR)</p>
                        <p className='text-[14px] leading-[30px] text-green-600'>{activity['Is Not Allowed for Coworking(ESR)']}</p>
                    </div>
                    <div className='border px-3 rounded-sm my-1'>
                        <p className='text-[14px] font-semibold text-[#555] leading-[30px] border-b'>RAKEZ HSE Risk Classification</p>
                        <p className='text-[14px] leading-[30px] text-green-600'>{activity['RAKEZ HSE Risk Classification']}</p>
                    </div>
                    <div className='border px-3 rounded-sm my-1'>
                        <p className='text-[14px] font-semibold text-[#555] leading-[30px] border-b'>Compliance Risk Rating</p>
                        <p className='text-[14px] leading-[30px] text-green-600'>{activity['Compliance Risk Rating']}</p>
                    </div>
                    <div className='border px-3 rounded-sm my-1'>
                        <p className='text-[14px] font-semibold text-[#555] leading-[30px] border-b'>Is Special</p>
                        <p className='text-[14px] leading-[30px] text-green-600'>{activity['Is Special']}</p>
                    </div>
                    <div className='border px-3 rounded-sm my-1'>
                        <p className='text-[14px] font-semibold text-[#555] leading-[30px] border-b'>Activity Price</p>
                        <p className='text-[14px] leading-[30px] text-green-600'>{activity['Activity Price']}</p>
                    </div>
                    {/* Activity Group  */}
                    {
                        language === 'English' ?
                        <div className='border px-3 rounded-sm my-1'>
                            <p className='text-[14px] font-semibold text-[#555] leading-[30px] border-b'>Activity Group</p>
                            <p className='text-[14px] leading-[30px] text-green-600'>{activity['Activity Group']}</p>
                        </div> :
                        <div className='border px-3 rounded-sm my-1'>
                            <p className='text-[14px] font-semibold text-[#555] leading-[30px] border-b'>Activity Group (Arabic)</p>
                            <p className='text-[14px] leading-[30px] text-green-600'>{activity['Activity Group (Arabic)']}</p>
                        </div>
                    }
                    
                    {/* Segment Name  */}
                    {
                        language === 'English' ? 
                        <div className='border px-3 rounded-sm my-1'>
                            <p className='text-[14px] font-semibold text-[#555] leading-[30px] border-b'>Segment Name English</p>
                            <p className='text-[14px] leading-[30px] text-green-600'>
                            {activity['Segment Name English']}
                            </p>
                        </div> :
                        <div className='border px-3 rounded-sm my-1'>
                            <p className='text-[14px] font-semibold text-[#555] leading-[30px] border-b'>Segment Name Arabic</p>
                            <p className='text-[14px] leading-[30px] text-green-600'>
                            {activity['Segment Name Arabic']}
                            </p>
                        </div>
                    }
                    {/* Description  */}
                    {
                        language === 'English' ? 
                        <div className='border px-3 rounded-sm my-1'>
                            <p className='text-[14px] font-semibold text-[#555] leading-[30px] border-b'>Description</p>
                            <p className='text-[14px] leading-[30px] text-green-600'>
                            {activity['Description']}
                            </p>
                        </div> :
                        <div className='border px-3 rounded-sm my-1'>
                            <p className='text-[14px] font-semibold text-[#555] leading-[30px] border-b'>Description Arabic</p>
                            <p className='text-[14px] leading-[30px] text-green-600'>
                            {activity['Description Arabic']}
                            </p>
                        </div>
                    }
                    <div className='border px-3 rounded-sm my-1'>
                        <p className='text-[14px] font-semibold text-[#555] leading-[30px] border-b'>Qualification Requirement</p>
                        <p className='text-[14px] leading-[30px] text-green-600'>{activity['Qualification Requirement']}</p>
                    </div>
                    <div className='border px-3 rounded-sm my-1'>
                        <p className='text-[14px] font-semibold text-[#555] leading-[30px] border-b'>Documents Required</p>
                        <p className='text-[14px] leading-[30px] text-green-600'>{activity['Documents Required']}</p>
                    </div>
                    <div className='flex items-center'>
                        <div className='grow shrink h-0 border-b border-dashed'></div>
                        <p className='grow-0 shrink-0'>Enquire About This Activity</p>
                        <div className='grow shrink h-0 border-b border-dashed'></div>
                    </div>
                    <form onSubmit={(e)=>handleContact(e)} className='border rounded-sm mt-2 p-4'>
                        <div className='w-full'>
                            <p>Name:</p>
                            <input type="text" name='name' value={form.name} onChange={handleForm} className='h-[36px] border rounded-sm px-3 outline-none w-full'/>
                        </div>
                        <div className='w-full my-2'>
                            <p>Email:</p>
                            <input type="email" name='email' value={form.email} onChange={handleForm} className='h-[36px] border rounded-sm px-3 outline-none w-full'/>
                        </div>
                        <div className='w-full my-2'>
                            <p>Phone Number:</p>
                            <input type="text" name='phone' value={form.phone} onChange={handleForm} className='h-[36px] border rounded-sm px-3 outline-none w-full'/>
                        </div>
                        <div className='w-full my-2'>
                            <p>Message:</p>
                            <textarea type="text" name='message' value={form.message} onChange={handleForm} className='h-[72px] border rounded-sm px-3 outline-none w-full'></textarea>
                        </div>
                        <div className='flex justify-end pt-2 bg-white'>
                            <button className='bg-black text-white rounded-md leading-[30px] px-4 text-[13px] w-[150px]'>
                                {
                                    contactLoading ?
                                    <div className='flex w-full justify-center items-center h-[30px]'>
                                        <CircularProgress            
                                        size={20}
                                        thickness={3}
                                        value={80}
                                        color={'inherit'}
                                        />
                                    </div> : 'Send Enquiry'
                                }
                                
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
