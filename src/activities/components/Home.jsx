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
import uae_mobile from './images/uae_mobile.jpg';
import { Link } from 'react-router-dom';

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
    <div className='h-[100dvh] w-screen'>
      <div className='w-full h-full flex items-center justify-center bg-cover' style={{backgroundImage:`url(${uae_mobile})`}}>
        <div className='w-full h-full flex flex-col justify-evenly items-center backdrop-brightness-50 p-10'>
          <p className='text-green-400 text-[20px] absolute left-4 top-4'>Galaxy Exhibitions</p>
          <p className='text-[25px] text-white/80'>Get Your Business in UAE</p>
          <button className='h-[40px] rounded-full w-[200px] leading-[40px] bg-white text-center text-black shadow-xl'>
            <Link to='activities-list'>See Activities</Link>
          </button>
        </div>
      </div>
    </div>
  )
}
