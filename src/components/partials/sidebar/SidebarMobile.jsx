import React from "react";

import { Link } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";

import { setPage, setSidebarMobile } from '../../../redux/sidebarSlice';

import logoLarge from "./../../images/logo_large.png";

import {BASE_URL_NODEJS} from '../../../redux/constants';

import {
  BsHouseDoor,
  BsGrid3X3Gap,
  BsFillPersonFill,
  BsFillPatchQuestionFill,
  BsFillExclamationCircleFill,
  BsFacebook
} from "react-icons/bs";
import { MdContacts, MdRocketLaunch } from "react-icons/md";
import { BiCalendar, BiLinkAlt, BiSolidLockAlt } from "react-icons/bi";
import { TiDocumentText } from "react-icons/ti";
import { IoSpeedometerOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export default function SidebarMobile() { 
  const [roleId] = React.useState(parseInt(secureLocalStorage.getItem('user')?.role_id));
  const [roleCode] = React.useState(secureLocalStorage.getItem('user')?.role_code);
  const [loggedOut,setLoggedOut] = React.useState(false); 
  const [subMenu,setSubMenu] = React.useState(false);
  const [aclList] = React.useState(secureLocalStorage.getItem('acl'));

  const { sidebarMobile, page } = useSelector(state => state.sidebar)
  const dispatch = useDispatch()

  // if ( !document.cookie ) { window.location.href = "/login"; }
  // console.log(document.cookie)

  React.useEffect(()=>{
    if ( !document.cookie.split(' ')[1] ) { window.location.href = "/login"; }
  },[loggedOut])

  const logout = () => {
    const token = document.cookie.split('=')[1];
    const url = `${BASE_URL_NODEJS}/auth/logout`;

    axios.post(url
    //   , {
    //   method: "POST",
    //   // headers: {
    //   //   // Authorization: `Bearer ${token}`,
    //   //   "Content-Type": "application/json", // Specify the content type if needed
    //   // },
    //   // You can include a request body if your API requires it
    //   // body: JSON.stringify({}),
    // }
    ).then((response) => {
        if(response.status === 200){
          document.cookie = "access=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          secureLocalStorage.clear();
          setLoggedOut(true)
        }
        return response;        
        // If your API returns data in the response body, you can access it here
        // response.json().then(data => { /* Handle the data */ });
    }).catch((error) => {
        // Handle errors
        console.log(error);
    });
  };

  const css1 = 
    "bg-[#0c0c0c] w-[250px]  hover:transition-all h-screen cursor-pointer border-r border-black/30 flex flex-col text-white fixed overflow-y-scroll scrollbar_hidden";
    const dropdownLinkCss = 'w-[250px] bg-[#0c0c0c] shadow-md text-[14px] mt-[1px] flex items-center gap-2 hover:text-white hover:bg-[#1f7294]';

    // console.log('sidebarMobile');
    const moreAclList = aclList?.filter((item)=>{
      return parseInt(item.feature_type_id) === 4
    })
    // console.log(moreAclList)

    let moreAccess = false;
    moreAclList?.forEach((item)=>{
      if(parseInt(item.is_permissible) === 1){
        moreAccess = true;
      }
    })
    // console.log(moreAccess)
    // console.log(moreAclList.filter((item)=>{
    //   return item.feature_name.toLowerCase() === "member list";
    // }))
  return (
    <div style={{zIndex:10}}
      className={
        sidebarMobile === ""
          ? css1
          : sidebarMobile
          ? `${css1} animate-show_sidebar_mobile overflow-y-scroll scrollbar_hidden`
          : `${css1} animate-hide_sidebar_mobile overflow-y-scroll scrollbar_hidden`
      }
    >
      <div className="h-[24px] w-[24px] border rounded-full border-white flex items-center justify-center absolute right-[16px] top-[16px] shadow-lg shadow-white/30" onClick={()=>dispatch(setSidebarMobile(false))}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg  fill-white" viewBox="0 0 16 16">
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
        </svg>
      </div>
      <div className="h-[80px] flex items-center  grow-0 shrink-0 pl-4">     
          <img src={logoLarge} className="h-[61px]" alt="gtf-logo-large"/>
      </div>
      <div className="w-full mt-2 grow-0 shrink-0">
{/* dashboardContent */}
        {
          aclList?.filter((item)=>{
            return item.feature_name.toLowerCase() === "dashboard";
          })[0].is_permissible === 1 ? 
          <Link to="/"
          className={
            page === "dashboard"
              ? "flex items-center h-[50px] w-full pl-[14px] bg-[#1f7294] text-white"
              : "flex items-center h-[50px] w-full pl-[14px] hover:bg-[#1f7294] hover:text-white hover:transition-all"
          }
          onClick={()=>dispatch(setPage('dashboard'))}
        >
          <p>
            <BsHouseDoor className="text-[20px]" />
          </p>
          <p className={"ml-2 animate-sidebar_text text-[14px]"}>
            Dashboard
          </p>
          </Link> : null
        }
        
{/* queries */}
        <Link to="/queries"
          className={
            page === "queries"
              ? "flex items-center h-[50px] w-full pl-[14px] bg-[#1f7294] text-white my-[1px]"
              : "flex items-center h-[50px] w-full pl-[14px] hover:bg-[#1f7294] hover:text-white hover:transition-all my-[1px]"
          }
          onClick={()=>dispatch(setPage('queries'))}
        >
          <p>
            <BsFillPatchQuestionFill className="text-[20px]" />
          </p>
          <p className={"ml-2 animate-sidebar_text text-[14px]"}>
            Queries
          </p>
        </Link>   
{/* more */}
{
   moreAccess ? 
        <div className={`${subMenu ? 'h-full transition-all mb-4' : 'h-[50px] transition-all overflow-hidden mb-4'}`}>
          <div
          className={`flex items-center justify-between h-[50px] w-full pl-[14px] text-white hover:bg-[#1f7294] ${subMenu ? 'pl-[14px]  hover:transition-all ' : (page === 'memberlist' || page === 'spam-marking' || page === 'fraud-clicks' || page === 'keyword-planner' || page === 'report-builder' || page === 'facebook-pages' || page === 'speed-test' ? 'bg-[#1f7294] shrink-0' : 'hover:transition-all')}`} onClick={()=>setSubMenu(!subMenu)}>              
              <div className="flex items-center">
                <p>
                  <BsGrid3X3Gap className="text-[20px]" />
                </p>
                <p className={"ml-2 animate-sidebar_text text-[14px]"}>More</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down mr-2" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
              </svg>
          </div>          
          <div>
              {
                moreAclList.filter((item)=>{
                  return item.feature_name.toLowerCase() === "member list";
                })[0].is_permissible === 1 ?
                <Link to="/memberlist" className={dropdownLinkCss} onClick={()=>dispatch(setPage('memberlist'))}>
                  <MdContacts className='text-[20px] ml-10'/>
                  <p className="h-[36px] leading-[36px]">Memberlist</p>
                </Link> : null
              }
              {
                moreAclList.filter((item)=>{
                  return item.feature_name.toLowerCase() === "access control list";
                })[0].is_permissible === 1 ?
                <Link to="/access-control-list" className={dropdownLinkCss} onClick={()=>dispatch(setPage('access-control-list'))}>
                  <BiSolidLockAlt className={"text-[20px] ml-10"} />
                  <p className="h-[36px] leading-[36px]">Access Control List</p>
                </Link> : null
              }
              {
                moreAclList.filter((item)=>{
                  return item.feature_name.toLowerCase() === "spam marking";
                })[0].is_permissible === 1 ?
                <Link to="/spam-marking" className={dropdownLinkCss} onClick={()=>dispatch(setPage('spam-marking'))}>
                  <BsFillExclamationCircleFill className={"text-[20px] ml-10"} />
                  <p className="h-[36px] leading-[36px]">Spam Marking</p>
                </Link> : null
              }
              {
               moreAclList.filter((item)=>{
                return item.feature_name.toLowerCase() === "fraud clicks";
              })[0].is_permissible === 1 ?
                <Link to="/fraud-clicks" className={dropdownLinkCss} onClick={()=>dispatch(setPage('fraud-clicks'))}>
                  <BiCalendar className={"text-[20px] ml-10"} />
                  <p className="h-[36px] leading-[36px]">Fraud Clicks</p>
                </Link> : null
              }
              {
                moreAclList.filter((item)=>{
                  return item.feature_name.toLowerCase() === "speed tester";
                })[0].is_permissible === 1 ?
                <Link to="/speed-test" className={dropdownLinkCss} onClick={()=>dispatch(setPage('speed-test'))}>
                  <IoSpeedometerOutline className={"text-[20px] ml-10"} />
                  <p className="h-[36px] leading-[36px]">Speed Test</p>
                </Link> : null
              }
              {
                moreAclList.filter((item)=>{
                  return item.feature_name.toLowerCase() === "keyword planner";
                })[0].is_permissible === 1 ?
                <Link to="/keyword-planner" className={dropdownLinkCss} onClick={()=>dispatch(setPage('keyword-planner'))}>
                  <MdRocketLaunch className={"text-[20px] ml-10"} />
                  <p className="h-[36px] hover:text-white hover:bg-[#1f7294] leading-[36px]">Keyword Planner</p>
                </Link> : null
              }
              {
                moreAclList.filter((item)=>{
                  return item.feature_name.toLowerCase() === "report builder";
                })[0].is_permissible === 1 ?
                <Link to="/report-builder" className={dropdownLinkCss} onClick={()=>dispatch(setPage('report-builder'))}>
                  <TiDocumentText className={"text-[20px] ml-10"} />
                  <p className="h-[36px] hover:text-white hover:bg-[#1f7294] leading-[36px]">Report Builder</p>
                </Link> : null
              }
              {
                moreAclList.filter((item)=>{
                  return item.feature_name.toLowerCase() === "facebookpage";
                })[0].is_permissible === 1 ?
                <Link to="/facebook-pages" className={dropdownLinkCss} onClick={()=>dispatch(setPage('facebook-pages'))}>
                  <BsFacebook className={"text-[20px] ml-10"} />
                  <p className="h-[36px] hover:text-white hover:bg-[#1f7294] leading-[36px]">Facebook Pages</p>
                </Link> : null
              }
              {
                moreAclList.filter((item)=>{
                  return item.feature_name.toLowerCase() === "facebook query mapping";
                })[0].is_permissible === 1 ?
                <Link to="/facebook-mapping" className={dropdownLinkCss} onClick={()=>dispatch(setPage('facebook-mapping'))}>
                  <BiLinkAlt className={"text-[20px] ml-10"} />
                  <p className="h-[36px] hover:text-white hover:bg-[#1f7294] leading-[36px]">Facebook Mapping</p>
                </Link> : null
              }
          </div>
        </div> : null
}
        

      </div>
      {/* Profile */}
      <div className="grow shrink flex flex-col justify-end">
        <div className="w-full">
          <div className="flex items-center pl-[14px] h-[46px] border-t border-b border-white/50">
            <BsFillPersonFill className="text-white text-[20px]" />
            <p className={"ml-2 text-[15px] w-full"}>{secureLocalStorage.getItem('user')?.user_name}</p>
          </div>
          <div
            className={"flex transition-all text-[12px]"}
          >
            <Link to='/edit-profile' className="bg-[#0c0c0c] hover:bg-[#1f7294] text-white h-[40px] leading-[40px] text-center w-1/2 border-r border-white ">
              Edit
            </Link>
            <button className="bg-[#0c0c0c] hover:bg-[#1f7294] text-white h-[40px] leading-[40px] text-center w-1/2" onClick={()=>logout()}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
