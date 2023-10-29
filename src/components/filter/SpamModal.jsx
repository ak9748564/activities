import React from 'react';

import axios from 'axios';
import secureLocalStorage from 'react-secure-storage';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';

import {RxCross2} from "react-icons/rx";
import { setSpamModal } from '../../redux/modalSlice';

const buttonCss = 'text-white h-[30px] bg-black/80 hover:bg-black rounded-sm text-center w-[90px] leading-[30px] text-[13px] inline';
const loadingAnimation = 
<div className='flex w-full justify-center h-full items-center'>
  <CircularProgress size={20} thickness={3} value={80} color={'inherit'} />
</div>;

export default function SpamModal() {
    const tab = useSelector(state => state.queries.tab);
    const loading = useSelector(state => state.queries.loading);
    const spamDeleteMicrositesArr = useSelector(state => state.spamDelete.spamDeleteMicrositesArr);
    const spamModal = useSelector(state => state.modal.SpamModal)
    // console.log(filters);
    const dispatch = useDispatch();

    const handleOK = () => {
      dispatch(setSpamModal(false));
      if(tab === "microsites"){
        for(let i=0;i<spamDeleteMicrositesArr.length;i++){
            axios.post(`api/Microsites/UpdateSpamMicrosite`,{
                QueryID:spamDeleteMicrositesArr[i],
                user_id:secureLocalStorage.getItem('user').user_id,
                user_name:secureLocalStorage.getItem('user').user_login_name,
                operation:"yes"
            })
            .then(res=>{console.log(res);})
            .catch(err=>console.log(err))
          } 
     }             
    }
    
    const handleCancel = () => { dispatch(setSpamModal(false)); }

    const ref = React.useRef();
    // React.useEffect(()=>{
    //   let close = (e) => { if(!ref.current.contains(e.target));dispatch(setSpamModal(false))}
    //   document.addEventListener('mousedown',close)
    //   return () => { document.removeEventListener('mousedown',close) }
    // },[])

  return (
    spamModal ?
    <div className="absolute p-10 top-0 left-0 w-full h-screen bg-black/50 flex items-center justify-center transition-all z-10">
          <div className="rounded-md shadow-lg p-4 bg-white relative w-full s2:w-[400px]" ref={ref}>
            <div onClick={()=>dispatch(setSpamModal(false))}>
              <RxCross2 className="text-[20px] absolute right-[18px] cursor-pointer"/>
            </div>
            <div className='mt-8 text-[13px]'>   
            <p className='text-[14px] mb-3'>Are you sure you want to spam {spamDeleteMicrositesArr.length} items?</p>     
            <button className={buttonCss}>{ loading ? loadingAnimation : <div>OK</div> }</button>
            <button className={`${buttonCss} ml-1`} onClick={()=>handleCancel()}>
              { loading ? loadingAnimation : <div>Cancel</div> }
            </button>
            </div>
          </div>
    </div> : null
  )
}