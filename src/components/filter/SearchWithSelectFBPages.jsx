import axios from 'axios';
import React from 'react'
import useSWR from 'swr';
import { BASE_URL_NODEJS } from '../../redux/constants';

export default function SearchWithSelectFBPages() {
    const [agentList,setAgentList] = React.useState([]);
    const fetcher = (url) => axios.get(url).then(res => res);

  const { data, isLoading, isValidating } = useSWR(
    `${BASE_URL_NODEJS}/dashboard/picklist?pick_list_for=microsites`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false, 
    }
  );
console.log(data)

  React.useEffect(()=>{
    if(data !== undefined){
      setAgentList(data?.data?.data[0])
    }
  },[data,isLoading,isValidating])
  return (
    <div className='w-full relative'>
      <input type='search' className='relative'/>
      <div className='overflow-y-scroll max-h-[300px] absolute top-0 bg-white shadow-md z-100'>
        {
            agentList?.map((item)=>{
                if(item.attribute_code === 'agent_id'){
                    return <p className='text-[14px] leading-[28px]'>{item.value}</p>
                }
            })
        }
      </div>
    </div>
  )
}