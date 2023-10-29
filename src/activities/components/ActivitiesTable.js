import React from 'react'
import Table from './Table'
import axios from 'axios';

export default function ActivitiesTable() {
    const [items,setItems] = React.useState([]);
    const [loading,setLoading] = React.useState(false);
    React.useEffect(()=>{
        setLoading(true);
        axios.get('https://galaxy-exhibitions-activities.onrender.com/getActivities')
        .then((res)=>{
            console.log(res)
            setItems(res?.data?.data?.slice(0,3))
            setLoading(false)
        }).catch((err)=>{console.log(err);setLoading(false)})
    },[])
    
  return (
    <div className='p-10 h-screen'>
        {
            loading ? 'Loading...'
            : <Table currentItems={items}/>
        }      
    </div>
  )
}
