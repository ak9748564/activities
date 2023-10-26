import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setItems, setTotalItems } from '../../redux/paginationSlice';
import ItemsCount from '../../components/pagination/ItemsCount';
import PageNumbers from '../../components/pagination/Pagenumbers';

export default function Home() {
  const [loading,setLoading] = React.useState(false);

  const currentItems = useSelector(state=>state.pagination.currentItems);
  const currentPage = useSelector(state=>state.pagination.currentPage);

  const dispatch = useDispatch();

    React.useEffect(()=>{
        setLoading(true);
        axios.get(`http://localhost:4000/getActivities?currentPage=${currentPage-1}`,{withCredentials:false})
        .then((res)=>{
            console.log(res)
            dispatch(setItems(res?.data?.data.response))
            dispatch(setTotalItems(res.data.data.recordCount))
            setLoading(false)
        }).catch((err)=>{console.log(err);setLoading(false)})
    },[currentPage])

  return (
    <div className='h-screen w-screen p-10'>
      <h1 className='text-[24px] font-medium text-center leading-[40px]'>Activities Listing</h1>
      <div className='overflow-scroll h-[calc(100vh-160px)]'>
        <table className="min-w-[1400px] w-full">
          <thead className='w-full sticky top-0 bg-white' style={{zIndex:1}}>
            <tr className='w-full text-left text-[14px] bg-[#ccc]'>
              <th className={"p-1 h-[36px] font-semibold min-w-[300px]"}>Activity Master: Activity Master Number</th>               
              <th className={"p-1 h-[36px]  font-semibold min-w-[300px]"}>Zone</th>        
              <th className={"p-1 h-[36px]  font-semibold min-w-[300px]"}>Activity Code</th>
              <th className={"p-1 h-[36px]  font-semibold min-w-[300px]"}>Activity Name</th>
              <th className={"p-1 h-[36px]  font-semibold min-w-[300px]"}>Activity Name Arabic</th>  
              <th className={"p-1 h-[36px]  font-semibold min-w-[300px]"}>Status</th>                     
              <th className={"p-1 h-[36px]  font-semibold min-w-[300px]"}>Minimum Share Capital</th>                     
              <th className={"p-1 h-[36px]  font-semibold min-w-[300px]"}>License Type</th>                     
              <th className={"p-1 h-[36px]  font-semibold min-w-[300px]"}>License Type Arabic</th>                     
              <th className={"p-1 h-[36px]  font-semibold min-w-[300px]"}>Is Not Allowed For Coworking (ESR)</th>                     
              <th className={"p-1 h-[36px]  font-semibold min-w-[300px]"}>RAKEZ HSE Risk Classification</th>                     
              <th className={"p-1 h-[36px]  font-semibold min-w-[300px]"}>Compliance Risk Rating</th>                     
              <th className={"p-1 h-[36px]  font-semibold min-w-[300px]"}>Is Special</th>                     
              <th className={"p-1 h-[36px]  font-semibold min-w-[300px]"}>Activity Price</th>                     
              <th className={"p-1 h-[36px]  font-semibold min-w-[300px]"}>Activity Group</th>                     
              <th className={"p-1 h-[36px]  font-semibold min-w-[300px]"}>Activity Group Arabic</th>                     
              <th className={"p-1 h-[36px]  font-semibold min-w-[300px]"}>Segment Name English</th>                     
              <th className={"p-1 h-[36px]  font-semibold min-w-[300px]"}>Segment Name Arabic</th>                     
              <th className={"p-1 h-[36px]  font-semibold min-w-[300px]"}>Description</th>                     
              <th className={"p-1 h-[36px]  font-semibold min-w-[300px]"}>Description Arabic</th>                     
              <th className={"p-1 h-[36px]  font-semibold min-w-[300px]"}>Qualification Requirement</th>                     
              <th className={"p-1 h-[36px]  font-semibold min-w-[300px]"}>Documents Required</th>                                          
            </tr>
          </thead>
          <tbody className='text-[13px]'>
          {
            currentItems?.map((item,index)=>{
              return (
<tr className="border-t border-b h-[45px] text-[13px] hover:bg-[#eee] cursor-pointer" key={index}>

  <td className="px-1">{item['Activity Master: Activity Master Number']}</td>
  <td className="px-1">{item['Zone']}</td>
  <td className="px-1">{item['Activity Code']}</td>
  <td className="px-1" title={item.Message}>{item['Activity Name']}</td>
  <td className="px-1">{item['Activity Name Arabic']}</td>
  <td className="px-1">{item['Status']}</td>
  <td className="px-1">{item['Minimum Share Capital']}</td>
  <td className="px-1">{item['License Type']}</td>
  <td className="px-1">{item['License Type Arabic']}</td>
  <td className="px-1">{item['Is Not Allowed For Coworking (ESR)']}</td>
  <td className="px-1">{item['RAKEZ HSE Risk Classification']}</td>
  <td className="px-1">{item['Compliance Risk Rating']}</td>
  <td className="px-1">{item['Is Special']}</td>
  <td className="px-1">{item['Activity Price']}</td>
  <td className="px-1">{item['Activity Group']}</td>
  <td className="px-1">{item['Activity Group Arabic']}</td>
  <td className="px-1">{item['Segment Name English']}</td>
  <td className="px-1">{item['Segment Name Arabic']}</td>
  <td className="px-1">{item['Description']}</td>
  <td className="px-1">{item['Description Arabic']}</td>
  <td className="px-1">{item['Qualification Requirement']}</td>
  <td className="px-1">{item['Documents Required']}</td>
</tr>)})
    }
          </tbody>         
       </table> 
      </div> 
      <div className='flex items-center justify-between h-[40px]'>
        <ItemsCount/>
        <PageNumbers/>
      </div>     
    </div>
  )
}