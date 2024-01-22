import React from 'react';
import uae_mobile from './images/uae_mobile.jpg';
import ActivityGroupFilter from '../../components/filter/ActivityGroupFilter';

export default function Home({
  activityGroup,
  activityGroupSelected,
  setActivityGroupSelected,
  // getActivities
}) {
  
  return (
    <div className='h-[100dvh] w-screen'>
      <div className='w-full h-full flex items-center justify-center bg-cover' style={{backgroundImage:`url(${uae_mobile})`}}>
        <div className='w-full h-full flex flex-col justify-center items-center backdrop-brightness-50 p-10'>
          <p className='text-green-400 text-[20px] absolute left-4 top-4'>Galaxy Exhibitions</p>
          <p className='absolute right-4 top-4 cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list fill-green-400" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
          </p>
          <p className='text-[25px] text-white/80'>Start Your Business in UAE</p>
          {/* <button className='h-[40px] rounded-full w-[200px] leading-[40px] bg-white text-center text-black shadow-xl hover:text-white/90 hover:bg-green-500 transition-all flex items-center justify-center gap-1 mt-6'>
            <Link to='activities-list'>
              See Activities</Link>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" fill="currentColor" class="bi bi-arrow-right transition-all" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
            </svg>
          </button> */}
          <div className='w-[310px] h-[36px] bg-white rounded-sm shadow-lg'>
            <ActivityGroupFilter 
            position='home' 
            activityGroup={activityGroup}
            activityGroupSelected={activityGroupSelected}
            setActivityGroupSelected={setActivityGroupSelected} />
          </div>
        </div>
      </div>
    </div>
  )
}
