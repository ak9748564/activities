import React from "react";

import { useDispatch, useSelector } from "react-redux";

import SearchFilter from "../filter/SearchFilter";

import { setTab } from "../../redux/queriesSlice";
import {setRefresh} from "../../redux/refreshSlice";
import { setDefault } from "../../redux/paginationSlice";

import { BsGlobe } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsGoogle } from "react-icons/bs";
import { HiOutlineRefresh } from "react-icons/hi";

export default function Tabs() {
  const [refreshHover, setRefreshHover] = React.useState(false);

  //redux states
  const tab = useSelector((state) => state.queries.tab);
  const actions = useSelector(state => state.spamDelete.actions);
  // const pagination = useSelector((state) => state.pagination);

  const dispatch = useDispatch();

  // console.log('tabs');
  return (
    <div>
      {tab === "microsites" ? (
        <div className="flex s3:flex-row flex-col items-center  s3:justify-between text-[15px] border-b bg-[#eee]">
          <div
            className={
              actions
                ? "hidden"
                : "flex items-end h-[42px] m-auto w-full s3:hidden"
            }
          >
            <button
              className={
                "py-2 w-1/3 s3:w-[180px] border-b-2 border-[#317d9c] rounded-sm text-blue-600 flex items-center justify-center gap-2 transition-all"
              }
              onMouseOver={() => setRefreshHover(true)}
              onMouseOut={() => setRefreshHover(false)}
            >
              <BsGlobe className="text-[#317d9c] text-[20px]" />
              <p className="hidden s3:block">Microsites</p>
            </button>
            <div
              className={
                "py-2  w-1/3 s3:w-[180px] border-b-2 border-[#ccc] flex items-center gap-2 justify-center mx-2"
              }
              onClick={() => {dispatch(setDefault());dispatch(setTab('facebook'))}}
            >
              <BsFacebook className={"text-[20px]"} />
              <p className="hidden s3:block">Facebook</p>
            </div>
            <div
              className={
                "py-2  w-1/3 s3:w-[180px] border-b-2 border-[#ccc] flex items-center justify-center gap-2"
              }
              onClick={() => {dispatch(setDefault());dispatch(setTab('googleforms'))}}
            >
              <BsGoogle className="text-[20px]" />
              <p className="hidden s3:block">Google Forms</p>
            </div>
          </div>
          <div className="s3:flex items-end h-[42px] m-auto w-full hidden">
            <button
              className={
                "py-2 w-1/3 s3:w-[180px] border-b-2 border-[#317d9c] rounded-sm flex items-center justify-center gap-2 transition-all text-[#317d9c] cursor-pointer"
              }
              onMouseOver={() => setRefreshHover(true)}
              onMouseOut={() => setRefreshHover(false)}
            >
              <BsGlobe className="text-[#317d9c] text-[20px]" />
              <p className="hidden s3:block">Microsites</p>
              <div
                onClick={() => {
                  dispatch(setRefresh(true));
                  dispatch(setDefault());
                  dispatch(setRefresh(true));
                }}
                className={
                  refreshHover
                    ? "text-[#317d9c] hidden s3:block"
                    : "text-[#eee] hidden s3:block"
                }
              >
                <HiOutlineRefresh className="text-[16px] cursor-pointer active:-rotate-180 active:transition-all inline" />
              </div>
            </button>
            <div 
              className={
                "py-2  w-1/3 s3:w-[180px] border-b-2 border-[#ccc] flex items-center gap-2 justify-center mx-2 cursor-pointer"
              }
              onClick={() => {dispatch(setDefault());dispatch(setTab('facebook'))}}
            >
              <BsFacebook className={"text-[20px]"} />
              <p className="hidden s3:block">Facebook</p>
              <div className=" hidden s3:block ">
                <HiOutlineRefresh className="text-[16px] cursor-pointer active:-rotate-180 active:transition-all inline text-[#eee]" />
              </div>
            </div>
            <div
              className={
                "py-2  w-1/3 s3:w-[180px] border-b-2 border-[#ccc] flex items-center justify-center gap-2 cursor-pointer"
              }
              onClick={() => {dispatch(setDefault());dispatch(setTab('googleforms'))}}
            >
              <BsGoogle className="text-[20px]" />
              <p className="hidden s3:block">Google Forms</p>
              <div className=" hidden s3:block">
                <HiOutlineRefresh className="text-[16px] cursor-pointer active:-rotate-180 active:transition-all inline text-[#eee]" />
              </div>
            </div>
          </div>
          <div className="pr-2 h-[42px] hidden s3:flex items-center">
            <SearchFilter />
          </div>
        </div>
      ) : tab === "facebook" ? (
        <div className="flex items-center justify-between text-[15px] border-b grow-0 shrink-0">          
          <div
            className={
              actions
                ? "hidden"
                : "flex items-end h-[42px] m-auto w-full s3:hidden bg-[#eee]"
            }
          >
            <div
              className={
                "py-2 w-1/3 s3:w-[180px] border-b-2 border-[#ccc] rounded-sm flex items-center justify-center gap-2 transition-all"
              }
              onClick={()=>{dispatch(setDefault());dispatch(setTab('microsites'))}}
            >
              <BsGlobe className="text-[20px]" />
              <p className="hidden s3:block">Microsites</p>
            </div>
            <button
              className={
                "py-2 border-b-2 border-[#317d9c] rounded-sm flex items-center w-1/3 justify-center mx-2 gap-2 text-[#317d9c]"
              }
            >
              <BsFacebook className="text-[20px] text-[#317d9c]" />
              <p className="hidden s3:block"> Facebook</p>
              <div
                className={"text-[#317d9c] hidden"}
                onClick={() => {
                  dispatch(setRefresh(true));
                  dispatch(setDefault());
                }}
              >
                <HiOutlineRefresh className="text-[16px] cursor-pointer active:-rotate-180 active:transition-all inline" />
              </div>
            </button>
            <div
              className={
                "py-2  w-1/3 s3:w-[180px] border-b-2 border-[#ccc] flex items-center justify-center gap-2"
              }
              onClick={()=>{dispatch(setDefault());dispatch(setTab('googleforms'))}}
            >
              <BsGoogle className="text-[20px]" />
            </div>
          </div>
          <div className="s3:flex items-end h-[42px] m-auto w-full hidden bg-[#eee]">
            <div
              className={
                "py-2 border-b-2 border-[#ccc] flex items-center w-[180px] justify-center gap-2 cursor-pointer"
              }
              onClick={() => {dispatch(setDefault());dispatch(setTab('microsites'))}}
            >
              <BsGlobe className="text-[20px]" />
              <p className="">Microsites</p>
              <div>
                <HiOutlineRefresh className="text-[16px] cursor-pointer active:-rotate-180 active:transition-all inline text-[#eee]" />
              </div>
            </div>
            <button
              className={
                "py-2 border-b-2 border-[#317d9c] rounded-sm flex items-center w-[180px] justify-center mx-2 gap-2 text-[#317d9c] cursor-pointer"
              }
              onMouseOver={() => setRefreshHover(true)}
              onMouseOut={() => setRefreshHover(false)}
            >
              <BsFacebook className="text-[20px]" />
              <p className=""> Facebook</p>
              <div
                className={refreshHover ? "text-[#317d9c]" : "text-[#eee]"}
                onClick={() => {
                  dispatch(setRefresh(true));
                  dispatch(setDefault());
                  dispatch(setRefresh(true));
                }}
              >
                <HiOutlineRefresh className="text-[16px] cursor-pointer active:-rotate-180 active:transition-all inline" />
              </div>
            </button>
            <div
              className={
                "py-2  w-1/3 s3:w-[180px] border-b-2 border-[#ccc] flex items-center justify-center gap-2 cursor-pointer"
              }
              onClick={() => {dispatch(setDefault());dispatch(setTab('googleforms'))}}
            >
              <BsGoogle className="text-[20px]" />
              <p className="hidden s3:block">Google Forms</p>
              <div>
                <HiOutlineRefresh className="text-[16px] cursor-pointer active:-rotate-180 active:transition-all inline text-[#eee]" />
              </div>
            </div>
          </div>
          <div className="pr-2 h-[42px] hidden s3:flex items-center bg-[#eee]">
            <SearchFilter />
          </div>
        </div>
      ) : (
        <div className="flex s3:flex-row flex-col items-center  s3:justify-between text-[15px] border-b">
          <div
            className={
              actions
                ? "hidden"
                : "flex items-end h-[42px] m-auto w-full s3:hidden bg-[#eee]"
            }
          >
            <div
              className={
                "py-2 w-1/3 s3:w-[180px] border-b-2 border-[#ccc] rounded-sm  flex items-center justify-center gap-2 transition-all cursor-pointer"
              }
              onClick={() => {dispatch(setDefault());dispatch(setTab('microsites'))}}
            >
              <BsGlobe className={"text-[20px]"} />
            </div>
            <div
              className={
                "py-2  w-1/3 s3:w-[180px] border-b-2 border-[#ccc] flex items-center gap-2 justify-center mx-2 cursor-pointer"
              }
              onClick={() => {dispatch(setDefault());dispatch(setTab('facebook'))}}
            >
              <BsFacebook className={"text-[20px]"} />
              <p className="hidden s3:block">Facebook</p>
            </div>
            <button
              className={
                "py-2 border-b-2 border-[#317d9c] rounded-sm flex items-center w-1/3 justify-center gap-2 text-[#317d9c]"
              }
            >
              <BsGoogle className="text-[20px]" />
            </button>
          </div>
          <div className="s3:flex items-end h-[42px] m-auto w-full hidden bg-[#eee]">
            <div
              className={
                "py-2 border-b-2 border-[#ccc] flex items-center w-[180px] justify-center gap-2 cursor-pointer"
              }
              onClick={() => {dispatch(setDefault());dispatch(setTab('microsites'))}}
            >
              <BsGlobe className="text-[20px]" />
              <p className=""> Microsites</p>
              <div>
                <HiOutlineRefresh className="text-[16px] cursor-pointer active:-rotate-180 active:transition-all inline text-[#eee]" />
              </div>
            </div>
            <div
              className={
                "py-2 border-b-2 border-[#ccc] flex items-center w-[180px] justify-center gap-2 mx-2 cursor-pointer"
              }
              onClick={() => {dispatch(setDefault());dispatch(setTab('facebook'))}}
            >
              <BsFacebook className="text-[20px]" />
              <p className=""> Facebook</p>
              <div>
                <HiOutlineRefresh className="text-[16px] cursor-pointer active:-rotate-180 active:transition-all inline text-[#eee]" />
              </div>
            </div>
            <button
              className={
                "py-2 border-b-2 border-[#317d9c] rounded-sm flex items-center w-[180px] justify-center gap-2 text-[#317d9c] cursor-pointer"
              }
              onMouseOver={() => setRefreshHover(true)}
              onMouseOut={() => setRefreshHover(false)}
            >
              <BsGoogle className="text-[20px]" />
              <p className="">Google Forms</p>
              <div
                className={refreshHover ? "text-[#317d9c]" : "text-[#eee]"}
                onClick={() => {
                  dispatch(setRefresh(true));
                  dispatch(setDefault());
                }}
              >
                <HiOutlineRefresh className="text-[16px] cursor-pointer active:-rotate-180 active:transition-all inline" />
              </div>
            </button>
          </div>
          <div className="pr-2 h-[42px] hidden s3:flex items-center bg-[#eee]">
            <SearchFilter />
          </div>
        </div>
      )}
    </div>
  );
}
