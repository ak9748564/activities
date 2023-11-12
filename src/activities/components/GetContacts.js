import axios from 'axios';
import React from 'react';

export default function GetContacts() {
    const [contacts,setContacts] = React.useState([]);
    React.useEffect(()=>{
        axios.get('http://localhost:4000/contact')
        .then(res=>{setContacts(res.data);})
        .catch(err=>console.log(err))
    })
    // const deleteContact = (id) => {
    //     axios.delete(`http://localhost:4000/contact/delete/${id}`)
    //     .then(res=>console.log(res))
    //     .catch(err=>console.log(err))
    // }
  return (
    <div className='max-w-[1200px] m-auto text-left p-2 border rounded-md mt-5'>
      <table className='w-full p-2'>
        <thead>
            <tr>
                <th className='h-[36px] px-2 leading-[36px] border-t border-b w-[50px]'>Sr.No:</th>
                <th className='h-[36px] px-2 leading-[36px] border-t border-b'>Name</th>
                <th className='h-[36px] px-2 leading-[36px] border-t border-b'>Email</th>
                <th className='h-[36px] px-2 leading-[36px] border-t border-b'>Phone</th>
                <th className='h-[36px] px-2 leading-[36px] border-t border-b'>Message</th>
                {/* <th className='h-[36px] px-2 leading-[36px] border-t border-b'>Delete</th> */}
            </tr>
        </thead>
        <tbody>
            {
                contacts.map((item,index)=>{
                    return <tr key={item._id}>
                        <td className='px-2 leading-[30px] border-b'>{index+1}</td>
                        <td className='px-2 leading-[30px] border-b'>{item.name}</td>
                        <td className='px-2 leading-[30px] border-b'>{item.email}</td>
                        <td className='px-2 leading-[30px] border-b'>{item.phone}</td>
                        <td className='px-2 leading-[30px] border-b'>{item.message}</td>
                        {/* <td className='px-2 leading-[30px] border-b' onClick={()=>deleteContact(item._id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                            </svg>
                        </td> */}
                    </tr>
                })
            }
            <tr>
                <td></td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}
