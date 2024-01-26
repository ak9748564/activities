import axios from "axios";
import React from "react"
import { BASE_URL_NODEJS } from "../../../redux/constants";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../../redux/paginationSlice";

  export default function TabsMemberList({tab, setTab}) {

    const [tabs,setTabs] = React.useState([])

    const dispatch = useDispatch();

    React.useEffect(()=>{
      axios.get(`${BASE_URL_NODEJS}/dashboard/pickList?pick_list_for=member-list`)
      .then(res=>setTabs(res.data.data[0])).catch(err=>console.log(err));
    },[])
    // console.log(tabs)   
    return (
      <div>
        <div className="s3:hidden px-2">
            <select
                id="tabs"
                name="tabs"
                className="block w-full rounded-md border-gray-300 focus:border-[#29AFE4] focus:ring-[#29AFE4] h-[39px] outline-none border mt-2 px-2 text-[14px] cursor-pointer"
                value={tab}
                onChange={(e)=>{setTab(e.target.value);dispatch(setCurrentPage(1))}}
            >
            {tabs.map((item) => ( <option key={item?.attribute_name} value={item?.attribute_name}>{item?.attribute_name} ({item?.value})</option> ))}
            </select>
        </div>
        <div className="hidden s3:block">
            <div className="border-b border-gray-200 px-3">
                <nav className="flex w-[800px]" aria-label="Tabs">
                {tabs.map((item) => (
                    <p
                    key={item}
                    className={`border-b-2 py-2 px-1 text-center text-sm font-medium cursor-pointer grow shrink 
                    ${item?.attribute_name === tab
                        ? 'border-[#29AFE4] text-[#29AFE4] cursor-pointer'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 cursor-pointer'}`                  
                    }
                    onClick={()=>{setTab(item?.attribute_name);dispatch(setCurrentPage(1))}}
                    >
                      <span>{item?.attribute_name}</span>
                      <span>&nbsp;({item?.value})</span>
                    </p>
                ))}
                </nav>
            </div>
        </div>
      </div>
    )
  }  