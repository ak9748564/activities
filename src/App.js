import React from "react";

import './style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Login from './components/auth/Login';
// import Queries from './components/pages/Queries';
// import Dashboard from "./components/pages/Dashboard";
// import ProfilePage from "./components/pages/ProfilePage";

// more section
// import SpeedTest from "./components/pages/SpeedTest";
// import MemberList from './components/pages/MemberList';
// import FraudClicks from "./components/pages/FraudClicks";
// import SpamMarking from "./components/pages/SpamMarking";
// import ReportBuilder from "./components/pages/ReportBuilder";
// import FacebookPages from "./components/pages/FacebookPages";
// import KeywordPlanner from "./components/pages/KeywordPlanner";
// import FacebookMapping from "./components/pages/FacebookMapping";
// import AccessControlList from "./components/pages/AccessControlList";
// import Notification from "./test/Notification";
// import Notify from "./test/Notification";
import Home from "./activities/components/Home";
import Activities from "./activities/components/Activities";
import ActivitiesTable from "./activities/components/ActivitiesTable";
import axios from "axios";
import { BASE_URL_ACT } from "./redux/constants";
import { setItems, setTotalItems } from "./redux/paginationSlice";
import { useDispatch, useSelector } from "react-redux";
// import Api from "./test/Api";

// import Redux_states_child from "./test/Redux_states_child";

export default function App() {  
  const [activityGroup,setActivityGroup] = React.useState({
    loading: false,
    data: []
  });
  const [loading,setLoading] = React.useState(false);

  const [activityGroupSelected, setActivityGroupSelected] = React.useState('');

  const [zone,setZone] = React.useState('');
    const [licenseType,setLicenseType] = React.useState('');
    const [isSpecial,setIsSpecial] = React.useState('');
    const [riskClass,setRiskClass] = React.useState('');
    const [compRR,setCompRR] = React.useState('');
    const [items,setI] = React.useState([]);


    const dispatch = useDispatch();

  const searchParam = useSelector(state => state.filters.searchParam);
  const currentItems = useSelector(state=>state.pagination.currentItems);
    const currentPage = useSelector(state=>state.pagination.currentPage);

    const resultArr = useSelector(state => state.filters.resultArr);
    const searchQuery = useSelector(state => state.filters.searchQuery);

  const getActivitiesGroup = () => {
    setActivityGroup({
      ...activityGroup,
      loading: true
    });
    axios.get(`${BASE_URL_ACT}/getActivitiesGroup`,{withCredentials:false})
    .then((res)=>{
      // console.log(res?.data?.data)
      let uniqueArr = res?.data?.data.map((item)=>item['Activity Group']);
      let uniqueGroup = new Set(uniqueArr)
      // console.log(uniqueGroup)
      setActivityGroup({
        ...activityGroup,
        loading: false,
        data: [...uniqueGroup]
      });
      // setLoading(false)
    }).catch((err)=>{
      console.log(err);
      // setLoading(false)
      setActivityGroup({
        ...activityGroup,
        loading: false,
      }); 
    })
  }

//   const getActivities = () => {
//     setLoading(true);
//         axios.get(`${BASE_URL_ACT}/getActivities?searchText=${searchParam.trim()}&currentPage=${currentPage-1}&zone=${zone.trim()}&licenseType=${licenseType.trim()}&isSpecial=${isSpecial.trim()}&riskClass=${riskClass.trim()}&compRR=${compRR.trim()}&activityGroup=${activityGroupSelected.trim()}`,{withCredentials:false})
//         .then((res)=>{
//             console.log(res)
//             setI(res?.data?.data.response)
//             dispatch(setItems(res?.data?.data.response))
//             dispatch(setTotalItems(res.data.data.recordCount))
//             setLoading(false)
//         }).catch((err)=>{console.log(err);setLoading(false)})
// }

  React.useEffect(()=>{
    getActivitiesGroup()
  },[])
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* 404 Page Not Found  */}
          <Route path="*" element={
          <div className="h-screen w-screen flex items-center justify-center">
            <div className="s3:flex items-center text-center s3:text-left transition-all">
              <p className="text-[24px] s3:text-[30px] font-semibold transition-all">404</p>
              <div className="w-full s3:h-[60px] border-t h-[2px] s3:w-[2px] s3:border-l my-3 s3:my-0 s3:mx-5 transition-all"></div>
              <p className="text-[16px] s3:text-[20px] text-black/70 font-semibold transition-all">This page could not be found.</p>
            </div>
          </div>
          }/>
          {/* <Route path="/" element={<Dashboard/>}/> */}
          <Route 
          path="/" 
          element={
            <Home
            activityGroup={activityGroup?.data}
            activityGroupSelected={activityGroupSelected}
            setActivityGroupSelected={setActivityGroupSelected}
            // getActivities={getActivities}
            getActivitiesGroup={getActivitiesGroup}
            />
          }/>
          <Route path="/activities-table" element={<ActivitiesTable getActivitiesGroup={getActivitiesGroup}/>}/>
          <Route path="/activities-list" element={
          <Activities
          activityGroup={activityGroup?.data}
          activityGroupSelected={activityGroupSelected} 
          setActivityGroupSelected={setActivityGroupSelected}
          getActivitiesGroup={getActivitiesGroup}/>}/>
          {/* <Route path="/login" element={<Login/>}/>
          <Route path="/queries" element={<Queries/>}/> */}

          {/* More Pages  */}
          {/* <Route path="/speed-test" element={<SpeedTest/>}/>
          <Route path="/memberlist" element={<MemberList/>}/>
          <Route path="/edit-profile" element={<ProfilePage/>}/>
          <Route path="/spam-marking" element={<SpamMarking/>}/>
          <Route path="/fraud-clicks" element={<FraudClicks/>}/>
          <Route path="/report-builder" element={<ReportBuilder/>}/>
          <Route path="/facebook-pages" element={<FacebookPages/>}/>
          <Route path="/keyword-planner" element={<KeywordPlanner/>}/>
          <Route path="/facebook-mapping" element={<FacebookMapping/>}/>
          <Route path="/access-control-list" element={<AccessControlList/>}/> */}

          {/* test  */}
          {/* <Route path="/redux-states-child" element={<Redux_states_child/>}/> */}
          {/* <Route path="/api" element={<Api/>}/> */}
          {/* <Route path="/notification" element={<Notify/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
