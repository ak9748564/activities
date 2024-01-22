import React from 'react'
import { IoSearchOutline } from 'react-icons/io5';

export default function ActivityGroupFilter({
    activityGroup,
    getActivities,
    activityGroupSelected,
    setActivityGroupSelected,
    position
}) {
    const [listModal,setListModal] = React.useState(false);
    const [searchString,setSearchString] = React.useState('');    

    const listRef = React.useRef();
    React.useEffect(()=>{
        let close = (e) => {
        if(!listRef.current.contains(e.target)){ setListModal(false) }}
        document.addEventListener('mousedown',close)
        return () => { document.removeEventListener('mousedown',close) }
    },[])
    //  console.log(activityGroup)
  return (
    <div className='h-full w-full flex'>
        <div className='w-full h-full relative'>
            <p className='h-full w-full text-[14px] text-[#555] flex items-center px-3 active:border-green-400 cursor-pointer' onClick={()=>setListModal(true)}>
                {activityGroupSelected === '' ? 'Choose Your Business Type' : activityGroupSelected}
            </p>
            <div className={listModal ? 'h-0 w-full overflow-visible relative mt-2' : 'hidden'} ref={listRef}>
                <div className='bg-white rounded-sm shadow-2xl absolute top-0 left-0 w-full'>
                    <div className='bg-white p-2'>
                        <input 
                        type="search" 
                        value={searchString} 
                        className='h-[36px] px-2 text-[14px] border rounded-sm w-full bg-white' 
                        onChange={(e)=>{
                            setSearchString(e.target.value.toString().toLowerCase())
                            if(searchString === ''){
                                setActivityGroupSelected('')
                            }
                        }}
                        placeholder='Search Any Business'
                        />
                    </div>
                    <div className='p-2 max-h-[200px] overflow-y-scroll'>
                        <div className='border p-2 rounded-sm'>
                            {
                                activityGroup?.data?.filter((item)=>{
                                    return item?.toString()?.toLowerCase().includes(searchString)
                                })?.map((item)=>{
                                    return(
                                        <p className='leading-[36px] text-[14px] px-2 border-b ellipsis hover:bg-[#eee] cursor-pointer'
                                        onClick={()=>{
                                            setActivityGroupSelected(item);
                                            if(position==='home'){
                                                window.location.href = '/activities-list'
                                            }
                                        }} 
                                        key={item}>
                                            {item}
                                        </p>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {
            position === 'home' ? null :
            <button className='h-full w-[30px] text-center text-[14px] flex items-center justify-center bg-black text-white rounded-r-sm shrink-0' onClick={getActivities}>
            <IoSearchOutline className=''/></button>
        }
              
    </div>
  )
}
