import axios from "axios";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL_ACT } from "../../redux/constants";
import { useDispatch, useSelector } from "react-redux";
import { setActivityGroupSelected } from "../../redux/activityGroupSlice";
import { setActivities, setActivityGroup } from "../../redux/activityWhole";

export default function ActivityGroupFilter({position}) {
  const navigate = useNavigate();
  const [listModal, setListModal] = React.useState(false);
  const [searchString, setSearchString] = React.useState("");
  const [activityGroups, setActivityGroups] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const activityGroupSelected = useSelector(
    (state) => state.activityGroup.activityGroupSelected
  );

  const activityGroup = useSelector(state => state.activityWhole.activityGroup)

  const dispatch = useDispatch();

  const getActivitiesGroup = () => {
    setActivityGroups({
      ...activityGroup,
      loading: true,
    });
    axios
      .get(`${BASE_URL_ACT}/getActivitiesGroup`, { withCredentials: false })
      .then((res) => {
        // console.log(res?.data?.data)
        let uniqueArr = res?.data?.data.map((item) => item["Activity Group"]);
        let uniqueGroup = new Set(uniqueArr);
        // console.log(uniqueGroup)
        setActivityGroups({
          ...activityGroup,
          loading: false,
          data: [...uniqueGroup],
        });
        // setLoading(false)
      })
      .catch((err) => {
        console.log(err);
        // setLoading(false)
        setActivityGroups({
          ...activityGroup,
          loading: false,
        });
      });
  };

//   const getActivities = (actgrp) => {
//     setLoading(true);
//     axios
//       .get(
//         `${BASE_URL_ACT}/getActivities?searchText=${searchParam.trim()}&currentPage=${
//           currentPage - 1
//         }&zone=${zone.trim()}&licenseType=${licenseType.trim()}&isSpecial=${isSpecial.trim()}&riskClass=${riskClass.trim()}&compRR=${compRR.trim()}&activityGroup=${actgrp?.trim()}`,
//         { withCredentials: false }
//       )
//       .then((res) => {
//         console.log(res);
//         dispatch(setActivities(res?.data?.data.response))
//         setI(res?.data?.data.response);
//         dispatch(setItems(res?.data?.data.response));
//         dispatch(setTotalItems(res.data.data.recordCount));
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.log(err);
//         setLoading(false);
//       });
//   };

  React.useEffect(() => {
    getActivitiesGroup();
  }, []);

//   React.useEffect(()=>{

//   },[activityGroup])

  const listRef = React.useRef();
  React.useEffect(() => {
    let close = (e) => {
      if (!listRef.current.contains(e.target)) {
        setListModal(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => {
      document.removeEventListener("mousedown", close);
    };
  }, []);
  //  console.log(activityGroup,activityGroupSelected)
  return (
    <div className="h-full w-full flex">
      {activityGroups?.loading ? (
        <p className="h-full px-2 text-[14px] leading-[32px]">
          Loading... Please Wait
        </p>
      ) : (
        <div className="w-full h-full relative">
          <p
            className="h-full w-full text-[14px] text-[#555] flex items-center px-3 active:border-green-400 cursor-pointer"
            onClick={() => setListModal(true)}
          >
            {activityGroup === ""
              ? "Choose Your Business Type"
              : activityGroup}
          </p>
          <div
            className={
              listModal ? "h-0 w-full overflow-visible relative mt-2" : "hidden"
            }
            ref={listRef}
          >
            <div className="bg-white rounded-sm shadow-2xl absolute top-0 left-0 w-full">
              <div className="bg-white p-2">
                <input
                  type="search"
                  value={searchString}
                  className="h-[36px] px-2 text-[14px] border rounded-sm w-full bg-white"
                  onChange={(e) => {
                    setSearchString(e.target.value.toString().toLowerCase());
                    if (searchString === "") {
                      dispatch(setActivityGroup(""));
                    //   getActivities("");
                    }
                  }}
                  placeholder="Search Any Business"
                />
              </div>
              <div className="p-2 max-h-[200px] overflow-y-scroll">
                <div className="border p-2 rounded-sm">
                  {activityGroups?.data
                    ?.filter((item) => {
                      return item
                        ?.toString()
                        ?.toLowerCase()
                        .includes(searchString);
                    })
                    ?.map((item) => {
                      return position === "home" ? (
                        <p
                          className="leading-[36px] text-[14px] px-2 border-b ellipsis hover:bg-[#eee] cursor-pointer block"
                          onClick={() => {
                            dispatch(setActivityGroup(item));
                            // getActivities(item);
                            setListModal(false);
                            navigate("activities-list");
                          }}
                          key={item}
                        >
                          {item}
                        </p>
                      ) : (
                        <p
                          className="leading-[36px] text-[14px] px-2 border-b ellipsis hover:bg-[#eee] cursor-pointer block"
                          onClick={() => {
                            dispatch(setActivityGroup(item));
                            // getActivities(item);
                            setListModal(false);
                          }}
                          key={item}
                        >
                          {item}
                        </p>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* {
            position === 'home' ? null :
            <button className='h-full w-[30px] text-center text-[14px] flex items-center justify-center bg-black text-white rounded-r-sm shrink-0' onClick={getActivities}>
            <IoSearchOutline className=''/></button>
        } */}
    </div>
  );
}
